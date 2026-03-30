This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
"# todo-app" 


# 📝 Next.js Todo App

A simple Todo application built with Docker, TypeScript, React, and Next.js.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Docker | Isolated development environment |
| TypeScript | Type-safe JavaScript |
| React | UI component library |
| Next.js | Full-stack React framework |
| Git + GitHub | Version control |

---

## 📋 Prerequisites

Before you begin, make sure you have installed:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/) (recommended)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/nextjs-todo-app.git
cd nextjs-todo-app
```

### 2. Start the Docker container
```bash
docker compose up -d --build
```

### 3. Enter the container shell
```bash
docker compose exec app sh
```

### 4. Install dependencies and start the dev server
```bash
cd myapp
npm install
npm run dev
```

### 5. Open in browser
```
http://localhost:3000
```

---

## 📁 Project Structure
```
todo-app/
├── Dockerfile
├── docker-compose.yml
└── myapp/
    ├── src/
    │   └── app/
    │       ├── page.tsx       # Main Todo App
    │       ├── layout.tsx     # Root layout
    │       └── globals.css    # Global styles
    ├── public/
    ├── package.json
    └── next.config.ts
```

---

## ✨ Features

- ✅ Add new tasks
- ✅ Mark tasks as complete
- ✅ Delete tasks
- ✅ Built with TypeScript for type safety
- ✅ Styled with Tailwind CSS

---

## 🐳 Docker Commands

| Action | Command |
|--------|---------|
| Start container | `docker compose up -d --build` |
| Enter container | `docker compose exec app sh` |
| Stop container | `docker compose down` |
| Check running containers | `docker ps` |

---

## 📌 Git Commands

| Action | Command |
|--------|---------|
| Stage all changes | `git add .` |
| Commit changes | `git commit -m "your message"` |
| Push to GitHub | `git push` |
| Check status | `git status` |

---

## 🔧 Troubleshooting

**Port 3000 already in use**
```bash
docker stop $(docker ps -q)
```

**PowerShell script execution error**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**Changes not showing in browser**

Press `Ctrl + Shift + R` to hard refresh.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).