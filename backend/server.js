const express = require('express');
const cors = require('cors');

// imports the database
require('./db/mongoose');

// imports the routers
const userRouter = require('./routes/api/user');
// const logoRouter = require('./routes/api/private/logo');
// const aboutRouter = require('./routes/api/about');
const resumeRouter = require('./routes/api/resume');
const blogRouter = require('./routes/api/blog');

const app = express();

// enable cors
app.use(cors());

// enable json
app.use(express.json());

// enable the routers
app.use('/api/user', userRouter);
// app.use('/api/logo', logoRouter);
// app.use('/api/about', aboutRouter);
app.use('/api/resume', resumeRouter);
app.use('/api/blog', blogRouter);

app.get('*', (req, res) => {
  res.json({ msg: 'working' });
});

// default port
const port = process.env.PORT;

// app listen to port
app.listen(port, () => {
  console.log(`app started on port ${port}`);
});
