const express = require('express');
const app = express();

//middlewars
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use(require('./routes/index.js'));

app.listen(3000);
console.log('Server started on port 3000');


