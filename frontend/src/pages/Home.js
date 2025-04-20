import { useState } from 'react';
import InputField from '../components/InputField';
import SubmitButton from '../components/SubmitButton';
import TemperatureChart from '../components/TemperatureChart';
import { validateInput } from '../helpers/validateInput';
import { getClosestTemperature } from '../services/api';
import '../styles/Home.css';

function Home() {
  const [input, setInput] = useState('');
  const [values, setValues] = useState([]);
  const [closest, setClosest] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const numbers = input
      .split(',')
      .map((n) => parseFloat(n.trim()))
      .filter((n) => !isNaN(n));

    if (!validateInput(numbers)) {
      setError('Please enter valid numbers');
      setValues([]);
      setClosest(null);
      return;
    }

    setLoading(true);

    try {
      const closestValue = await getClosestTemperature(numbers);
      setClosest(closestValue);
      setValues(numbers);
      setError('');
    } catch (err) {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Company Climate</h1>
      <p>Enter temperatures separated by commas:</p>

      <div>
        <InputField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          error={!!error}
        />
        <SubmitButton onClick={handleSubmit} disabled={loading} />
      </div>

      {error && <p className="error">{error}</p>}

      {closest !== null && (
        <p className="result" data-testid="closest-value">
          <span className="label">Closest to zero:</span>{' '}
          <span className="closest-value">{closest}</span>
        </p>
      )}

      {values.length > 0 && closest !== null && (
        <TemperatureChart values={values} closest={closest} />
      )}
    </div>
  );
}

export default Home;
