const PortfolioUser = require("../models/PortfolioUser");
const cloudinary = require("cloudinary");
const bcrypt = require("bcryptjs");

// register user

const registeruser = async (req, res) => {
  try {
    const { name, email, phone, password, confirmpassword, profile_pic } =
      req.body;
    // console.log(name,email,phone,password,confirmpassword,profile_pic);
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      password === "" ||
      confirmpassword === "" ||
      profile_pic === ""
    ) {
      return res.status(422).json({
        message: "Please filled all values",
      });
    }

    // if user already exists

    const userexist = await PortfolioUser.findOne({ email });
    if (userexist) {
      return res.status(400).json({
        message: "You have not permission to write on this webpage ....",
      });
    }

    // if user not already exists

    if (password != confirmpassword) {
      return res.status(422).json({
        message: "Password do not match",
      });
    }

    const user = await PortfolioUser.create({
      name: name,
      email: email,
      phone: phone,
      password: password,
      confirmpassword: confirmpassword,
      profile_pic: profile_pic,
    });
    await user.save();

    if (user) {
      return res.status(200).json({
        name,
        email,
        phone,
        password,
        confirmpassword,
        profile_pic,
      });
    }
  } catch (error) {
    console.log("error while registering the user");
    console.log(error);
  }
};

// login

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Filled all values",
      });
    }

    const finduser = await PortfolioUser.findOne({ email: email });
    if (!finduser) {
      return res.status(400).json({
        message: "Invalid email id",
      });
    }
    const comparepass = await bcrypt.compare(password, finduser.password);
    if (!finduser || !comparepass) {
      return res.status(400).json({
        message: "Invalid email id of Password",
      });
    } else {
      return res.status(200).json({
        message: "getting data",
        data: finduser,
      });
    }
  } catch (error) {
    console.log("error while login");
  }
};

// save home pageintro

const homePage = async (req, res) => {
  try {
    const { email, name, home_subtitle, home_intro, insta, github, linkedin } =
      req.body;
    console.log(
      "enter homepage ",
      email,
      name,
      home_subtitle,
      home_intro,
      insta,
      github,
      linkedin
    );

    if (!email) {
      return res.status(400).json({
        message: "You have no rights to update information",
      });
    }
    const fields = {};
    if (name) fields.name = name;
    if (home_subtitle) fields.home_subtitle = home_subtitle;
    if (home_intro) fields.home_intro = home_intro;
    if (insta) fields.insta = insta;
    if (github) fields.github = github;
    if (linkedin) fields.linkedin = linkedin;
    console.log(fields);
    const finduser = await PortfolioUser.findOne({ email: email });
    if (finduser) {
      var findupdateuser = await PortfolioUser.findByIdAndUpdate(
        finduser._id,
        fields
      );
    }

    if (req.body.pic) {
      console.log(req.body.pic);
      findupdateuser = await PortfolioUser.updateOne(
        { _id: finduser._id },
        {
          $push: {
            silder_pics: {
              pic: req.body.pic,
            },
          },
        }
      );
    }
    if (findupdateuser) {
      return res.status(200).json({
        message: "Information updated..",
        data: findupdateuser,
      });
    }
    return res.status(400).json({
      message: "Information can not be updated..",
    });
  } catch (error) {
    console.log(error);
    console.log("error while saving homePage");
  }
};

const getAdmin = async (req, res) => {
  try {
    console.log("enter getAdmin ",process.env.Abhishek_Mongo_Id);
    const id = process.env.Abhishek_Mongo_Id;
    if (id) {
      const finduser = await PortfolioUser.findOne({ _id: id });
      if (finduser) {
        return res.status(200).json({
          message: "getting data",
          data: finduser,
        });
      } else {
        return res.status(400).json({
          message: "can not get data",
        });
      }
    } else {
      return res.status(400).json({
        message: "Id not found",
      });
    }
  } catch (error) {
    console.log("error while getting getAdmin");
  }
};

// about intro

const aboutpage = async (req, res) => {
  try {
    console.log("enter aboutPage");
    const { email, about_intro } = req.body;
    if (email) {
      const findandupdate = await PortfolioUser.updateOne(
        { email: email },
        {
          about_intro: about_intro,
        },
        { new: true }
      );
      if (findandupdate) {
        return res.status(200).json({
          message: "about page update",
          data: findandupdate,
        });
      } else {
        return res.status(400).json({
          message: "about page can not be update",
        });
      }
    }
    return res.status(400).json({
      message: "Not authenticated",
    });
  } catch (error) {
    console.log("Error while aboutPage");
  }
};

