const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const timestamp = Date.now()
  
  console.log(`[${timestamp}] ${method} ${url}`);
  
  next();
};

module.exports = logger;