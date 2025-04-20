# Breakdown + Further Work

---

## Approach

Create a functional, and testable vertical slice of a temperature app that calculates the value closest to zero

I chose a **React + Node.js/Express** stack with **MongoDB**
and **Chart.js** for the bar graph

- **Backend:** Responsible for validation, business logic (closest-to-zero logic), and persistence
- **Frontend:** Handles user input, communicates with the API, and displays data visually and textually
- **Testing:** Unit and integration tests

---

## If I Had Spent More Time

- **TypeScript**: To introduce type safety

- **Accessibility**: ARIA roles, screen reader support, full keyboard navigation

- **Better API Standards**:
  - Rate limiting
  - input sanitisation
  - schema validation
  - Basic auth

- **Improved Error Handling**:
  - In both the UI and API responses

- **Responsiveness**:
  - Improve interactive responsiveness

- **Lockdown DB**:
  - Roles, usernames + Passwords

---

## Testing Strategy

### Unit Tests

- **Backend**:
  - Helpers (e.g. `getClosestToZero`, `validateInput`)
  - Route logic using mocked dependencies

- **Frontend**:
  - Component rendering
  - Basic interaction and assertions

---

## Notes

- This is not a complete application, but a **foundation** for further development
- The current implementation is intentionally basic

## Meeting the Acceptance Criteria

---

### Requirement: Accept and validate a series of temperature values via a Web API

- Implemented a **RESTful API endpoint** (`POST /api/temperatures`) using Express.
- Validates that input is:
  - An array
  - Contains only valid numbers (excluding `NaN`, `Infinity`, `null`, `undefined`)

---

### Requirement: Return the value closest to zero

- Logic implemented in a reusable helper function `getClosestToZero`.
- If two values are equally close to zero, the **positive** one is returned (e.g. `[-5, 5] → 5`).

---

### Requirement: UI to take parameters and display results

- React frontend:
  - Input field for comma-separated temperatures
  - Submit button with loading state

---

### Requirement: Render result as a bar graph

- Done using **Chart.js** via `react-chartjs-2`.

---

### Requirement: Testing strategy

- Comprehensive testing setup using **Jest**, **React Testing Library**, and **Supertest**.
- Includes:
  - Unit tests for helper functions
  - Route-level API tests (mocked DB)
  - Frontend tests for components and interactions
  - e2e could be implemented using cypress going forward
    (not done but if doing a full app this could be done with Selenium or cypress)

---