// achievement intro

const achievementpage = async (req, res) => {
  try {
    console.log("enter achievementpage");
    const {
      email,
      achievement_subtitle,
      achievement_intro,
      achievement_certificates,
    } = req.body;
    if (email) {
      var findandupdate=null;
      if(achievement_subtitle)
      {
        findandupdate = await PortfolioUser.updateOne(
          { email: email },
          {
            achievement_subtitle: achievement_subtitle,
          },
          { new: true }
        );
      }


      if (achievement_intro && achievement_certificates) {
        console.log(achievement_intro , achievement_certificates);
        // let achievement = [
        //   { achievement_intro: achievement_intro },
        //   { achievement_certificates: achievement_certificates },
        // ];
        let achievement = 
          { achievement_intro: achievement_intro ,
          achievement_certificates: achievement_certificates 
        }
        ;
        findandupdate = await PortfolioUser.updateOne(
          { email: email },
          {
            $push: {
              achievement:  achievement ,
            },
          },
          { new: true }
        );
      }

      if (findandupdate) {
        return res.status(200).json({
          message: "achievementpage page update",
          data: findandupdate,
        });
      } else {
        return res.status(400).json({
          message: "achievementpage page can not be update",
        });
      }
    }
    return res.status(400).json({
      message: "Not authenticated",
    });
  } catch (error) {
    console.log("Error while aboutPage");
  }
};


// footerpage intro

const footerpage = async (req, res) => {
  try {
    console.log("enter footerpage");
    const { email, footer_subtitle,footer_intro } = req.body;
    // console.log(email, footer_subtitle,footer_intro);
    if (email) {
      var findandupdate=null;
      if(footer_subtitle){
        findandupdate = await PortfolioUser.updateOne(
          { email: email },
          {
            footer_subtitle: footer_subtitle,
          },
          { new: true }
        );
      }
      

      if(footer_intro)
      {
        console.log(footer_intro);
        findandupdate = await PortfolioUser.updateOne(
          { email: email },
          {
            footer_intro: footer_intro,
          },
          { new: true }
        );
      }
      if (findandupdate) {
        return res.status(200).json({
          message: "footer page update",
          data: findandupdate,
        });
      } else {
        return res.status(400).json({
          message: "footer page can not be update",
        });
      }
    }
    return res.status(400).json({
      message: "Not authenticated",
    });
  } catch (error) {
    console.log("Error while footerpage");
  }
};

// projectpage intro

const projectpage = async (req, res) => {
  try {
    console.log("enter projectpage");
    const {
      email,
      project_intro,
      image,
      title,
      description,
      github_url,
      deployed_url,
    } = req.body;
    if (email) {
      var findandupdate=null;
      if(project_intro)
      {
         findandupdate = await PortfolioUser.updateOne(
          { email: email },
          {
            project_intro: project_intro,
          },
          { new: true }
        );
      }
      if (image) {
        let project = 
          { image: image ,
            title: title,
            description:description,
            github_url:github_url,
            deployed_url:deployed_url, 
        }
        ;
        findandupdate = await PortfolioUser.updateOne(
          { email: email },
          {
            $push: {
              project:  project ,
            },
          },
          { new: true }
        );
      }

      if (findandupdate) {
        return res.status(200).json({
          message: "projectpage page update",
          data: findandupdate,
        });
      } else {
        return res.status(400).json({
          message: "projectpage page can not be update",
        });
      }
    }
    return res.status(400).json({
      message: "Not authenticated",
    });
  } catch (error) {
    console.log("Error while projectpage");
  }
};

// service page intro

const servicepage = async (req, res) => {
  try {
    console.log("enter servicepage");
    const {
      email,
      title,
      description
    } = req.body;
    if (email) {
      var findandupdate=null;
      if(title && description)
      {
        let service={
          title:title,
          description:description,
        }
         findandupdate = await PortfolioUser.updateOne(
          { email: email },
          {
            $push: {
              service:  service ,
            },
          },
          { new: true }
        );
      }
      if (findandupdate) {
        return res.status(200).json({
          message: "servicepage page update",
          data: findandupdate,
        });
      } else {
        return res.status(400).json({
          message: "servicepage page can not be update",
        });
      }
    }
    return res.status(400).json({
      message: "Not authenticated",
    });
  } catch (error) {
    console.log("Error while servicepage");
  }
};

