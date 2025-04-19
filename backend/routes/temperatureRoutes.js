const express = require('express');
const router = express.Router();

const Temperature = require('../models/Temperature');
const { getClosestToZero } = require('../helpers/getClosestToZero');
const { validateInput } = require('../helpers/validateInput');

router.post('/', async (req, res) => {
  const { values } = req.body;

  if (!validateInput(values)) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const closest = getClosestToZero(values);

  try {
    const record = new Temperature({ values, closest });
    await record.save();
    res.json({ closest });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
