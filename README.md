# 📝 Full-Stack Notes App

A modern full-stack **Notes App** built with the latest tools using **Next.js 15, Shadcn UI, Drizzle ORM, Better Auth, etc**. Jotly makes note-taking seamless with a rich text editor, authentication (email/password & Google sign-in), server actions, email verification, dark mode, and custom themes.

<img src="https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=for-the-badge" /> <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" /> <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" /> <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" /> <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />

---

## 🚀 Features

- ⚡ **Next.js 15** with App Router & Server Actions
- 🎨 **Shadcn UI** for modern, customizable UI components
- 🔐 **Better Auth**  
  - Email + Password authentication  
  - Google OAuth sign-in  
  - Email verification & reset password
- 📧 **Email sending** for verification and password resets
- 🗒️ **Rich Text Editor** powered by [Tiptap](https://tiptap.dev/)
- 🌙 **Dark mode** & custom themes
- 📱 **Responsive UI** with sidebar navigation
- 🗄️ **Database logic with server actions**

---

## ⚙️ Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/AmanKrSahu/jotly.git
cd jotly
````

### 2. Install dependencies

```bash
pnpm install
# or
npm install
# or
yarn install
```

### 3. Setup environment variables

Create a `.env` file in the root

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000

BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=

DATABASE_URL=postgresql://neondb_owner:

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

RESEND_API_KEY="your_resend_api_key"
```

### 4. Setup the database

```bash
npx drizzle-kit push
```

### 5. Run the dev server

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

App will be available at: [http://localhost:3000](http://localhost:3000)

---

## 🛠 Development Notes

* Server Actions handle database mutations securely
* Notes saved in rich-text format via **Tiptap**
* All auth-related routes live in `(auth)/` segment
* Middleware ensures protected routes

---

## Features and Interfaces

1. Home Page

<img width="1920" height="1080" alt="home" src="https://github.com/user-attachments/assets/3c13b383-cdd7-4dbe-8e49-900c31e81203" />

2. Login Page

<img width="1920" height="1080" alt="login" src="https://github.com/user-attachments/assets/86b9e27f-8c67-4aa5-9f92-29116ed3f310" />

3. Dashboard Page

<img width="1920" height="1080" alt="dashboard" src="https://github.com/user-attachments/assets/9a77fe10-c706-41a2-b9d6-a5685428105d" />

4. Notebook Page

<img width="1920" height="1080" alt="notebook" src="https://github.com/user-attachments/assets/195a8318-eaec-4935-bdf2-9030e1fe7ee2" />

5. Notes Editor Page

<img width="1920" height="1080" alt="notes-editor" src="https://github.com/user-attachments/assets/6b9fe865-3a77-456e-bf0b-1b644fd435db" />

---

## 🚀 Need Help??

Feel free to contact me on [Linkedin](https://www.linkedin.com/in/amankrsahu)

[![Instagram URL](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/itz.amansahu/) &nbsp; [![Discord URL](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](discordapp.com/users/539751578866024479)
