exports.getPrivateData = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: 'Yout got access to the private datas !',
  });
};
