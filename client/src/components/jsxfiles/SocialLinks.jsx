import React from "react";
import { Link } from "react-router-dom";
const SocialLinks = (props) => {
    // console.log(props);
  console.log(props.links.github);
  return (
    <>
      <div className="social_main_div1">
        {/* <div className="github1">
          <a href={''+props.links.github}>
            <i class="fa-brands fa-github icon_i"></i>
          </a>
        </div>
        <div className="insta11">
          <a href={props.links.instagram}>
            <i class="fa-brands fa-instagram icon_i"></i>
          </a>
        </div>
        <div className="linkedin1">
          <a href={props.links.linkedin}>
            <i class="fa-brands fa-linkedin icon_i"></i>
          </a>
        </div> */}

        <ul>
        {/* <!-- instagram --> */}
        <li>
            <a href={''+props.links.instagram}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span class="fa fa-instagram"></span>
            </a>
        </li>

        {/* <!-- liinkedin --> */}

        <li>
            <a href={''+props.links.linkedin}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span class="fa fa-linkedin"></span>
            </a>
        </li>

        {/* <!-- github --> */}

        <li>
            <a href={''+props.links.github}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span class="fa fa-git-square"></span>
            </a>
        </li>

    </ul>
      </div>
    </>
  );
};

export default SocialLinks;
