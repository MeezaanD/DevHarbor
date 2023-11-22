const express = require('express');
const route = require('./controller');
const cors = require('cors');
const { errorHandling } = require('./middleware/ErrorHandling');
const cookieParser = require('cookie-parser');

const app = express();
const port = 2003;

// Middleware
app.use(cors({ origin: '*', credentials: true }));
app.use(cookieParser());
app.use(express.json());

// Routes
app.use(route);

// Error handling middleware
app.use(errorHandling);

// Start the server
app.listen(port, () => {
  console.log(`Server is live on lohttp://localhost:${port}`);
});
