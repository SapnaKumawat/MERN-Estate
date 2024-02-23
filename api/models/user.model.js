import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "https://www.bing.com/images/search?view=detailV2&ccid=SxuyKL%2bC&id=1D60FCE449467B2EB8BBB20F1601D5F77596C54B&thid=OIP.SxuyKL-Ca-_bXp1TC4c4-gHaF3&mediaurl=https%3a%2f%2fwww.pngitem.com%2fpimgs%2fm%2f146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png&exph=681&expw=860&q=Blank+Profile+Picture+Google&simid=608009379454846553&FORM=IRPRST&ck=FC54615FF6FDCD8D22CFE14BFB34AE3F&selectedIndex=2&itb=0",
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
