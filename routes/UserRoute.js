const router = require("express").Router();
require("../models/PortfolioUser");
const protect = require("../middleware/authentication");
const {
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
} = require("../controllers/User");
// register user

router.post("/register", registeruser);

router.post("/login", login);

router.put("/homePage", homePage);

router.get("/getAdmin", getAdmin);

router.put("/aboutpage",aboutpage);

router.put("/achievementpage",achievementpage);

router.put("/footerpage",footerpage);

router.put("/projectpage",projectpage);

router.put("/sendaddprojectimagepage",sendaddprojectimagepage);

router.put("/servicepage",servicepage);

router.put("/technologypage",technologypage);

router.put("/workexppage",workexppage);

module.exports = router;
