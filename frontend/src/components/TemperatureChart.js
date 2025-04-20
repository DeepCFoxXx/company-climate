import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import '../styles/TemperatureChart.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function TemperatureChart({ values, closest }) {
  const backgroundColors = values.map((v) => (v > 0 ? '#FFA500' : '#007BFF'));

  const data = {
    labels: values.map((v) => (v > 0 ? `+${v}` : `${v}`)),
    datasets: [
      {
        data: values,
        backgroundColor: backgroundColors,
        borderRadius: 4,
        barPercentage: 0.6,
        categoryPercentage: 0.8,
      },
    ],
  };

  const options = {
    responsive: true,
    layout: {
      padding: { top: 10, bottom: 20 },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.raw}°C`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          font: { size: 12 },
        },
      },
      y: {
        min: -15,
        max: 15,
        ticks: {
          stepSize: 5,
          font: { size: 12 },
        },
        title: {
          display: true,
          text: 'Temperature (°C)',
        },
      },
    },
  };

  const labelPlugin = {
    id: 'valueLabels',
    afterDatasetsDraw(chart) {
      const { ctx, data } = chart;
      const dataset = chart.getDatasetMeta(0);

      ctx.save();
      ctx.font = 'bold 13px sans-serif';
      ctx.textAlign = 'center';

      data.datasets[0].data.forEach((value, i) => {
        const bar = dataset.data[i];
        const label = value > 0 ? `+${value}` : `${value}`;
        const color = Number(value) === Number(closest) ? 'red' : '#000';
        const yPos = value >= 0 ? bar.y - 6 : bar.y + 16;

        ctx.fillStyle = color;
        ctx.fillText(label, bar.x, yPos);
      });

      ctx.restore();
    },
  };

  return (
    <div className="chart-container">
      <div className="chart-wrapper">
        <div className="chart-y-labels">
          <span className="hot-label">Hot ↑</span>
          <span className="cold-label">Cold ↓</span>
        </div>

        <div className="chart-graph">
          <Bar data={data} options={options} plugins={[labelPlugin]} />
        </div>
      </div>
    </div>
  );
}

export default TemperatureChart;
