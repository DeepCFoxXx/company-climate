const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const temperatureRoutes = require('./routes/temperatureRoutes');

const app = express();
const PORT = 5050;

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/temperatures', temperatureRoutes);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
