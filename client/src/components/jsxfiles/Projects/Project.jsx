import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { getAdmin } from "../../Reducer/AuthSlice";
const Project = () => {
  const dispatch = useDispatch();

  const [project, setproject] = useState("");

  const { PortfolioUser } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAdmin());
  }, []);

  return (
    <>
      <div className="container project_container">
        <div className="master_div_project my-3">
          <h2 className="projectheading my-3">MY PROJECTS</h2>
          <p className="projectabout intro my-5">
            {PortfolioUser ? <>{PortfolioUser.project_intro}</> : <></>}
          </p>
        </div>

        <div className="project_main_div_images">
          {PortfolioUser &&
          PortfolioUser.project &&
          PortfolioUser.project.length > 0 ? (
            <>
              {PortfolioUser.project.map((val) => {
                return (
                  <div className="card project_images_card">
                  <div className="images_all_project">
                  {val && val.image && val.image.length>0?(<>
                    {val.image.map((imgval)=>{
                        return <img src={imgval} className="card-img-top" alt="img" />
                    })}
                  </>):(<><img src={val.image[0]} className="card-img-top" alt="img" /></>)}
                    
                  </div>
                    
                    <div className="card-body">
                      <h5 className="card-title">{val.title}</h5>
                      <p className="card-text">
                            {val.description}
                      </p>
                      <a href={val.deployed_url} target="_blank" rel="noreferrer" className="btn btn-primary">
                        Github
                      </a>
                      <a href={val.github_url} target="_blank" rel="noreferrer" className="btn btn-primary mx-5">
                        Link
                      </a>
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

export default Project;
