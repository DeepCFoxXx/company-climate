# 🌡️ Company Climate - Backend

This is the backend API for the Company Climate. It receives an array of temperature values, validates the data, calculates the value closest to zero and stores both the input and result in MongoDB.

---

## Tech Stack

- Node.js
- Express
- MongoDB (with Mongoose)
- Jest (for testing)

---

## 1. Clone the repository

```bash
git clone https://github.com/DeepCFoxXx/company-climate
cd company climate/backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure MongoDB

Make sure MongoDB is running locally or replace the connection string with your MongoDB Atlas URI.

In `server.js`, update:

```js
mongoose.connect('mongodb://localhost:27017/companyClimate');
```

---

## Running the Server

```bash
npm start
```

Server will start on: [http://localhost:5050](http://localhost:5050)

---

## API Endpoint

### `POST /api/temperatures`

**Request Body**:

```json
{
  "values": [1, -2, 3.5, -1]
}
```

**Response**:

```json
{
  "closest": 1
}
```

---

## Input Validation

- Must be a non-empty array
- Only numbers are accepted
- Rejects `NaN`, `Infinity`, `null`, `undefined`, and non-number types

---

## Running Tests

```bash
npm test
```
