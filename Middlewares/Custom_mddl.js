const CustomMiddleware = (req, res, next) => {
  try {
    const API_KEY = req.headers.api_key;
    if (API_KEY === "123123123") {
      next();
    } else {
      res.status(403).json({ error: "Api key no valida" });
    }
  } catch (err) {
    res.status(422).json({ error: "Error en custom middleware" });
  }
};

module.exports = { CustomMiddleware };
