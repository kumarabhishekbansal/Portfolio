import React from "react";
import "react-tabs/style/react-tabs.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import ShowTabs from "./reacttabs send to backend/jsxfolder/ShowTabs";
import {Routes,Route } from "react-router-dom";
import Navbar from "./components/jsxfiles/Navbar";
import Home from "./components/jsxfiles/Home";
import Login from "./components/jsxfiles/Login";
import { useSelector } from "react-redux";
import Register from "./reacttabs send to backend/jsxfolder/Register";
import Footer from "./components/jsxfiles/footer/Footer";
import AboutMe from "./components/jsxfiles/AvoutMe/AboutMe";
import Service from "./components/jsxfiles/Service/Service";
import TechnologyUsed from "./components/jsxfiles/Technologies/TechnologyUsed";
import Project from "./components/jsxfiles/Projects/Project";
import ContactUs from "./components/jsxfiles/ContactUs/ContactUs";
const App = () => {
  const {PortfolioUser,token}=useSelector((state)=>state.auth);
  return (
    <>
    <div className="app_container">
    <Navbar />
    {/* <ShowTabs /> */}
    {PortfolioUser && token?<ShowTabs />:(<></>)}
    
      <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/about' element={<AboutMe />}></Route>
          <Route exact path='/service' element={<Service />}></Route>
          <Route exact path='/project' element={<Project />}></Route>
          <Route exact path='/tech' element={<TechnologyUsed />}></Route>
          <Route exact path='/contact' element={<ContactUs />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/register' element={<Register />}></Route>
      </Routes>
      <Footer />
    </div>
      
    </>
  );
};

export default App;
