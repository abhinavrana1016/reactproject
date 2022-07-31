UserManager = require('../manager/User.manager');

const signUp = (req, res) => {
    UserManager.signUp(req)
      .then((result) => res.status(result.code).send(result.data))
      .catch((error) => res.status(500).send(error));
};
const login = (req, res) => {
  UserManager.login(req,res)
    .then((result) => res.status(result.code).send(result.data))
    .catch((error) => res.status(500).send(error));
};
const getUserInfo = (req, res) => {
  UserManager.getUserInfo(req,res)
    .then((result) => res.status(result.code).send(result.data))
    .catch((error) => res.status(500).send(error));
};
module.exports ={
  signUp,
  login,
  getUserInfo
}
