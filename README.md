QuickShow — Frontend

A Movie Ticket Booking Website (Frontend Only) built with React + Vite + Tailwind CSS + Clerk Authentication.
This repository contains only the frontend part of the project.

Features

Authentication with Clerk (Email, Phone, Social logins, Multi-session support)

Browse available movies

Book tickets & select preferred seats (UI only)

User profile & session switching with Clerk

Fully responsive UI with TailwindCSS

Tech Stack

React (Vite) – frontend framework

Tailwind CSS – styling

Clerk – authentication & session management

React Router – navigation

```
Folder Structure
quickshow-frontend/
├── public/               # Static assets
├── src/
│   ├── components/       # Navbar, SeatSelector, etc.
│   ├── pages/            # Home, Movies, Booking
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example          # Example env file
├── package.json
├── tailwind.config.js
└── README.md

```
Setup Instructions

Clone the repo

git clone https://github.com/<your-username>/quickshow-frontend.git
cd quickshow-frontend


Install dependencies

npm install


Configure Clerk

Create a Clerk project at clerk.com

Copy the Publishable Key

Create a .env file in root:

VITE_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXX


Run locally

npm run dev

Deployment

You can deploy easily on Vercel, Netlify, or any static hosting provider.
Make sure to add your Clerk environment variable in project settings.
