require('dotenv').config({ path: './config.env' });
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

// Connect DB
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/private', require('./routes/private'));

// errorHandler is the last piece of middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
process.on('unhandledRejection', (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});

// *STOPPED AT 1:23:12 - https://www.youtube.com/watch?v=YocRq-KesCM
// STOPPED AT 1:36:33 - https://www.youtube.com/watch?v=YocRq-KesCM - setting up sendEmail with SendGrid
