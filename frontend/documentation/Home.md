# Home Component

This React component serves as the main page for the Company Climate application. It accepts a comma-separated list of temperatures from the user, validates them, sends them to the backend to determine which value is closest to zero, and then displays the result in a bar chart.

---

## Features

- Takes user input of comma-separated temperature values.
- Validates the input using a helper function (`validateInput`).
- Sends a POST request to the backend using the `getClosestTemperature` service.
- Displays a bar chart with the results using `TemperatureChart`.
- Shows error messages for invalid inputs or failed requests.

---

## Imports

```js
import InputField from '../components/InputField';
import SubmitButton from '../components/SubmitButton';
import TemperatureChart from '../components/TemperatureChart';
import { validateInput } from '../helpers/validateInput';
import { getClosestTemperature } from '../services/api';
import '../styles/Home.css';
```

---

## State Variables

- `input`: String for raw user input.
- `values`: Array of parsed numbers from input.
- `closest`: Number that is closest to zero, returned from API.
- `error`: String for error messages.
- `loading`: Boolean to show loading state during API request.

---

## Key Functions

### handleSubmit

- Parses and validates the input.
- Sends data to the backend via `getClosestTemperature`.
- Handles setting results and error states.

---

## UI Overview

- A heading and instruction paragraph.
- An input field and a submit button.
- An error message if input or server fails.
- A paragraph to show the closest number.
- A `TemperatureChart` to visualize the data.

---

## Example Input

```js
-3, 1, 4.5, -1;
```

Will display:

```js
Closest to zero: 1
```

---

## Exports

This component is the default export of the `Home.js` file.

```js
export default Home;
```
