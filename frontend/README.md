# Company Climate – Frontend

This is the frontend application for **Company Climate**, a web app that accepts a series of temperature values from the user, sends them to the backend, and displays the value closest to zero along with a visual chart.

---

## Tech Stack

- **React**
- **Chart.js** via `react-chartjs-2`
- **Jest** + **React Testing Library** for unit testing
- **CSS Modules** for styling

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/DeepCFoxXx/company-climate
cd company-climate/frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

The app will be running at:
**<http://localhost:3000>**

> ⚠️ Make sure the backend server is running at **<http://localhost:5050>**. This is the default API base URL.

---

## Testing

Run the full test suite with:

```bash
npm test
```

This runs all unit/component tests using Jest and React Testing Library.

---

## Environment Configuration

If needed, update the base API URL in:

```js
src / services / api.js;

const API_BASE_URL = 'http://localhost:5050/api';
```

---
