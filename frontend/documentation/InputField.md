# InputField Component

The `InputField` is a reusable React component for capturing user input, specifically designed to accept a list of temperature values in a comma-separated format.

## Props

| Prop        | Type     | Required | Description                                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------------------------------ |
| `value`     | string   | Yes      | The current value of the input field.                                          |
| `onChange`  | function | Yes      | Callback function to handle input changes.                                     |
| `onKeyDown` | function | No       | Optional callback for keyboard events (e.g., submitting on `Enter` key).       |
| `error`     | boolean  | No       | When `true`, applies error styling and sets ARIA attributes for accessibility. |

## Styling

The component uses the following CSS classes from `InputField.css`:

- `temperature-input`: Base input styling.
- `error`: Applied when the `error` prop is `true` to highlight validation issues.

Example:

```css
.temperature-input {
  border: 1px solid #ccc;
}

.temperature-input.error {
  border: 2px solid red;
}
```

## Accessibility

The input includes the `aria-invalid` attribute when the `error` prop is `true`, helping screen readers identify input errors for better accessibility.

## Example Usage

```jsx
<InputField
  value={input}
  onChange={(e) => setInput(e.target.value)}
  onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
  error={!!error}
/>
```

## Notes

- This component assumes that the parent component is responsible for validating the input and managing the state.
- The placeholder provides guidance on the expected input format: `"e.g. -5, -1, 0.2, 3"`.
