const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

// Init app
const app = express();

// // Create route manually
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Set static folder, which renders any html files without setting a /GET route -- likely not to be used
app.use(express.static(path.join(__dirname, 'public'))); // sets public as the static folder

// Members api routes
app.use('/api/members', require('./routes/api/members'));

// Init middleware
// app.use(logger);

// *** custom code ***


// Establish port
const PORT = process.env.PORT || 5000;

// Listen on port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));