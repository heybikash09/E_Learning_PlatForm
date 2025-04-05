cd Frontend
:: npm i
cd ..
cd Backend
:: npm i

✨ Features

    🔐 Secure logout using Zustand store

    👤 User role & status management

    📚 Course tracking with student enrollment stats

    📊 Dynamic charts (Pie, Bar, Line) using Chart.js

    📈 Weekly student progress tracker

    💻 Tabbed navigation for smooth UX

    💅 Beautiful UI with animated gradients, glassmorphism, and TailwindCSS utilities
Folder Structure
--src/
├── pages/
│   └── Admin.jsx           # Core dashboard UI & logic
├── contentStore/
│   └── authStore.js        # Zustand store for auth handling
├── assets/                 # Optional: images, icons
└── App.jsx / main.jsx      # Root entry files

⚙️ Tech Stack
Tech	Purpose
React	Component-based frontend UI
Chart.js	Data visualization
Zustand	Lightweight state management
Lucide-react	Tab icons and UI interactivity
TailwindCSS	Utility-first responsive design

Getting Started
1. Clone and Navigate

git clone https://github.com/your-username/e-learning-dashboard.git
cd e-learning-dashboard

2. Install Dependencies

npm install

3. Start the Dev Server

npm run dev

    App runs at http://localhost:5173 by default (Vite)

🧠 Dashboard Workflow

    Login page (optional): Authenticated access (if integrated)

    Admin Panel Loads:

        App header + animated title

        Logout button for session clearing

    Tabbed Navigation:

        User Mgmt: View user roles, statuses, and breakdown chart

        Courses: Manage course data + enrollment bar chart

        Reports: System metrics overview

        Monitor: Pie charts for system/user statuses

        Progress: Weekly student progress visualized in a line graph

    Logout: Uses Zustand's logout() function

