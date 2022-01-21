// const Token = require('../models/Token');
// const User = require('../models/User');
// const ErrorResponse = require('../utils/errorResponse');

// exports.refreshToken = async (req, res, next) => {
//   const refreshToken = req.body.token;
//   if (refreshToken == null) {
//     return next(new ErrorResponse('Not authorized', 401));
//   }
//   try {
//      am here
//     const token = await User.findOne({ refreshToken: refreshToken });
//     if (!token) {
//       return next(new ErrorResponse('Not authorized_', 401));
//     }
//     const verifyToken = jwt.verify(
//       refreshToken,
//       process.env.REFRESH_SECRET,
//       (err, tkn) => {
//         if (err) return res.sendStatus(403);
//       }
//     );
//   } catch (error) {
//     next(error);
//   }
// };
