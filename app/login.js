(function () {
  const form = document.getElementById('loginForm');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const msg = document.getElementById('msg');
  const forgot = document.getElementById('forgot');

  function isStrong(pw) {
    // Simple strength rule: at least 8 chars and at least one digit
    return pw.length >= 8 && /\d/.test(pw);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    msg.className = '';
    msg.textContent = '';

    const emailVal = email.value.trim();
    const passVal = password.value;

    if (!emailVal) {
      msg.className = 'error';
      msg.textContent = 'Email is required.';
      return;
    }
    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
      msg.className = 'error';
      msg.textContent = 'Enter a valid email address.';
      return;
    }
    if (!isStrong(passVal)) {
      msg.className = 'warn';
      msg.textContent = 'Weak password: use 8+ characters with at least one number.';
      return;
    }

    // For demo purposes, always "succeeds" after validation passes
    msg.className = 'success';
    msg.textContent = 'Login successful (demo).';
  });

  forgot.addEventListener('click', function (e) {
    e.preventDefault();
    msg.className = '';
    msg.textContent = 'Password reset flow not implemented (demo).';
  });
})();