const express = require('express');
const app = express();
const port = 3000

var auth = require('./routes/auth.js');

app.use('/auth', auth);

app.post('/login')

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})