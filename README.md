# QA / UAT Test Suite — Demo Login Web App

A lightweight web application with a structured Quality Assurance (QA) and User Acceptance Testing (UAT) test suite.  
This project demonstrates how to design test cases, execute scenarios, log defects, and measure coverage and efficiency.

---

## Features
- **Demo Login Page** (`app/`):
  - Email and password input with simple client-side validation
  - Messages for success, error, and warnings
  - Basic UX elements: “Remember me” toggle and “Forgot password” link
- **Test Artifacts** (`tests/`):
  - `test_cases.xlsx` — 10 functional, negative, and usability test cases
  - `test_plan.md` — scope, approach, risks, deliverables
  - `bug_report.md` — defect report template and sample issues
- **Benchmarking**:
  - `benchmark.md` — framework for recording coverage, time saved, and defect leakage
- **Screenshots** (`screenshots/`):
  - Add evidence of test execution or coverage charts

---

## Project Structure
Web-Application-Quality-Assurance-(QA)-and-User-Acceptance-Testing-(UAT)-Test-Suite/
├─ tests/              # Test plan, cases, bug reports
├─ screenshots/        # Evidence (optional)
├─ benchmark.md        # Coverage and time tracking
└─ README.md

---

## Project Instructions (3 Options)

### Option 1 — Run with VS Code Live Server (Recommended)
1. Install the **Live Server** extension in VS Code.  
2. Open `index.html` in the editor.  
3. Right-click → **“Open with Live Server”**.  
4. The page will open at `http://127.0.0.1:5500/app/index.html`.  
   - Any changes to the files will auto-refresh in the browser.  

### Option 2 — Open directly (Simplest)
1. Go to the `app/` folder.  
2. Double-click `index.html`.  
3. The login form will open in your default browser.  

### Option 3 — Run with Python (Local)
If Python is installed, you can serve the app locally:
```bash
cd app
python -m http.server 8000