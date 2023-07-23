import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";
import registerimg from "../assests/images/register.jpg";
import si1 from "../assests/images/si1.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch,useSelector } from "react-redux";
import {register,reset} from "../../components/Reducer/AuthSlice"
// import Login from "../../components/jsxfiles/Login"
const Register = () => {

    const dispatch=useDispatch();
    const navigate=useNavigate();
// user details

// const [image, setImage] = useState("");
const[imagepreview,setimagepreview]=useState(null);
const [fields,setfields]=useState({
  name:"",email:"",phone:"",password:"",confirmpassword:"",profile_pic:""
})
const {isSuccess}=useSelector((state)=>state.auth);


const handleImage = async (e) => {
  const data = new FormData();
  const file=e.target.files[0];
  setimagepreview(file);
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
        setimagepreview(data.url);
        setfields({...fields,profile_pic:data.url});
      })
      .catch((err) => console.log("error"));
  } catch (error) {
    console.log("Error");
  }
};

const handleinputs=(e)=>{
  const name=e.target.name;
  const value=e.target.value;
  setfields({...fields,[name]:value});
}


//  send to server side
    
const handleRegister=(e)=>{
  e.preventDefault();
  dispatch(register(fields));
  navigate("/login");
}

useEffect(()=>{
  if(isSuccess)
  {
    console.log("registered");
    toast.success("registered...")
    dispatch(reset());

  }
},[isSuccess])



  return (
    <>
      <div className="container d-flex flex-column justify-content-center  register_container">

      <h1 className="register_headline my-2">
        Register Form
      </h1>

        <div className="row">
          {/* register page image */}

          <div className="col-4  d-flex flex-column justify-content-center">
            <img src={registerimg} className="img-fluid" alt="RegisterImage" />
          </div>

          {/* register form */}

          <div className="col-8">
            <form method="POST" onSubmit={handleRegister}>


            {/* profile pic */}

            
              <div className="signup_profile_container">
                <img
                  src={imagepreview || si1}
                  alt=""
                  className="signup_profile_pic"
                />
                <label htmlFor="image-upload" className="image-upload-label">
                  <i className="fas fa-plus-circle add-picture-icon"></i>
                </label>
                <input
                  type="file"
                  id="image-upload"
                  hidden
                  accept="image/png"
                  onChange={handleImage}
                />
              </div>

              {/* name */}

              <div class="mb-3">
                <label htmlFor="exampleInputname1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputname1"
                  name="name"
                  onChange={handleinputs}
                   value={fields.name}
                />
              </div>

              {/* email */}

              <div class="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                   onChange={handleinputs}
                    value={fields.email}
                />
              </div>

              {/* phone */}

              <div class="mb-3">
                <label htmlFor="exampleInputphone1" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputphone1"
                  name="phone"
                   onChange={handleinputs}
                    value={fields.phone}
                />
              </div>

              {/* password */}

              <div class="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                   onChange={handleinputs}
                    value={fields.password}
                />
              </div>

              {/* confirm password */}

              <div class="mb-3">
                <label htmlFor="exampleInputCPassword1" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputCPassword1"
                  name="confirmpassword"
                   onChange={handleinputs}
                   value={fields.confirmpassword}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
