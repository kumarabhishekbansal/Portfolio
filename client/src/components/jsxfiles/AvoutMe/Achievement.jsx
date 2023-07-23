import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { getAdmin } from "../../Reducer/AuthSlice";
const Achievement = () => {
  const dispatch = useDispatch();

  const [achievement, setachievement] = useState("");

  const { PortfolioUser } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAdmin());
    console.log(PortfolioUser);
  }, []);

  return (
    <>
      <div className="container achievement_container">
        <div className="master_div_achievement my-3">
          <h2 className="achievementheading my-3">Achievement</h2>
          <p className="achievementabout intro my-5">
            {PortfolioUser ? <>{PortfolioUser.achievement_subtitle}</> : <></>}
          </p>
        </div>

        <div className="achievement_main_div_images">
          {PortfolioUser &&
          PortfolioUser.achievement &&
          PortfolioUser.achievement.length > 0 ? (
            <>
              {PortfolioUser.achievement.map((val) => {
                return (
                  <div class="card achivement_images_card">
                    <img
                      src={val.achievement_certificates}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <p class="card-text">{val.achievement_intro}</p>
                    </div>
                  </div>
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

export default Achievement;
