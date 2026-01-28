const errorHandler = (err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({
    status: 'error',
    message: 'Terjadi kesalahan pada server',
  });
};


module.exports = errorHandler;