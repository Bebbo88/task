# 🛍️ Frontend Task – Next.js

This project implements a complete **Frontend Task** using **Next.js (App Router)**, including an **Authentication Flow** and a **Pixel-Perfect Product Details UI** based on the provided Figma design.

---

## 🚀 Live Demo
👉 https://YOUR-VERCEL-LINK.vercel.app

## 📦 GitHub Repository
👉 https://github.com/Bebbo88/task

---

## 🛠 Tech Stack
- Next.js (App Router)
- JavaScript
- Tailwind CSS
- Formik & Yup (Forms & Validation)
- Axios (API integration)
- Vercel (Deployment)

---

## ✨ Features

### 🔐 Authentication Flow
- Register with:
  - Full Name
  - Email
  - Password
  - Phone Number
  - Country Code
- Email Verification using a 6-digit code  
  - **Test Code:** `123456`
- Login with Email & Password
- JWT Token stored in `localStorage`
- Protected Dashboard
- Logout functionality

---

### 🛒 Product Details UI
- Pixel-perfect implementation from Figma
- Fully responsive (Desktop & Mobile)
- Product gallery with thumbnails
- Product details:
  - Title & description
  - Price & discounted price
  - Type & size selectors
  - Color selector
  - Quantity selector
  - Add to Cart button
- Ratings & reviews section
- Similar products section
- Custom footer with background image

---

## 🔁 Authentication Flow Overview
1. **Register**
   - User submits registration form
   - API returns a verification token
   - Token is stored temporarily in `localStorage`

2. **Verify Email**
   - User enters the verification code (`123456`)
   - Verification request is sent with Authorization header
   - Token is removed after successful verification

3. **Login**
   - User logs in with email & password
   - JWT token and user data are stored in `localStorage`

4. **Dashboard**
   - Protected route
   - Displays: `Welcome, [User Name]`
   - Redirects to login if not authenticated

---

## 🧪 Validation & UX
- Form validation using **Yup**
- Numeric-only verification code input
- Graceful API error handling
- Defensive parsing of stored data to avoid runtime errors
- Clean, reusable, and scalable components

---

## ⚙️ Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/Bebbo88/task.git
