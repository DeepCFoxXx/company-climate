const API_BASE_URL = 'http://localhost:5050/api';

export async function getClosestTemperature(values) {
  try {
    const response = await fetch(`${API_BASE_URL}/temperatures`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ values }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.error || 'Server error');
    }

    return data.closest;
  } catch (error) {
    throw error;
  }
}
