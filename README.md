<h1 align="left">Cypress Automation Framework 🚀</h1>

[![Cypress Regression Tests](https://github.com/MaxiFernandes/Automation-Testing-Cypress/actions/workflows/cypress.yml/badge.svg)](https://github.com/MaxiFernandes/Automation-Testing-Cypress/actions/workflows/cypress.yml)
###

<p align="left">UI Automation Framework built with Cypress using Page Object Model (POM), HTML Reporting, and GitHub Actions CI/CD integration.</p>

###

<h2 align="left">🛠 Tech Stack</h2>

###

* Cypress
* JavaScript
* Mochawesome Reporter
* GitHub Actions
* Node.js
* Faker.js

###

<h2 align="left">📌 Features</h2>

###

* Page Object Model (POM)
* Regression test suite
* Known bugs isolation
* HTML reporting
* Automatic screenshots on failure
* Video recording
* CI/CD with GitHub Actions
* Environment variables configuration
* Clean and scalable structure

###

<h2 align="left">📁 Project Structure</h2>

###

```text
cypress/
│
├── e2e/
│   ├── regression/
│   └── known-bugs/
│
├── fixtures/
├── pages/
├── reports/
├── screenshots/
├── support/
└── videos/
```

###

<h2 align="left">⚙️ Installation</h2>

###

* Clone repository: → `git clone https://github.com/MaxiFernandes/Automation-Testing-Cypress.git`  
* Install dependencies: → `npm install`  

###

<h2 align="left">▶️ Run Tests</h2>

###

* Open Cypress UI → `npm run cy:open`
* Run all tests → `npm run cy:run`
* Run regression suite → `npm run regression`
* Run known bugs suite → `npm run known-bugs`

###

<h2 align="left">📈 Reporting</h2>

###

This framework generates:

* HTML Reports
* Screenshots on failures
* Execution videos

Reports are generated automatically after execution.

###

<h2 align="left">🔄 CI/CD</h2>

###

GitHub Actions is configured to:

* Run regression suite automatically
* Generate artifacts
* Upload screenshots, videos and HTML reports
* Keep CI pipeline stable

###

<h2 align="left">🐞 Known Bugs</h2>

###

Known application issues are isolated under:

cypress/e2e/known-bugs

This prevents unstable scenarios from affecting CI stability.

###

<h2 align="left">👨‍💻 Author</h2>

###

Maximiliano Fernandes

QA Automation Engineer
