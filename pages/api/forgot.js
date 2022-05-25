import User from "../../models/User";
import connectDb from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
  if (req.method == "POST") {
    let user = await User.findOne({ email: req.body.email });
    if (req.body.email == user.email) {
      await User.findOneAndUpdate(
        { email: user.email },
        {
          password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.AES_SECRET
          ).toString(),
        }
      );
      res.status(200).json({ success: true });
      return;
    } else {
      res.status(200).json({ success: false });
    }
  } else {
    res.status(400).json({ error: "error" });
  }
};
export default connectDb(handler);
