# 📊 Task 3 – Mazer Admin Dashboard Customization

## 🎯 Objective

The objective of this task is to customize an existing Bootstrap 5 admin dashboard (Mazer) and integrate dynamic data using JavaScript. This demonstrates real-world front-end development skills such as modifying existing codebases and binding UI components to external data sources.

---

## 🛠️ Base Project

* Mazer – Open-source Bootstrap 5 admin dashboard
* Modified and extended instead of building from scratch

---

## 🔧 Changes & Customization

### 🔹 Sidebar Updates

* Reduced and updated menu items to:

  * Dashboard
  * Users
  * Orders
  * Analytics
* Modified navigation structure for clarity and simplicity

---

### 🔹 Dashboard Page (index.html)

* Removed static demo widgets
* Added dynamic KPI cards:

  * Total Users
  * Total Orders
  * Revenue
* Integrated dynamic users table

---

### 🔹 Users Page

* Converted existing table page into Users page
* Displays user data dynamically from JSON

---

### 🔹 Orders Page

* Converted datatable page into Orders page
* Displays order data dynamically from JSON

---

### 🔹 Analytics Page

* Repurposed charts page into analytics overview
* Displays summary metrics dynamically

---

## 📊 Data Integration (Core Feature)

### 📁 data.json

Created a structured JSON file to simulate backend data:

* Users (name, email)
* Orders (id, amount)
* Analytics (totalUsers, totalOrders, revenue)

---

### ⚙️ JavaScript Implementation

* File: `src/assets/static/js/pages/admin-data.js`
* Used modern JavaScript (ES6)
* Implemented:

  * `fetch()` to load data.json
  * Dynamic DOM updates for:

    * Dashboard cards
    * Users table
    * Orders table
* Added error handling for failed data loading

---

## 🔄 Dynamic UI Binding

* All dashboard metrics are dynamically populated
* Tables render data from JSON
* No static hardcoded values remain
* Ensures real-time data-driven UI behavior

---

## 📂 Project Structure

```id="3c8y6h"
src/
 ├── assets/
 │    └── static/js/pages/admin-data.js
 ├── static/
 │    └── data.json
 ├── index.html
 ├── table.html (Users page)
 ├── table-datatable.html (Orders page)
 ├── ui-chart-apexcharts.html (Analytics page)

dist/ (compiled output)
```

---

## ⚙️ How to Run

### Install dependencies

```id="3y9pzx"
npm install --legacy-peer-deps
```

### Run development server

```id="8h3x3w"
npm run dev
```

### Build project

```id="k3bqmb"
npm run build
```

👉 Final output will be generated in the **dist/** folder.

---

## 🌐 Deployment

* Deployed using Netlify
* Publish directory: `dist`

---

## 🚀 Learning Outcome

* Gained experience working with existing codebases
* Learned dynamic data binding using JavaScript
* Improved understanding of DOM manipulation and fetch API
* Practiced real-world dashboard customization

---

## ✅ Conclusion

This task demonstrates the ability to adapt and enhance an existing frontend project while integrating external data dynamically. It reflects practical development skills required in real-world scenarios.

---
