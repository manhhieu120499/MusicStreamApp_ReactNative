const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./config/db');
const routes = require('./routes');
const dotenv = require('.dotenv');
// const upload = require('./config/uploadAudio');

// connect to the database
db.connect();

// upload audio file
// upload.uploadAudio();

// đọc dữ liệu dạng json
app.use(express.json());

app.use(cors());

app.use(dotenv);

// định tuyến cho app
routes(app);

const PORT = 5000;

app.listen(PORT, () => console.log('Server is running on port ' + PORT));
