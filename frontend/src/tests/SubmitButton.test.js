import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import SubmitButton from '../components/SubmitButton';

describe('SubmitButton component', () => {
  test('renders "Submit" when not disabled', () => {
    render(<SubmitButton onClick={() => {}} disabled={false} />);
    expect(screen.getByRole('button')).toHaveTextContent('Submit');
    expect(screen.getByRole('button')).not.toBeDisabled();
  });

  test('renders "Submitting..." when disabled', () => {
    render(<SubmitButton onClick={() => {}} disabled={true} />);
    expect(screen.getByRole('button')).toHaveTextContent('Submitting...');
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('calls onClick when clicked and not disabled', () => {
    const handleClick = jest.fn();
    render(<SubmitButton onClick={handleClick} disabled={false} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(<SubmitButton onClick={handleClick} disabled={true} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
