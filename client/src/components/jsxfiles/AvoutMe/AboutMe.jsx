import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { getAdmin } from "../../Reducer/AuthSlice";
import { Parallax } from "react-scroll-parallax";
const AboutMe = () => {
  const dispatch = useDispatch();

  const [aboutme, setaboutme] = useState("");

  const { PortfolioUser } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAdmin());
    console.log(PortfolioUser);
  }, []);

  return (
    <>
      <div className="about_container">
        <div className="master_div1_about my-3">
          <h2 className="aboutheading my-3">About Me</h2>
          <Parallax
          scale={[1,1.2]}
          >
            <p className="contentabout intro my-5">
              {PortfolioUser ? <>{PortfolioUser.about_intro}</> : <></>}
            </p>
          </Parallax>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
