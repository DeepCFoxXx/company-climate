# Front-End API Service

**File:** `src/services/api.js`

## Description

Sends a POST request to the backend to determine which temperature in a given list is closest to zero.

## Function Signature

```js
async function getClosestTemperature(values: number[]): Promise<number>
```

## Parameters

| Name   | Type     | Required | Description                                    |
| ------ | -------- | -------- | ---------------------------------------------- |
| values | number[] | Yes      | An array of numbers representing temperatures. |

## Returns

A Promise that resolves with the number from the input array that is **closest to zero**.

## Throws

An error is thrown in the following cases:

- The backend returns a non-OK response (e.g. 400, 500).
- The response format is invalid.
- A network or connection error occurs.

## Example Usage

```js
import { getClosestTemperature } from '../services/api';

async function handleSubmit(values) {
  try {
    const closest = await getClosestTemperature(values);
    console.log('Closest temperature to zero:', closest);
  } catch (err) {
    console.error('Error:', err.message);
  }
}
```

## Backend Requirements

- The backend should expose a `POST /api/temperatures` endpoint.
- It must accept a JSON body like:

```json
{
  "values": [1, -2, 3.5, -1]
}
```

- It should return a JSON response like:

```json
{
  "closest": 1
}
```
