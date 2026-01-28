const express = require('express');
const app = express();

//middlewares
const loggerMiddleware = require('./middleware/loggerMiddleware');

//routes
const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/adminRoutes');

//global middlewares
app.use(loggerMiddleware);

app.get('/', (req, res) => {
  res.send(`
    Selamat Datang di Perpustakaan Digital SMK Telkom Makassar
    Silakan jelajahi koleksi buku kami
  `);
});

//ini routes
app.use('/books', bookRoutes);
app.use('/admin', authorRoutes);

//404 middleware
app.use((req, res, next) => {
    res.status(404).send('404 - halaman tidak ditemukan');
});


app.use((req, res, next) => { 

  // req.timeRequest = Date.now();
  console.log(req.method, req.url);
  next();
});

//server
app.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000');
});