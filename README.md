# 🏕️ Piu Cabins – Customer Website

This is the customer-facing website for **Piu Cabins**, a fictional cabin hotel. Guests can explore cabins, make and manage reservations, and update their profiles. The project is built with **Next.js**, **Supabase**, **React Query**, and **Tailwind CSS**.

---

## ✨ Features

### 🏨 About
- View information about the Piu Cabins hotel.

### 🏕️ Cabins
- Browse all available cabins.
- View details for each cabin (e.g. description, capacity, price).
- See available and booked dates.
- Filter cabins by maximum guest capacity.

### 📅 Reservations
- Reserve a cabin for a selected date range.
- View all past and upcoming reservations.
- Edit or cancel existing reservations.
- All reservations are marked as “unconfirmed” by default (no online payment).

### 🔐 Authentication
- Sign up and log in using email and password.
- Authenticated users can create and manage reservations.

### 👤 Profile
- Automatically create a profile upon sign-up.
- Update basic personal details to speed up check-in.

---

## 🧭 Pages & Routes

| Feature           | Route                             |
|-------------------|------------------------------------|
| Homepage          | `/`                                |
| About             | `/about`                           |
| Cabin Overview    | `/cabins`                          |
| Cabin Detail      | `/cabins/:cabinId`                 |
| Login             | `/login`                           |
| Reservation List  | `/account/reservations`            |
| Edit Reservation  | `/account/reservations/edit`       |
| Update Profile    | `/account/profile`                 |

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database & Auth**: [Supabase](https://supabase.com/)
- **Data Fetching**: [React Query](https://tanstack.com/query)
- **State Management**: React Context API

---

## 📌 Notes

This project shares the same Supabase backend and database schema as the admin app built in the main **cabins-management-app** project. This version is focused exclusively on the **guest experience**.
