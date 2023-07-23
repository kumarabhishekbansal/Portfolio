import React, { useState, useEffect } from "react";
import "../styles/About.css";
import { useDispatch, useSelector } from "react-redux";
import s1 from "../assests/images/si1.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendtechnologypage,reset } from "../../components/Reducer/AuthSlice";
const TechnologyUsed = () => {
  const dispatch = useDispatch();
  const { PortfolioUser, message, isSuccess } = useSelector(
    (state) => state.auth
  );
  const [fields, setfields] = useState({
    email: PortfolioUser.email,
    tech_intro: "",
    image: "",
    title: "",
    description:"",
  });

  const [slide, setslide] = useState(null);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setfields({ ...fields, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log(fields);
    e.preventDefault();
    dispatch(sendtechnologypage(fields));
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
      toast.success("tech page updated..");
      reset();
    } else if (message) {
      console.log(message);
      toast.error("tech page can not be updated..");
      reset();
    }
    reset();
  }, [PortfolioUser, message, isSuccess]);
  return (
    <>
      <div className="container">
        <h1 className="text-info text-center">Technology Used Page</h1>
        <form onSubmit={handleSubmit}>
        {/* Introduction */}
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Some Information for like heading in TechnologyUsed
          </label>
          <input
            type="text"
            class="form-control"
            id="tech_intro"
            name="tech_intro"
            value={fields.tech_intro}
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
          Technology Used title
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
          Technology Used Description
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
        <input type="submit" value="Upload" className="upload_home_data" />
          <ToastContainer />
        </form>
      </div>
    </>
  );
};

export default TechnologyUsed;
