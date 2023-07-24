import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import { useDispatch, useSelector } from "react-redux";
import { getAdmin } from "../Reducer/AuthSlice";
import Sidebarhome from "./Sidebarhome";
import SocialLinks from "./SocialLinks";
import AI1 from "../../Images/AI1.jpg";
import AboutMe from "./AvoutMe/AboutMe";
import Achievement from "./AvoutMe/Achievement";
import TechnologyUsed from "./Technologies/TechnologyUsed";
import Project from "./Projects/Project";
import Service from "./Service/Service";
import ContactUs from "./ContactUs/ContactUs";
const Home = () => {
  const dispatch = useDispatch();
  const { PortfolioUser } = useSelector((state) => state.auth);

  const [fields, setfields] = useState({
    email: "",
    name: "",
    home_subtitle: "",
    home_intro: "",
    insta: "",
    github: "",
    linkedin: "",
  });

  useEffect(() => {
    console.log("getAdmin");
    dispatch(getAdmin());
    console.log("success");
    if(PortfolioUser)
    {
      setfields({
        ...fields,
        email: PortfolioUser.email,
        name: PortfolioUser.name,
        home_subtitle: PortfolioUser.home_subtitle,
        home_intro: PortfolioUser.home_intro,
        insta: PortfolioUser.insta,
        github: PortfolioUser.github,
        linkedin: PortfolioUser.linkedin,
      });
    }
    
    // console.log(PortfolioUser.silder_pics);
  }, []);

  

  return (
    <>
      <div className="main_container my-5">
        {/* personal info */}

        <div className="master_row1">
          <div className="master_row1_div1">
            <div className="headname my-3">{fields.name?fields.name:"Abhishek"}</div>
            {/* <div className="subtitle my-1">{fields.email?fields.email:"kumarbansalabhi@gmail.com"}</div> */}
            <div className="subtitle my-1">{fields.home_subtitle?fields.home_subtitle:"Full Stack Developer"}</div>
            <div className="sociallinks_div">
              <SocialLinks links={fields} />
            </div>
            <div className="download_resume my-5">
              <a
                href="https://drive.google.com/file/d/1mV6-7T0ppsUNLivXTJLW9-mdVxKfWXBi/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="downloadresume_anchor"
              >
                Download Resume
                <i class="fa-solid fa-download icon_i_download"></i>
              </a>
            </div>
          </div>

          {PortfolioUser &&
          PortfolioUser.silder_pics &&
          PortfolioUser.silder_pics.length > 0 ? (
            <>
              <div className="master_row1_div2">
                <div className="slider_pics">
                  {PortfolioUser.silder_pics.length > 0 ? (
                    <>
                      <Sidebarhome pics={PortfolioUser.silder_pics} />
                    </>
                  ) : (
                    <>
                      <Sidebarhome pics={PortfolioUser.silder_pics} />
                    </>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="master_row1_div2">
                <div className="slider_pics">
                  <img src={AI1} alt="img" className="sidehomeimg w-75" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="extra_works">
        <div className="home_about extra_work">
          <AboutMe />
        </div>

        <div className="home_achievement extra_work">
          <Achievement />
        </div>

        <div className="home_tech extra_work">
          <TechnologyUsed />
        </div>

        <div className="home_project extra_work">
          <Project />
        </div>

        <div className="home_service extra_work">
          <Service />
        </div>

        <div className="home_contact extra_work">
          <ContactUs />
        </div>

        
      </div>
    </>
  );
};

export default Home;
