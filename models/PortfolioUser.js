const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
// create user schema

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    confirmpassword: {
      type: String,
      required: true,
      unique: true,
    },
    profile_pic: {
      type: String,
    },
    silder_pics:[{
      pic:{
        type:String,
      }
    }
    ],
    about_intro: {
      type: String,
      default: "",
    },
    achievement_subtitle:{
        type:String,
    },
    achievement: [
      {
        achievement_intro: {
          type: String,
          default: "",
        },
        achievement_certificates: {
          type: String,
        },
      },
    ],
    Work_experience_subtitle:{
      type:String
    },
    Work_experience: [
      {
        Work_experience_intro: {
          type: String,
          default: "",
        },
        Work_experience_intro_certificates: {
          type: String,
        },
      },
    ],
    side_contact_page_img: {
      type: String,
    },
    contact_messages: [
      {
        name: {
          type: String,
        },
        email: {
          type: String,
        },
        phone: {
          type: Number,
        },
        message: {
          type: String,
        },
      },
    ],
    footer_subtitle: {
      type: String,
    },
    footer_intro: {
      type: String,
    },
    home_subtitle: {
      type: String,
    },
    home_intro: {
      type: String,
    },
    insta: {
      url: String,
    },
    github: {
      url: String,
    },
    linkedin: {
      url: String,
    },
    project_intro: {
      type: String,
    },
    project: [
      {
        image: [
          {
            type:String
          }
        ],
        title: {
          type: String,
        },
        description: {
          type: String,
        },
        github_url: {
          type: String,
        },
        deployed_url:{
          type:String,
        }
      },
    ],
    service: [
      {
        title: {
          type: String,
        },
        description: {
          type: String,
        },
      },
    ],
    tech_intro: {
      type: String,
    },
    tech: [
      {
        image: {
          type:String,
        },
        title: {
          type: String,
        },
        description: {
          type: String,
        }
      },
    ],
  },
  { timestamps: true }
);

// hash password

UserSchema.pre("save", async function (req, res, next) {
  if (!this.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  const hashp = await bcrypt.hash(this.password, salt);
  const hashcp = await bcrypt.hash(this.confirmpassword, salt);
  this.password = hashp;
  this.confirmpassword = hashcp;
  return next();
});

const PortfolioUser = mongoose.model("PortfolioUser", UserSchema);

module.exports = PortfolioUser;
