# Alloy-Assignment

# Alloy-Sandbox Demo

A tiny Node.js script that demonstrates how a bank could integrate with **Alloy’s
Evaluation API** to automate applicant decisions and minimise manual reviews.

---

## 🏗️ What the code does

| File | Purpose |
|------|---------|
| `index.js` | Collects / hard-codes an applicant payload, posts it to **`/v1/evaluations`**, reads `summary.outcome`, and prints an appropriate message. |
|  └─ `runEvaluation()` | Low-level helper that performs the HTTP request and outcome branching. |
|  └─ `sandboxPersonas()` | Convenience helper that runs three test applicants (`Approved`, `Manual Review`, `Deny`) by swapping the last name. |

---

## 🚀 Quick start

```bash
# 1. clone the repo
git clone https://github.com/<your-handle>/Alloy-Assignment.git
cd Alloy-Assignment

# 2. install deps
npm install         # axios + dotenv

# 3. create env vars (⚠️ never commit this file)
echo "ALLOY_TOKEN=your_token_here
ALLOY_SECRET=your_secret_here" > .env

# 4. run the demo
node index.js



▶ Running evaluation for last name **Smith**
✅  Congratulations! You are approved.

▶ Running evaluation for last name **Review**
⌛  Your application is under review. Please wait for further updates.

▶ Running evaluation for last name **Deny**
❌  Unfortunately, we cannot approve your application at this time.
