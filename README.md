🎬 QuickShow

QuickShow is a frontend movie ticket booking web application developed using React, Tailwind CSS, and Clerk authentication.
It provides an intuitive interface for users to browse movies, book tickets, and manage their profiles with secure authentication.

✨ Features

User Authentication with Clerk: Supports email, phone, and social logins with multi-session support.

Movie Listings: Browse movies and view details.

Seat Selection: Choose preferred seats while booking tickets.

Ticket Booking UI: Interactive booking flow (frontend only).

Responsive Design: Optimized for both desktop and mobile.

🛠️ Technologies Used
Frontend

React.js (Vite) – For building the UI.

React Router – For navigation and routing.

Tailwind CSS – For responsive styling.

Clerk – Authentication and session management.

Note

This repository contains only the frontend. Backend features like payment handling, seat reservation logic, and email jobs (Inngest) are not included here.

🚀 Getting Started
Prerequisites

Node.js and npm installed on your system.

A Clerk account for authentication keys.

Installation

Clone the repository:

git clone https://github.com/Amolraut638/QuickShow-Frontend.git
cd QuickShow-Frontend


Install dependencies:

npm install


Setup environment variables:
Create a .env file in the root directory and add your Clerk publishable key:

VITE_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXX

Running the Application

Start the development server:

npm run dev


The app will run at http://localhost:5173/ (default Vite port).

📂 Project Structure
QuickShow-Frontend/
├── public/              # Static assets
├── src/
│   ├── components/      # Navbar, SeatSelector, etc.
│   ├── pages/           # Home, Movies, Booking
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example         # Example environment variables
├── package.json
├── tailwind.config.js
└── README.md

🌍 Deployment

Easily deploy on Vercel, Netlify, or other static hosting services.
👉 Don’t forget to configure your Clerk Publishable Key in the hosting environment variables.

📸 Live Demo

Deployment link coming soon...

📬 Reach Out to Me

Feel free to connect with me:

📧 Email: amolraut1902@gmail.com

🔗 LinkedIn: linkedin.com/in/amolraut9272

💬 Let’s collaborate and build something great!
