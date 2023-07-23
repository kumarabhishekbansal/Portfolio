import React, { useState } from "react";
import "../../../reacttabs send to backend/styles/Register.css";
import registerimg from "../../../reacttabs send to backend/assests/images/register.jpg";
import si1 from "../../../reacttabs send to backend/assests/images/si1.jpg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
let API_URL = "/api/contact/";
const ContactUs = () => {
  const [ sendcontact, setsendcontact ] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInput = (e) => {
    setsendcontact({ ...sendcontact, [e.target.name]: e.target.value });
  };

  const SentMessage = async (e) => {
      e.preventDefault();
    try {
      const response = await axios.post(API_URL + "sendmessage", sendcontact);
      console.log(response);
      // console.log(response.data.message);
      if(response.status===400)
      {
        toast.error(response.data.message);
      }else if(response.status===200)
      {
        toast.success(response.data.message);
      }
      setTimeout(()=>{
        window.location.reload(false);
      },5000);
      
      setsendcontact({...sendcontact,name:"",email:"",phone:"",message:""});
    } catch (error) {
      // console.log(error.response);
      toast.error(error.response.data.message);
      setsendcontact({name:"",email:"",phone:"",message:""});
      setTimeout(()=>{
        window.location.reload(false);
      },5000);
      console.log("error occur while sending message");
    }
  };

  return (
    <>
      <div className="container d-flex flex-column justify-content-center  register_container">
        <h1 className="register_headline my-2">Contact Form</h1>

        <div className="row">
          {/* register page image */}

          <div className="col-4  d-flex flex-column justify-content-center">
            <img src={registerimg} className="img-fluid" alt="RegisterImage" />
          </div>

          {/* register form */}

          <div className="col-8">
            <form method='POST' onSubmit={SentMessage}>
              {/* contact pic */}

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
                  onChange={handleInput}
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
                  onChange={handleInput}
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
                  onChange={handleInput}
                />
              </div>

              {/* message */}

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={handleInput}
                  name="message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
