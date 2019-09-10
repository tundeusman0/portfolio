const express = require('express');
const cors = require('cors');

const app = express();

// enable cors
app.use(cors());

app.get('/', (req, res) => {
  res.json({ msg: 'working' });
});

// enable json
app.use(express.json());

// default port
const port = process.env.PORT;

// app listen to port
app.listen(port, () => {
  console.log(`app started on port ${port}`);
});
