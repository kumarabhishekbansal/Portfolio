import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { getAdmin } from "../../Reducer/AuthSlice";
import { Parallax } from "react-scroll-parallax";
const Service = () => {
  const dispatch = useDispatch();

  const { PortfolioUser } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAdmin());
  }, []);
  return (
    <>
      <div className="container service_container">
        <div className="master_div_service my-3">
          <h2 className="serviceheading my-3">Services</h2>
        </div>

        <div className="service_main_div_images">
          {PortfolioUser &&
          PortfolioUser.service &&
          PortfolioUser.service.length > 0 ? (
            <>
              {PortfolioUser.service.map((val) => {
                return (
                  <Parallax scale={[0.9, 1.1]}
                  rotateZ={['10','-10']}
                  >
                    <div className="card service_images_card">
                      <div className="card-body">
                        <h5 className="card-title">{val.title}</h5>
                        <p className="card-text">{val.description}</p>
                      </div>
                    </div>
                  </Parallax>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Service;
