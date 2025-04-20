# SubmitButton Component

This component renders a styled button used for submitting user input in the application.

## File Location

`src/components/SubmitButton.js`

## Props

| Prop       | Type     | Description                                                                                                  |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| `onClick`  | Function | Callback function to handle button clicks.                                                                   |
| `disabled` | Boolean  | Controls the disabled state of the button. When true, the button is not clickable and shows 'Submitting...'. |

## Usage

```jsx
import SubmitButton from './SubmitButton';

<SubmitButton onClick={handleClick} disabled={isSubmitting} />;
```

## Styling

Styles are applied using the class name `submit-button`, which is defined in the corresponding CSS file:

```css
.submit-button {
  background-color: #007bff;
}
```

## Behavior

- When `disabled` is `true`, the button shows `"Submitting..."` and becomes unclickable.
- When `disabled` is `false`, it shows `"Submit"` and calls the `onClick` handler when clicked.
