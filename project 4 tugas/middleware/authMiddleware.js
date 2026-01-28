const authAdmin = (req, res, next) => {
    const password = req.query.password;
    const correctPassword = 'perpus123';
  
      if (password === correctPassword) {
      console.log(' Password berhasil');
       res.redirect('/books');
      next(); 
      } else {
        res.status(401).send('password salah');
      }
};

module.exports = authAdmin;