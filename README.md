<div align="center">
  <img src="https://img.shields.io/badge/node.js-v18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js Version" />
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js" />
  <img src="https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f68712" alt="pnpm" />
  <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
</div>

<br />

# 📊 Subscription Tracker API

A professional, high-performance backend application built with **Node.js** and **Express.js** to track and manage subscriptions. It features modular env-based configurations, modern ES modules syntax, and a clean, linted directory structure for production-ready deployments.

---

## 🚀 Key Features

*   **Modular Architecture**: Built with modern ES Modules (`import`/`export`) for modular, readable, and maintainable code.
*   **Environment-Specific Configuration**: Automated load of environment variables dynamically from `.env.[development|production].local` files.
*   **Production-Ready Logging & Middleware**: Standard middleware utilities configured for request logging and response formatting.
*   **Code Quality & Linting**: Integrated with modern **ESLint** config (`eslint.config.js`) for strict quality assurance and unified coding standards.
*   **Fast Development Cycle**: Configured with `nodemon` for auto-restarts on code changes.

---

## 🛠️ Tech Stack & Dependencies

| Tool / Library | Version | Description |
| :--- | :--- | :--- |
| **Node.js** | `>= 18.x` | JavaScript runtime environment |
| **Express** | `~4.16.1` | Minimal and flexible web application framework |
| **dotenv** | `^17.4.2` | Zero-dependency module that loads environment variables |
| **pnpm** | `Latest` | Fast, disk space efficient package manager |
| **ESLint** | `^10.4.1` | Pluggable linting utility for JavaScript code validation |
| **Nodemon** | `^3.1.14` | Hot-reloading tool for rapid development |

---

## 📂 Project Architecture

```
subscription-tracker/
├── config/
│   └── env.js                   # Environment variable loader & export
├── app.js                       # App entry point & server initialization
├── eslint.config.js             # Linting and style rules
├── package.json                 # Project manifest & script definitions
├── .env.development.local       # Local development environments (Git ignored)
├── .env.production.local        # Local production environments (Git ignored)
└── README.md                    # Technical documentation
```

---

## ⚙️ Getting Started & Installation

### Option A: Setup and Initialize from Scratch 🛠️

If you are initializing or reconstructing the project from scratch, follow these steps:

1.  **Generate the Express starter template** (no view engine, git initialized):
    ```bash
    pnpm dlx express-generator --no-view --git ./
    ```
2.  **Install development tools**:
    ```bash
    pnpm i --save-dev nodemon
    ```
3.  **Initialize ESLint configuration**:
    ```bash
    pnpm dlx eslint --init
    ```
4.  **Configure `package.json`**:
    *   Add `"type": "module"` to enable ES Modules.
    *   Add the development script: `"dev": "nodemon app.js"`.
5.  **Create local environment files** in the root directory:
    *   `.env.development.local`
    *   `.env.production.local`
6.  **Set production environment variables**:
    Add the following to `.env.production.local`:
    ```env
    NODE_ENV='production'
    ```

---

### Option B: Clone and Run an Existing Repository 📥

If you are cloning this repository to run it locally:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/LeoCristobal/LearningNodeJs-2026.git
    cd subscription-tracker
    ```
2.  **Install dependencies**:
    ```bash
    pnpm install
    ```
3.  **Configure environment files** (ensure `.env.development.local` and `.env.production.local` are created as defined in Option A).

---

## 🏃 Running the Application

Once setup is complete, run the application using:

*   **Development Mode** (with automatic hot-restarting via nodemon):
    ```bash
    pnpm run dev
    ```
*   **Production Mode**:
    ```bash
    pnpm start
    ```

The API will be available at `http://localhost:<PORT>` (defaults to `8000` in development).

---

## 🧪 Code Quality & Formatting

To run the ESLint validation check:

```bash
pnpm exec eslint .
```

---

## 🤝 Contribution Guidelines

1.  Fork the Project.
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the Branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.
