# TemperatureChart Component Documentation

## Overview

`TemperatureChart` is a React component that renders a vertical bar chart displaying temperature values. It uses `react-chartjs-2` and `chart.js` for rendering. The bar closest to zero is highlighted in red, while positive values are orange and negative values are blue.

## Dependencies

- `chart.js`
- `react-chartjs-2`
- CSS styles in `../styles/TemperatureChart.css`

## Props

| Prop    | Type     | Description                                   |
| ------- | -------- | --------------------------------------------- |
| values  | number[] | Array of temperature values to be charted     |
| closest | number   | The value closest to zero, highlighted in red |

## Behavior

- Temperatures are displayed in a bar chart.
- Bars are color-coded:
  - Orange (`#FFA500`) for positive values.
  - Blue (`#007BFF`) for negative values.
- The value closest to zero is labeled in red.
- Axis labels, tooltips, and layout configurations enhance readability.
- Includes a custom plugin to label each bar directly on the chart.

## Example

```jsx
<TemperatureChart values={[-10, -3, 0.5, 2, 7]} closest={0.5} />
```

This will render a bar chart with five values, highlighting `0.5` in red.

## Notes

- The component uses a plugin (`labelPlugin`) to draw custom labels for each bar.
- The `getContext` mocking in `setupTests.js` may be required for unit testing due to `chart.js` canvas rendering.
