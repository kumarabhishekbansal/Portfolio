import React, { useState,useEffect } from "react";
import "../styles/Home.css";
import s1 from "../assests/images/register.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendhomepage,reset } from "../../components/Reducer/AuthSlice";
import { useDispatch,useSelector } from "react-redux";

const Home = () => {

  const dispatch=useDispatch();
  const [slide1, setslide1] = useState(null);
  const {PortfolioUser,message,isSuccess}=useSelector((state)=>state.auth);
  const[fields,setfields]=useState({
    email:PortfolioUser.email,
    name:"",
    home_subtitle:"",
    home_intro:"",
    insta:"",
    github:"",
    linkedin:"",
    pic:"",
  })

  const handleImage1 = async (e) => {
    const data = new FormData();
    const file = e.target.files[0];
    setslide1(file);
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
          setslide1(data.url);
          setfields({...fields,pic:data.url});
        })
        .catch((err) => console.log("error"));
    } catch (error) {
      console.log("Error");
    }       
  };

 

  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setfields({...fields,[name]:value});
    // console.log(fields.github);
    // console.log(PortfolioUser.email);
    // setfields({...fields,email:PortfolioUser.email});
    // console.log(name,value);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(sendhomepage(fields));
}

  useEffect(()=>{
    if(isSuccess)
    {
      console.log(PortfolioUser);
      toast.success("updated..");
      reset();
    }else if(message)
    {
      console.log(message);
      toast.error("can be updated..");
      reset();
    }
    reset();
  },[PortfolioUser,message,isSuccess]);

  return (
    <>
      <div className="home_container">
        <h1 className="text-info text-center">Home Page</h1>

        {/* name */}
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Full Name
            </label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Enter full name"
              name="name"
              onChange={handleInput}
              value={fields.name}
            />
          </div>

          {/* subtitile */}

          <div class="mb-3">
            <label for="exampleFormControlInput2" class="form-label">
              subtitile
            </label>
            <input
              type="text"
              class="form-control"
              id="home_subtitle"
              placeholder="Enter some subtitle"
              name="home_subtitle"
              onChange={handleInput}
              value={fields.home_subtitle}
            />
          </div>

          {/* some short intro */}

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Some short Intro
            </label>
            <textarea
              class="form-control"
              id="home_intro"
              rows="3"
              name="home_intro"
              onChange={handleInput}
              value={fields.home_intro}
            ></textarea>
          </div>

          {/*  social links*/}

          {/* Instagram link */}

          <div class="mb-3">
            <label for="exampleFormControlInput3" class="form-label">
              Instagram link
            </label>
            <input
              type="text"
              class="form-control"
              id="insta"
              placeholder="Enter Instagram ID"
              name="insta"
              onChange={handleInput}
              value={fields.insta}
            />
          </div>

          {/* Linkedin link */}

          <div class="mb-3">
            <label for="exampleFormControlInput4" class="form-label">
              Linkedin link
            </label>
            <input
              type="text"
              class="form-control"
              id="linkedin"
              placeholder="Enter Your linkedin ID"
              name="linkedin"
              onChange={handleInput}
              value={fields.linkedin}
            />
          </div>

          {/* github link */}

          <div class="mb-3">
            <label for="exampleFormControlInput5" class="form-label">
              Github link
            </label>
            <input
              type="text"
              class="form-control"
              id="github"
              placeholder="Enter Your Github Id"
              name="github"
              onChange={handleInput}
              value={fields.github}
            />
          </div>

          {/* images */}
          <div className="images_home_slider">
            <div className="home_slider_profile_container">
              <img
                src={slide1 || s1}
                alt=""
                className="home_signup_profile_pic slider_1_img"
              />
              <label htmlFor="image-upload1" className="home_image-upload-label">
                <i className="fas fa-plus-circle home_add-picture-icon"></i>
              </label>
              <input
                type="file"
                id="image-upload1"
                hidden
                accept="image/*"
                onChange={handleImage1}
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

export default Home;
