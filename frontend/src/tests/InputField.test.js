import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import InputField from '../components/InputField';

describe('InputField component', () => {
  test('renders with placeholder text', () => {
    render(<InputField value="" onChange={() => {}} />);
    expect(screen.getByPlaceholderText(/e.g. -5, -1, 0.2, 3/i)).toBeInTheDocument();
  });

  test('calls onChange when typing', () => {
    const handleChange = jest.fn();
    render(<InputField value="" onChange={handleChange} />);

    fireEvent.change(screen.getByPlaceholderText(/e.g. -5/i), {
      target: { value: '10' },
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('adds error class when error is true', () => {
    render(<InputField value="" onChange={() => {}} error={true} />);
    expect(screen.getByRole('textbox')).toHaveClass('temperature-input error');
  });

  test('sets aria-invalid when error is true', () => {
    render(<InputField value="" onChange={() => {}} error={true} />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  test('does not add error class when error is false', () => {
    render(<InputField value="" onChange={() => {}} error={false} />);
    expect(screen.getByRole('textbox')).not.toHaveClass('temperature-input error');
  });

  test('sets aria-invalid to false when error is false', () => {
    render(<InputField value="" onChange={() => {}} error={false} />);
    expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-invalid');
  });
});
