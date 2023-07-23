import React, { useEffect, useState } from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../Reducer/AuthSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [fields, setfields] = useState({
    email: "",
    password: "",

  });

  const { isSuccess,message } = useSelector((state) => state.auth);

  const handleinputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setfields({ ...fields, [name]: value });
  };

  const handleLogin=(e)=>{
    e.preventDefault();
    dispatch(login(fields));
  }

  useEffect(() => {
    if (isSuccess) {
      console.log("Logged");
      toast.success("Logged...");
      dispatch(reset());
      navigate("/");
    }else if(message)
    {
      console.log(message);
      // toast.error(message);
      toast.warning("Only Admin (Abhishek) can login..")
      dispatch(reset());
      
    }
  }, [isSuccess,message,dispatch]);
  return (
    <>
      <div className="login_form_div">
        <form method="POST" onSubmit={handleLogin}>
          <label htmlFor="email">Email Id</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleinputs}
            value={fields.email}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleinputs}
            value={fields.password}
          />
          <input type="submit" value="Login..." />
          <ToastContainer />
        </form>
      </div>
    </>
  );
};

export default Login;
