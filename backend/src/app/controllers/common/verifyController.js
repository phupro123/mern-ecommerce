const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    //ACCESS TOKEN FROM HEADER, REFRESH TOKEN FROM COOKIE
    const token = req.headers.token;
    //const refreshToken = req.cookies.refreshToken;
    if (token) {
      const accessToken = token.split(" ")[1];
      jwt.verify(accessToken, 'access_key', (err, user) => {
        if (err) {
         return res.status(403).json("Token is not valid!");
        }
        req.user = user;
        next();
      });
    } else {
      return res.status(401).json("You're not authenticated");
    }
  };
  
  const verifyTokenAndUserAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.id === req.params.id|| req.user.role === '1') {
        next();
      } else {
        return  res.status(403).json("You're not allowed to do that!");
      }
    });
  };
  
  const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
      if ( req.user.role === '1') {
        next();
      } else {
        return res.status(403).json("You're not allowed to do that!");
      }
    });
  };

   
  const verifyTokenAndSeller = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.id === req.params.id && req.user.role === '2' || req.user.role=='1') {
        next();
      } else {
        return res.status(403).json("You're not allowed to do that!");
      }
    });
  };

module.exports = {
    verifyToken,
    verifyTokenAndUserAuthorization,
    verifyTokenAndAdmin,
    verifyTokenAndSeller,
  };