const UserModel = require("../model/user.model");
const { Error, Success, success } = require("../util/response.util");
const bcrypt = require("bcrypt");
const validation = require("../validation/emailMobile");
const userModel = require("../model/user.model");
const jwt = require("jsonwebtoken");

const DuplicateEmailCheck = async (email) => {
  const existemail = UserModel.findOne({ email: email });
  return existemail;
};
const DuplicateMobileNo = async (mobile) => {
  const existMobile = userModel.findOne({ mobileno: mobile });
  return existMobile;
};
const signUp = async (req, res) => {
  try {
    const data = req.body;
    const validEmail = validation.emailValidation(data.email);
    // check for duplicate Email;
    const duplicateemail = await DuplicateEmailCheck(data.email);
    if (duplicateemail)
      return Success({
        message: "Email is already register with us",
        status: 400,
      });
    //check for Duplicate mobile no;
    const duplicateMobile = await DuplicateMobileNo(data.mobileno);
    if (duplicateMobile)
      return Success({
        message: "Your mobile no is already with us please continue to login",
        status: 400,
      });
    if (validEmail) {
      const salt = await bcrypt.genSalt(10); // salt genereation
      const encryptedPassword = await bcrypt.hash(data.password, salt);
      data.password = encryptedPassword;

      const newUser = new UserModel(data);
      await newUser.save();
      return Success({ newUser, message: "Registration successful" });
    } else {
      return Success({ message: "enter Valid Email", status: 400 });
    }
  } catch (error) {
    console.log("catch");
  }
};
const login = async (req) => {
  try {
    const loginDetail = req.body;
    const validEmail = validation.emailValidation(loginDetail.email);
    if (validEmail) {
      const user = await DuplicateEmailCheck(loginDetail.email);
      if (!user) {
        return Success({
          message: "user doesNot exit please register with us",
          status: 400,
        });
      } else {
        const passwordMatch = await bcrypt.compare(
          loginDetail.password,
          user.password
        );
        if (!passwordMatch) {
          return success({
            message: "passowrd doesnot match try again",
            status: 400,
          });
        } 
        else {
          const token = jwt.sign({ id: user._id }, process.env.JWT_SECRETKEY, {
            expiresIn: "1d",
          });
          return success({ message: "Login successful", token: token ,user});
        }
      }
    } else {
      return Success({ message: "enter valid email", status: 400 });
    }
  } catch (error) {
    return Success({ message: "Something wrong happen" });
  }
};
const getUserInfo = async(req)=>{
  try {
const userDetail = await UserModel.findById(req.body.userId,"-password")
if(userDetail){
  return Success({success:"true",userDetail})
}
else{
  return Success({success:false,message:"User doesnot exist"})
}
  } catch (error) {
    
  }
}
module.exports = {
  signUp,
  login,
  getUserInfo
};
