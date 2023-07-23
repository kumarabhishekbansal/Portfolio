import React from "react";
import "../styles/Register.css";
import registerimg from "../assests/images/register.jpg";
import si1 from "../assests/images/si1.jpg";
const Contact = () => {

  return (
    <>
      <div className="container d-flex flex-column justify-content-center  register_container">

      <h1 className="register_headline my-2">
        Contact Form
      </h1>

        <div className="row">
          {/* register page image */}

          <div className="col-4  d-flex flex-column justify-content-center">
            <img src={registerimg} className="img-fluid" alt="RegisterImage" />
          </div>

          {/* register form */}

          <div className="col-8">
            <form method="POST">


            {/* contact pic */}

            
              <div className="signup_profile_container">
                <img
                  src={si1}
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
          ></textarea>
        </div>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
