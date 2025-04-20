import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TemperatureChart from '../components/TemperatureChart';

jest.mock('react-chartjs-2', () => ({
  Bar: (props) => (
    <div data-testid="mock-bar-chart">Mock Bar Chart with {props.data.labels.length} labels</div>
  ),
}));

describe('TemperatureChart component', () => {
  const sampleValues = [7, -5, 3.5, -2.2];
  const closest = -2.2;

  test('renders without crashing', () => {
    render(<TemperatureChart values={sampleValues} closest={closest} />);
    expect(screen.getByTestId('mock-bar-chart')).toBeInTheDocument();
  });

  test('renders hot and cold labels', () => {
    render(<TemperatureChart values={sampleValues} closest={closest} />);
    expect(screen.getByText(/hot/i)).toBeInTheDocument();
    expect(screen.getByText(/cold/i)).toBeInTheDocument();
  });

  test('passes the correct number of labels to chart', () => {
    render(<TemperatureChart values={sampleValues} closest={closest} />);
    expect(screen.getByTestId('mock-bar-chart')).toHaveTextContent('4 labels');
  });
});
