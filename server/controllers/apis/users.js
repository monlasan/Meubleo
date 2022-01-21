const User = require('../../models/User');
const ErrorResponse = require('../../utils/errorResponse');

exports.getAllUsers = async (req, res, next) => {
  try {
    let users = await User.find()
      .exec()
      .then((docs) => {
        res.status(200).json(docs);
      })
      .catch((err) => {
        console.log(err);
        return next(new ErrorResponse('No user found...', 404));
      });
  } catch (error) {
    next(error);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    let user = req.user;
    console.log(user + '-' + req.params.id);
    // let users = await User.findById();
    // if (!users) {
    //   return next(new ErrorResponse('No user found...', 404));
    // }

    // res.status(200).json({
    //   success: true,
    //   data: doc,
    // });
  } catch (error) {
    next(error);
  }
};
