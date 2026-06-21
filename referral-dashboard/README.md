# Go Business Referral Dashboard

A secure and responsive Referral Dashboard application built using React.js. The application enables users to manage referrals, track earnings, monitor partner activity, and view detailed referral information through an intuitive dashboard interface.

---

## Live Demo

🔗 **Live URL:** Add your Vercel deployment link here

---

## GitHub Repository

🔗 **Repository URL: https://github.com/Binusha123/referralDashboard

---

## Test Credentials

```text
Email: admin@example.com
Password: admin123
```

---

## Features

### Authentication

* Secure login using JWT-based authentication
* Protected routes using route guards
* Cookie-based session management
* Automatic redirection for authenticated and unauthenticated users
* Logout functionality

### Dashboard Overview

* Total Balance
* Discount Percentage
* Total Referrals
* Discount Amount
* Commission Amount
* Total Earnings
* Commission Discount
* Total Bank Transfer

### Service Summary

* Service Details
* Your Referrals
* Active Referrals
* Total Referral Earnings

### Referral Sharing

* Referral Link Display
* Referral Code Display
* One-click Copy Link functionality
* One-click Copy Code functionality

### Referral Management

* Search referrals by name or service
* Sort referrals by date
* Client-side pagination
* Responsive data table
* Clickable rows for detailed view

### Referral Details

* Individual referral information
* Referral ID
* Service Name
* Referral Date
* Profit Details
* Back to Dashboard navigation

### Additional Features

* Responsive design
* Loading states
* Error handling
* 404 Not Found page
* Protected routing
* Clean UI and reusable components

---

## Tech Stack

### Frontend

* React.js
* React Router DOM
* JavaScript (ES6+)
* CSS3

### Authentication

* JWT Authentication
* js-cookie

### API Integration

* Fetch API
* REST APIs

---

## Project Structure

```text
src
│
├── components
│   ├── Navbar
│   ├── ProtectedRoute
│   ├── OverviewSection
│   ├── ServiceSummary
│   ├── ShareReferral
│   └── ReferralsTable
│
├── pages
│   ├── Login
│   ├── Dashboard
│   ├── ReferralDetails
│   └── NotFound
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## API Endpoints

### Login

```http
POST /api/auth/signin
```

### Get Referrals

```http
GET /api/referrals
```

### Search Referrals

```http
GET /api/referrals?search=pm
```

### Sort Referrals

```http
GET /api/referrals?sort=asc
```

### Referral Details

```http
GET /api/referrals?id=48
```

---

## Installation

### Clone Repository

```bash
git clone <your-repository-url>
```

### Navigate to Project

```bash
cd referral-dashboard
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build Production Version

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Application Flow

```text
Login
   ↓
Dashboard
   ↓
Overview Metrics
   ↓
Referral Management
   ↓
Search / Sort / Pagination
   ↓
Referral Details
   ↓
Logout
```

---

## Key Functionalities Implemented

### Authentication Flow

* Login with API
* JWT token storage
* Cookie management
* Protected routes
* Session persistence

### Dashboard Features

* Dynamic data rendering
* API integration
* Reusable component architecture
* Responsive layout

### Referral Table

* Search functionality
* Sorting functionality
* Pagination (10 rows per page)
* Date formatting
* Currency formatting

### Routing

* Login Route
* Dashboard Route
* Referral Details Route
* Not Found Route

---

## Challenges Faced

* Implementing JWT-based route protection
* Managing search and sort through API requests
* Building reusable dashboard components
* Implementing client-side pagination
* Handling dynamic API response structures
* Creating a responsive layout across devices

---

## Future Enhancements

* Dark Mode Support
* Advanced Filtering Options
* Export Referrals to CSV
* Referral Analytics Dashboard
* Notification System
* Profile Management
* Real-time Updates

---

## Author

**Atluri Binusha**

B.Tech Computer Science Engineering (AI & ML)

Full Stack Developer | AI & ML Enthusiast

GitHub: https://github.com/Binusha123

LinkedIn: https://linkedin.com/in/atluri-binusha

---

## License

This project was developed as part of the Go Business Referral Dashboard Coding Assessment and is intended for educational and evaluation purposes.
