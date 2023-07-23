import React, { useState, useEffect } from "react";
import "./style.css";
import { Parallax } from "react-scroll-parallax";
const Sidebarhome = (props) => {
  const [selectpic, setselectpic] = useState(null);
  const [current, setcurrent] = useState(0);
  useEffect(() => {
    const len = props.pics.length;
    setTimeout(() => {
      const next = current % len;
      setcurrent(current + 1);
      setselectpic(props.pics[next].pic);
      // console.log(props.pics[next].pic);
    }, 3000);
  }, [current]);

  return (
    <>
      <Parallax 
      scale={[1, 0.75]}
      rotateX={['0','90']}
      opacity={[1,0.5]}
      easing="easeInQuad">
        <div className="sidehomeimgdiv">
          <img src={selectpic} alt="profile" className="sidehomeimg" />
        </div>
      </Parallax>
    </>
  );
};

export default Sidebarhome;
