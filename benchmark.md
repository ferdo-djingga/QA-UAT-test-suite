# Benchmark & Coverage — QA/UAT Demo

## Executive Summary
- **Total planned test cases:** 10  
- **Executed test cases:** 10 → **Coverage: 100%**  
- **Defects logged:** 2 reproducible issues with screenshots.  
- **Structured run time:** 8 minutes.  

---

## Coverage
All 10 planned cases were executed in the structured run, resulting in **100% coverage** of functional, negative, and usability scenarios.

---

## Timing
- Structured execution of the full 10-case suite took *8 minutes**.  
- This demonstrates that even a small, disciplined test suite can be executed quickly and consistently, with results logged and evidence captured.  

---

## Defect Detection
- **Defects found in earlier cycle:** 2 (now resolved)
  - BUG-001 (P1): Invalid email format accepted (`user@domain`) → **Fixed** by strengthening email validation.
  - BUG-002 (P2): Duplicate success message on rapid double-click → **Fixed** by adding a simple submit guard.
- **Defects logged (this measured run):** 0
- Outcome: The suite now passes all negative and edge cases; current behavior aligns with expected results across all 10 scenarios.

---

## Observations
- A structured test suite ensured no critical scenario was overlooked.  
- All outcomes were recorded consistently in the test case sheet, making the results auditable and repeatable.  
- The two discovered defects highlight the value of running through negative and edge-case scenarios, not just the “happy path.”  

---

## Deliverables
- **Test Cases:** `tests/test_cases.csv` with Pass/Fail statuses.  
- **Bug Reports:** `tests/bug_report.md` with reproduction steps and screenshots.  
- **Benchmark:** This document summarizing coverage, execution time, and defect findings.