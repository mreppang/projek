const express = require('express');
const app = express();
const port = 3000

morgan = require('morgan');
app.use(morgan('dev'));

app.use((req, res, next) => { 

  // req.timeRequest = Date.now();
  console.log(req.method, req.url);
  next();
});

const auth = ((req, res, next) => { 
  const { password } = req.query;
  if (password === 'secret') {
    next();
  }
  res.send('Perlu masukkan password')
});


app.use('/hello', (req,res,) => {
  res.send('hello');
});


app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/halaman', (req, res) => {
  console.log(req.timeRequest); 
  res.send('hello halaman');
  
});


app.get('/admin', auth,(req, res) => {
  res.send('welcome to the admin page');
  
});

app.use((req, res) => {
  res.status(404).send('404 Not Found');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
