import React, { useState, useEffect } from "react";
import "../styles/About.css";
import { useDispatch, useSelector } from "react-redux";
import s1 from "../assests/images/si1.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendworkexppage,reset } from "../../components/Reducer/AuthSlice";
const WorkExpierence = () => {
  const dispatch = useDispatch();
  const { PortfolioUser, message, isSuccess } = useSelector(
    (state) => state.auth
  );
  const [fields, setfields] = useState({
    email: PortfolioUser.email,
    Work_experience_subtitle: "",
    Work_experience_intro: "",
    Work_experience_intro_certificates: "",
  });

  const [slide, setslide] = useState(null);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setfields({ ...fields, [name]: value });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(sendworkexppage(fields));
}

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
          setfields({ ...fields, Work_experience_intro_certificates: data.url });
        })
        .catch((err) => console.log("error"));
    } catch (error) {
      console.log("Error");
    }
  };

  useEffect(()=>{
    if(isSuccess)
    {
      console.log(PortfolioUser);
      toast.success("work exp page updated..");
      reset();
    }else if(message)
    {
      console.log(message);
      toast.error("work exp page can not be updated..");
      reset();
    }
    reset();
  },[PortfolioUser,message,isSuccess]);
  return (
    <>
      <div className="container">
        <h1 className="text-info text-center">Work Expierence Page</h1>
        <form onSubmit={handleSubmit}>
          {/* Introduction */}
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Enter some information about Your Work Expierence
            </label>
            <textarea
              class="form-control"
              id="Work_experience_subtitle"
              name="Work_experience_subtitle"
              rows="3"
              onChange={handleInput}
              value={fields.Work_experience_subtitle}
            ></textarea>
          </div>

          {/* some short intro */}

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Some short Intro for certificate
            </label>
            <textarea
              class="form-control"
              id="Work_experience_intro"
              rows="3"
              name="Work_experience_intro"
              onChange={handleInput}
              value={fields.Work_experience_intro}
            ></textarea>
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
          <input type="submit" value="Upload" className="upload_home_data" />
          <ToastContainer />
        </form>
      </div>
    </>
  );
};

export default WorkExpierence;
