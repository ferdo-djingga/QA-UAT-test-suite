# Bug Report Log — QA/UAT Demo (Login Module)

This document records defects identified during an earlier cycle of structured testing of the demo login web application. Both issues were reproducible at the time of discovery, documented with steps and screenshots, and later resolved.  

---

## BUG-001 — Invalid Email Format Accepted (Resolved)

- **ID:** BUG-001  
- **Title:** Invalid email format (`user@domain`) was incorrectly accepted  
- **Severity:** P1 — High  
- **Environment (at time of issue):** Chrome (latest), Windows 10 / macOS 14 (local run via Live Server)  
- **Steps to Reproduce (earlier cycle):**  
  1. Open `app/index.html` in browser.  
  2. Enter email: `user@domain`  
  3. Enter password: `abc12345`  
  4. Click **Sign in**.  
- **Expected Result:**  
  Error message: *“Enter a valid email address.”*  
- **Actual Result (earlier):**  
  Success message: *“Login successful (demo).”*  
- **Fix Applied:** Strengthened email validation regex to require proper domain with TLD.  
- **Resolution Status:** ✅ Fixed  

---

## BUG-002 — Duplicate Message on Rapid Double-Click (Resolved)

- **ID:** BUG-002  
- **Title:** Success message displayed twice on rapid double-click of login button  
- **Severity:** P2 — Medium  
- **Environment (at time of issue):** Chrome (latest), Windows 10 / macOS 14 (local run via Live Server)  
- **Steps to Reproduce (earlier cycle):**  
  1. Open `app/index.html` in browser.  
  2. Enter email: `user@example.com`  
  3. Enter password: `abc12345`  
  4. Double-click **Sign in** quickly.  
- **Expected Result:**  
  A single success message displayed once.  
- **Actual Result (earlier):**  
  The success message flashed twice (appeared duplicated briefly).  
- **Fix Applied:** Added a submit guard to disable button briefly during processing.  
- **Resolution Status:** ✅ Fixed  

---

## Summary

- **Total Defects Logged (earlier cycle):** 2  
- **Total Defects Open (current cycle):** 0  
- **Resolution:** Both issues resolved; current suite passes all 10 test cases successfully.  