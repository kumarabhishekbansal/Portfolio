import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendaboutpage, reset } from "../../components/Reducer/AuthSlice";
import "../styles/About.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const About = () => {
  const dispatch = useDispatch();
  const { PortfolioUser, message, isSuccess } = useSelector(
    (state) => state.auth
  );
  const [fields, setfields] = useState({
    email: PortfolioUser.email,
    about_intro: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setfields({ ...fields, [name]: value });
    // console.log(fields.github);
    // console.log(PortfolioUser.email);
    // setfields({...fields,email:PortfolioUser.email});
    // console.log(name,value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendaboutpage(fields));
  };
  useEffect(() => {
    if (isSuccess) {
      console.log(PortfolioUser);
      toast.success("updated..");
    } else if (message) {
      console.log(message);
      toast.error("can be updated..");
      reset();
    }
  }, [PortfolioUser, message, isSuccess]);
  return (
    <>
      <div className="container">
        <h1 className="text-info text-center">About Page</h1>
        {/* Introduction */}
        <form onSubmit={handleSubmit}>
        <div class="mb-3">
        
          <label for="exampleFormControlTextarea1" class="form-label">
            Introduction
          </label>
          <textarea
            class="form-control"
            id="about_intro"
            name="about_intro"
            rows="3"
            onChange={handleInput}
            value={fields.about_intro}
          ></textarea>
        </div>
        <input type="submit" value="Submit" className="upload_home_data" />
        <ToastContainer />
        </form>
      </div>
    </>
  );
};

export default About;
