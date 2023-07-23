import React, { useState, useEffect } from "react";
import "../styles/About.css";
import { useDispatch, useSelector } from "react-redux";
import s1 from "../assests/images/si1.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendaddprojectimagepage,reset } from "../../components/Reducer/AuthSlice";
const AddImageProject = () => {
  const dispatch = useDispatch();
  const { PortfolioUser, message, isSuccess } = useSelector(
    (state) => state.auth
  );
  const [fields, setfields] = useState({
    email: PortfolioUser.email,
    image: "",
    id:""
  });

  const [slide, setslide] = useState(null);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setfields({ ...fields, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendaddprojectimagepage(fields));
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
      toast.success("addimageproject updated..");
      reset();
    } else if (message) {
      console.log(message);
      toast.error("addimageproject can not be updated..");
      reset();
    }
    reset();
  }, [PortfolioUser, message, isSuccess]);
  return (
    <>
      <div className="container">
        <h1 className="text-info text-center">ADD Project IMAGES Page</h1>
        <form onSubmit={handleSubmit}>
          {/* Introduction */}
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Enter id
            </label>
            <input
              type="text"
              class="form-control"
              id="id"
              name="id"
              value={fields.id}
              placeholder="Enter Id"
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
          <input type="submit" value="Add" className="upload_home_data" />
          <ToastContainer />
        </form>
      </div>
    </>
  );
};

export default AddImageProject;
