# Kaizen Que Pvt Ltd Assignment

This repository contains the frontend and backend implementations for the Kaizen Que Pvt Ltd assignment, completed on July 24, 2025. The project includes a responsive React.js frontend with a form and a live clock, and a Node.js/Express.js backend with MySQL for form submission and data retrieval.

## Project Structure

The project is split into two parts:

- **Frontend**
- **Backend**

### Frontend

- **Live Demo**: [https://kaizen-seven-rust.vercel.app/](https://kaizen-seven-rust.vercel.app/)
- **Features**:
  - Responsive React.js website built with TypeScript and Tailwind CSS.
  - Matches provided PDF designs for desktop and mobile, with smooth transitions across breakpoints.
  - Includes a form with `fullName`, `email`, and `message` fields, integrated with the backend API.
  - Displays a live clock synced with real-time.
  - Features a semicircle text ("ONLY 6 LEFT") rotated 90 degrees, implemented with SVG.
  - Deployed on Vercel with optimized assets and cross-device compatibility.

### Backend

- **Live Demo**: [https://kaizen-kg1c.onrender.com/](https://kaizen-kg1c.onrender.com/)
- **Features**:
  - Node.js/Express.js service built with TypeScript.
  - MySQL database (hosted on PlanetScale) with Sequelize for ORM.
  - API endpoints:
    - `POST /api/form`: Accepts and stores form data (`fullName`, `email`, `message`).
    - `GET /api/form`: Retrieves all submitted entries in JSON format.
  - Includes input validation, error handling, and CORS support.
  - Deployed on Vercel (serverless) with environment variable configuration.

## Prerequisites

- **Node.js**: v16 or higher
- **MySQL**: Local or cloud instance (e.g., PlanetScale)
- **Git**: For cloning repositories
- **TypeScript**: For compiling frontend and backend code

## Setup Instructions

### Frontend

1. **Clone the Repository**:
  ```bash
   git clone https://github.com/Omkara07/Kaizen.git
   cd frontend
```

Install Dependencies:
npm install

Run Locally:

Development:npm run dev

Production (build and serve):npm run build
npm run start

Configuration:

Update the API endpoint in ClaimForm.tsx to point to the backend URL (e.g., https://your-backend.vercel.app/api/form).
Ensure Tailwind CSS and UI components (e.g., ShadCN) are configured as per the project setup.

Test:

Open http://localhost:5173 in a browser.
Verify form submission, live clock, and semicircle text rendering.
Test responsiveness using Chrome DevTools.

Backend

Clone the Repository:
 ```bash
git clone https://github.com/Omkara07/Kaizen.git
cd backend
```

Install Dependencies:
npm install

Configure Environment Variables:

I have pushed the env file for easy demonstration

Run Locally:

Development (with nodemon):npm run dev

Production:npm run build
npm run start

Test Endpoints:

Use Postman or curl:
POST /api/form:curl -X POST http://localhost:5000/api/form \
-H "Content-Type: application/json" \
-d '{"fullName":"John Doe","email":"john@example.com","message":"Hello!"}'

GET /api/form:curl http://localhost:5000/api/form

Deployment

Frontend (Vercel):

Push code to GitHub.
Link repository to Vercel.
Configure build settings (e.g., npm run build for Next.js or Vite).
Set environment variables (if any) in Vercel dashboard.
Deploy and verify at https://kaizen-seven-rust.vercel.app/ .

Backend (Vercel Serverless):

Push code to GitHub.
Link repository to Vercel.
Set environment variables (DB_HOST, DB_NAME, etc.) in Vercel dashboard.
Configure build command (tsc) and output directory (dist/).
Deploy and verify at https://kaizen-kg1c.onrender.com/ .

Dependencies
Frontend

React: ^18.2.0
TypeScript: ^5.5.4
Tailwind CSS: ^3.4.0
Vite (or other bundler): ^5.4.0
UI Components: Custom or ShadCN-based (Card, Input, Textarea, Button, etc.)

Backend

Express: ^4.19.2
Sequelize: ^6.37.3
sequelize-typescript: ^2.1.6
mysql2: ^3.11.0
cors: ^2.8.5
express-validator: ^7.2.0
dotenv: ^16.4.5
TypeScript: ^5.5.4
Dev: @types/express, @types/cors, ts-node, nodemon

Notes

Design Fidelity: The frontend closely matches the provided PDF designs, with responsive layouts for mobile, tablet, and desktop.
Form Integration: The form submits data to the backend POST /api/form endpoint and displays success/error messages.
Semicircle Text: Implemented with SVG, fully spanning the arc and rotated 90 degrees to the right.
Database: MySQL is hosted on PlanetScale for reliability. Ensure .env is configured correctly.
CORS: Enabled in the backend for seamless frontend integration.
Testing: Both components were tested locally and on deployed URLs for functionality, responsiveness, and API correctness.

For any issues, refer to the console logs or contact me at [singh.omkara07@gmail.com]. Thank you for reviewing my submission!
