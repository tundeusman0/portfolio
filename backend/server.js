const express = require('express');
const cors = require('cors');
// imports the database
require('./db/mongoose');
// imports the routers
const userRouter = require('./routes/api/user');
const logoRouter = require('./routes/api/logo');
const blogRouter = require('./routes/api/blog');
const resumeRouter = require('./routes/api/resume');
const contactRouter = require('./routes/api/contact');
const path = require('path');

const app = express();

// enable cors
app.use(cors());

// enable json
app.use(express.json());

// enable the routers
app.use('/api/user', userRouter);
app.use('/api/logo', logoRouter);
app.use('/api/contact', contactRouter);
app.use('/api/resume', resumeRouter);
app.use('/api/blog', blogRouter);

// server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static(path.join(__dirname, '../client/build')));

  // load unwanted route here
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

// default port
const port = process.env.PORT;

// app listen to port
app.listen(port, () => {
  console.log(`app started on port ${port}`);
});
