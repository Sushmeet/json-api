function home(req, res, err) {
  res.status(200).json({
    description: "Product API is running"
  });
}

module.exports = {
  home
};
