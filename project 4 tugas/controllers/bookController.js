const books = require('../models/bookmodel');

const getBooks = (req, res) => {
  const getbooks = req.params.books;
   res.send(`Anda sedang meliaht buku
     ${books}`);
};  

module.exports = { getBooks };