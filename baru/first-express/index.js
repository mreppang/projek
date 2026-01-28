const express = require('express');

const app = express();

// app.use(((req, res) => {
//   console.log('New request received');
//   res.send('<h1>Hello, Express!</h1>');
// }))

app.get('/home', (req, res) => {
  res.send('this is home page');
});

app.get('/cats', (req, res) => {
  res.send('this is cats page');
});



app.post('/cats', (req, res) => {
  res.send('this is cats page from post');
});



app.get('/about', (req, res) => {
  res.send('this is about page');
});


app.get(/.*/,(req, res) => {
  res.send('page not found');
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});

