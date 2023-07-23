import React, { useState, useEffect } from "react";
import "../styles/About.css";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendservicepage,reset } from "../../components/Reducer/AuthSlice";
const Service = () => {
  const dispatch = useDispatch();
  const { PortfolioUser, message, isSuccess } = useSelector(
    (state) => state.auth
  );
  const [fields, setfields] = useState({
    email: PortfolioUser.email,
    title: "",
    description: ""
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setfields({ ...fields, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendservicepage(fields));
  };

  useEffect(() => {
    if (isSuccess) {
      console.log(PortfolioUser);
      toast.success("service page updated..");
      reset();
    } else if (message) {
      console.log(message);
      toast.error("service page can not be updated..");
      reset();
    }
    reset();
  }, [PortfolioUser, message, isSuccess]);

  return (
    <>
      <div className="container">
        <h1 className="text-info text-center">Service Page</h1>
        <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleFormControlInput2" class="form-label">
            Service title
          </label>
          <input
            type="text"
            class="form-control"
            id="title"
            name="title"
            value={fields.title}
            placeholder="Enter some title"
            onChange={handleInput}
          />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Service Description
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
        <input type="submit" value="Submit" className="upload_home_data" />
          <ToastContainer />
        </form>
      </div>
    </>
  );
};

export default Service;
