// node.js

const express = require('express');
const connectDB = require('./config/db')
var cors = require('cors');

// Routes
const comps = require('./routes/api/comps')

const app = express();

// Connect to DB
connectDB();

// cors
app.use(cors({origin: true, credentials: true}));

// Init middleware
app.use(express.json({extended: false}));

// use routes
app.use('/api/comps', comps)

app.get('/', (req, res) => res.send('Hello world!'))

const port = 8083;

app.listen(port, () => console.log('Server running on ' + port));