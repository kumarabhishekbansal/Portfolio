import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { Parallax } from "react-scroll-parallax";
import { getAdmin } from "../../Reducer/AuthSlice";
// import LogoCube from "./LogoCube";
const TechnologyUsed = () => {
  const dispatch = useDispatch();
  const [technologyUsed, settechnologyUsed] = useState("");

  const { PortfolioUser } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAdmin());
    console.log(PortfolioUser);
  }, []);
  return (
    <div className="tech_container">
      <div className="master_div_tech my-3">
        <h2 className="techheading my-3">Technology Used</h2>
        <p className="techabout intro my-5">
          {PortfolioUser ? <>{PortfolioUser.tech_intro}</> : <></>}
        </p>
      </div>

      <div className="tech_main_div_images">
        {PortfolioUser &&
        PortfolioUser.tech &&
        PortfolioUser.tech.length > 0 ? (
          <>
            {/* <LogoCube images={PortfolioUser.tech} /> */}
            {PortfolioUser.tech.map((val, index) => {
              return (
                <div className="div_tech_new">
                  {index % 2 === 0 ? (
                    <>
                      <Parallax
                        translateX={["100px", "0px"]}
                        scale={[0.75, 1.1]}
                        easing="easeInQuad"
                      >
                        <div class="master_div1">
                          <div class="master_row1">
                            <div class="col_1">
                              <figure>
                                <img
                                  src={val.image}
                                  class="img-fluid"
                                  alt="mongo"
                                />
                                <h3 class="caption">{val.title}</h3>
                              </figure>
                            </div>

                            <div class="col_2">
                              <p class="intro1">{val.description}</p>
                            </div>
                          </div>
                        </div>
                      </Parallax>
                    </>
                  ) : (
                    <>
                      <Parallax
                        translateX={["-200px", "0px"]}
                        scale={[0.75, 1]}
                        easing="easeInQuad"
                      >
                        <div class="master_div1">
                          <div class="master_row1">
                            <div class="col_2_1">
                              <p class="intro1">{val.description}</p>
                            </div>

                            <div class="col_1_2">
                              <figure>
                                <img
                                  src={val.image}
                                  class="img-fluid"
                                  alt="mongo"
                                />
                                <h3 class="caption">{val.title}</h3>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </Parallax>
                    </>
                  )}
                </div>
              );
            })}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default TechnologyUsed;
