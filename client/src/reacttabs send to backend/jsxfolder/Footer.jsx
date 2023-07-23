import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendfooterpage, reset } from "../../components/Reducer/AuthSlice";
import "../styles/About.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Footer = () => {

  const dispatch = useDispatch();
  const { PortfolioUser, message, isSuccess } = useSelector(
    (state) => state.auth
  );
  const [fields, setfields] = useState({
    email: PortfolioUser.email,
    footer_subtitle: "",
    footer_intro:"",
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
    dispatch(sendfooterpage(fields));
  };
  useEffect(() => {
    if (isSuccess) {
      console.log(PortfolioUser);
      toast.success("footer updated..");
    } else if (message) {
      console.log(message);
      toast.error("footer can not be updated..");
      reset();
    }
  }, [PortfolioUser, message, isSuccess]);

  return (
    <>
      <div className="container">
        <h1 className="text-info text-center">Footer Page</h1>

        {/* subtitile */}
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleFormControlInput2" class="form-label">
            subtitile
          </label>
          <input
            type="text"
            class="form-control"
            id="footer_subtitle"
            name="footer_subtitle"
            value={fields.footer_subtitle}
            placeholder="Enter some subtitle"
            onChange={handleInput}
          />
        </div>

        {/* some short intro */}

        <div class="mb-3">
          <label for="exampleFormControlInput3" class="form-label">
            short Paragraph
          </label>
          <input
            type="text"
            class="form-control"
            id="footer_intro"
            name="footer_intro"
            value={fields.footer_intro}
            placeholder="Short Paragraph"
            onChange={handleInput}
          />
        </div>
        <input type="submit" value="Submit" className="upload_home_data" />
        <ToastContainer />
        </form>
      </div>
    </>
  );
};

export default Footer;
