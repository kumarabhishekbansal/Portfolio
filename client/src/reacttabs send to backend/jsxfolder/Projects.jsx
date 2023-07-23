import React, { useState, useEffect } from "react";
import "../styles/About.css";
import { useDispatch, useSelector } from "react-redux";
import s1 from "../assests/images/si1.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendprojectpage,reset } from "../../components/Reducer/AuthSlice";
const Projects = () => {
  const dispatch = useDispatch();
  const { PortfolioUser, message, isSuccess } = useSelector(
    (state) => state.auth
  );
  const [fields, setfields] = useState({
    email: PortfolioUser.email,
    project_intro: "",
    image: "",
    title: "",
    description:"",
    github_url:"",
    deployed_url:"",
  });

  const [slide, setslide] = useState(null);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setfields({ ...fields, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendprojectpage(fields));
  };

  const handleImage = async (e) => {
    const data = new FormData();
    const file = e.target.files[0];
    setslide(file);
    data.append("file", file);
    data.append("upload_preset", "Portfolio");
    data.append("cloud_name", "do2yjfyfe");
    try {
      fetch("https://api.cloudinary.com/v1_1/do2yjfyfe/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setslide(data.url);
          setfields({ ...fields, image: data.url });
        })
        .catch((err) => console.log("error"));
    } catch (error) {
      console.log("Error");
    }
  };

  useEffect(() => {
    if (isSuccess) {
      console.log(PortfolioUser);
      toast.success("projectpage updated..");
      reset();
    } else if (message) {
      console.log(message);
      toast.error("projectpage can not be updated..");
      reset();
    }
    reset();
  }, [PortfolioUser, message, isSuccess]);
  return (
    <>
      <div className="container">
        <h1 className="text-info text-center">Project Page</h1>
        <form onSubmit={handleSubmit}>
          {/* Introduction */}
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Some Information for like heading in project
            </label>
            <input
              type="text"
              class="form-control"
              id="project_intro"
              name="project_intro"
              value={fields.project_intro}
              placeholder="Enter some Information"
              onChange={handleInput}
            />
          </div>

          {/* images */}
          <div className="images_home_slider">
            <div className="home_slider_profile_container">
              <img
                src={slide || s1}
                alt=""
                className="home_signup_profile_pic slider_1_img"
              />
              <label
                htmlFor="image-upload1"
                className="home_image-upload-label"
              >
                <i className="fas fa-plus-circle home_add-picture-icon"></i>
              </label>
              <input
                type="file"
                id="image-upload1"
                hidden
                accept="image/*"
                onChange={handleImage}
              />
            </div>
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput2" class="form-label">
              Project title
            </label>
            <input
              type="text"
              class="form-control"
              id="title"
              name="title"
              value={fields.title}
              placeholder="Enter some Information"
              onChange={handleInput}
            />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Project Description
            </label>
            <textarea
              class="form-control"
              id="description"
              name="description"
              value={fields.description}
              rows="3"
              onChange={handleInput}
            ></textarea>
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput3" class="form-label">
              Project Link
            </label>
            <input
              type="text"
              class="form-control"
              id="deployed_url"
              name="deployed_url"
              value={fields.deployed_url}
              placeholder="Enter Project Link"
              onChange={handleInput}
            />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput3" class="form-label">
              Source code Link
            </label>
            <input
              type="text"
              class="form-control"
              id="github_url"
              name="github_url"
              value={fields.github_url}
              placeholder="Enter Project Link"
              onChange={handleInput}
            />
          </div>
          <input type="submit" value="Upload" className="upload_home_data" />
          <ToastContainer />
        </form>
      </div>
    </>
  );
};

export default Projects;
