const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

router.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.use('/', router);
// app.use(express.static('static'));
app.use(express.static(path.join(__dirname, 'static')));

app.listen(process.env.port || 3000);

console.log('Web Server is listening at port '+ (process.env.port || 3000));
