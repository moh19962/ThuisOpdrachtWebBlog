const express = require('express');
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3014;
const pub = require('./publisher.js')
require('./consumer.js')


app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})