// tech page intro

const technologypage = async (req, res) => {
  try {
    console.log("enter technology page");
    const {
      email,
      tech_intro,
      image,
      title,
      description
    } = req.body;
    if (email) {
      var findandupdate=null;
      if(tech_intro)
      {
         findandupdate = await PortfolioUser.updateOne(
          { email: email },
          {
            tech_intro: tech_intro,
          },
          { new: true }
        );
      }
      if (image) {
        // console.log(image);
        let tech = 
          { 
            image:image,
            title: title,
            description:description
        }
        ;
        findandupdate = await PortfolioUser.updateOne(
          { email: email },
          {
            $push: {
              tech:  tech ,
            },
          },
          { new: true }
        );
      }

      if (findandupdate) {
        return res.status(200).json({
          message: "technologypage page update",
          data: findandupdate,
        });
      } else {
        return res.status(400).json({
          message: "technologypage page can not be update",
        });
      }
    }
    return res.status(400).json({
      message: "Not authenticated",
    });
  } catch (error) {
    console.log("Error while technologypage");
  }
};

// work exp intro

const workexppage = async (req, res) => {
  try {
    console.log("enter workexppage");
    const {
      email,
      Work_experience_subtitle,
      Work_experience_intro,
      Work_experience_intro_certificates,
    } = req.body;
    if (email) {
      var findandupdate=null;
      if(Work_experience_subtitle)
      {
        findandupdate = await PortfolioUser.updateOne(
          { email: email },
          {
            Work_experience_subtitle: Work_experience_subtitle,
          },
          { new: true }
        );
      }


      if (Work_experience_intro && Work_experience_intro_certificates) {
        // console.log(achievement_intro , achievement_certificates);
        let Work_experience = 
          { Work_experience_intro: Work_experience_intro ,
            Work_experience_intro_certificates: Work_experience_intro_certificates 
        }
        ;
        findandupdate = await PortfolioUser.updateOne(
          { email: email },
          {
            $push: {
              Work_experience:  Work_experience ,
            },
          },
          { new: true }
        );
      }

      if (findandupdate) {
        return res.status(200).json({
          message: "workexppage page update",
          data: findandupdate,
        });
      } else {
        return res.status(400).json({
          message: "workexppage page can not be update",
        });
      }
    }
    return res.status(400).json({
      message: "Not authenticated",
    });
  } catch (error) {
    console.log("Error while workexppage");
  }
};


const sendaddprojectimagepage=async(req,res)=>{
  try {
    console.log("enter send add project image page");
    const {
      email,
      id,
      image,
    } = req.body;
    if (email) {
      var findandupdate=null;
      if(id && image)
      {
        //  findandupdate = await PortfolioUser.updateOne(
        //   { email: email },
        //   {
        //     project_intro: project_intro,
        //   },
        //   { new: true }
        // );
        const findProject=await PortfolioUser.find({
          project:{
            $elemMatch:{_id:id}
          }
        });

        // console.log(findProject[0].project);
        // let temp=findProject[0].project;

        
        findandupdate = await PortfolioUser.updateOne(
            { email: email ,
              "project._id":id
            },
            {
              "$push":{
                "project.$.image":
                  image
              }
            },
            { new: true }
          );
      }
      
      if (findandupdate) {
        // console.log(findandupdate);
        return res.status(200).json({
          message: "sendaddprojectimagepage page update",
          data: findandupdate,
        });
      } else {
        return res.status(400).json({
          message: "sendaddprojectimagepage page can not be update",
        });
      }
    }
    return res.status(400).json({
      message: "Not authenticated",
    });
  } catch (error) {
    // console.log(error);
    console.log("error while adding sendaddprojectimagepage");
  }
}



module.exports = {
  registeruser,
  login,
  homePage,
  getAdmin,
  aboutpage,
  achievementpage,
  footerpage,
  projectpage,
  servicepage,
  technologypage,
  workexppage,
  sendaddprojectimagepage
};
