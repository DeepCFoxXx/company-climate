import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Home from '../pages/Home';
import * as api from '../services/api';

jest.mock('../services/api');

describe('Home page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders input and button', () => {
    render(<Home />);
    expect(screen.getByPlaceholderText(/e.g. -5, -1, 0.2, 3/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  test('shows error message on invalid input', async () => {
    render(<Home />);
    fireEvent.change(screen.getByPlaceholderText(/e.g./i), {
      target: { value: 'bad,input,!' },
    });
    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByText(/please enter valid numbers/i)).toBeInTheDocument();
    });
  });

  test('calls API and displays result on valid input', async () => {
    api.getClosestTemperature.mockResolvedValue(1);

    render(<Home />);
    fireEvent.change(screen.getByPlaceholderText(/e.g./i), {
      target: { value: '-2, 1, 3' },
    });
    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(api.getClosestTemperature).toHaveBeenCalledWith([-2, 1, 3]);
    });

    await waitFor(() => {
      expect(screen.getByTestId('closest-value')).toHaveTextContent('Closest to zero: 1');
    });
  });

  test('displays error message on API failure', async () => {
    api.getClosestTemperature.mockRejectedValue(new Error('fail'));

    render(<Home />);
    fireEvent.change(screen.getByPlaceholderText(/e.g./i), {
      target: { value: '-1, 2' },
    });
    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
    });
  });
});
