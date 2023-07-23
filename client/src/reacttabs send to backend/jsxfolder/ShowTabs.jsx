import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"; 
import Home from './Home';
import Register from './Register';
import About from './About';
import Achievements from './Achivements';
import Contact from './Contact';
import Footer from './Footer';
import Projects from './Projects';
import Service from './Service';
import TechnologyUsed from './TechnologyUsed';
import WorkExpierence from './WorkExpierence';
import AddImageProject from './AddImageProject';
const ShowTabs = () => {
    return(
        <>
            <Tabs>
              <TabList>
                <Tab>Home</Tab>
                {/* <Tab>Register</Tab> */}
                <Tab>About</Tab>
                <Tab>Achievements</Tab>
                <Tab>Contact</Tab>
                <Tab>Footer</Tab>
                <Tab>Projects</Tab>
                <Tab>AddImageProject</Tab>
                <Tab>Service</Tab>
                <Tab>TechnologyUsed</Tab>
                <Tab>WorkExpierence</Tab>
              </TabList>      
              <TabPanel><h2><Home /> </h2></TabPanel>
              {/* <TabPanel><h2><Register /></h2></TabPanel> */}
              <TabPanel><h2><About /></h2></TabPanel>
              <TabPanel><h2><Achievements /></h2></TabPanel>
              <TabPanel><h2><Contact /></h2></TabPanel>
              <TabPanel><h2><Footer /></h2></TabPanel>
              <TabPanel><h2><Projects /></h2></TabPanel>
              <TabPanel><h2><AddImageProject /></h2></TabPanel>
              <TabPanel><h2><Service /></h2></TabPanel>
              <TabPanel><h2><TechnologyUsed /></h2></TabPanel>
              <TabPanel><h2><WorkExpierence /></h2></TabPanel>
            </Tabs>
        </>
    )
}

export default ShowTabs