import axios from 'axios';

let API_URL='/api/user/';

// register

const register=async(userdata)=>{
    console.log("API_URL : ",API_URL);
    const response=await axios.post(API_URL+'register',userdata);
    console.log("response is : ",response);
    if(response.status!==200 && response.status!==201)
    {
        // console.log("Response error register : ",response.data.error);
        return Promise.reject(response.data.message);
    }
    else if(response.data && response.status===201)
    {
        localStorage.setItem('PortfolioUser',JSON.stringify(response.data));
        return Promise.resolve(response.data);
    }
    return response.data;    
}

const login=async(userdata)=>{
    const response=await axios.post(API_URL+'login',userdata);

    console.log("response is : ",response);
    if(response.status!==200 && response.status!==201)
    {
        // console.log("Response error register : ",response.data.error);
        return Promise.reject(response.data.message);
    }
    else if(response.data && response.status===200)
    {
        localStorage.setItem('PortfolioUser',JSON.stringify(response.data));
        localStorage.setItem('token',JSON.stringify("ThisisPortfolioOfAbhishek$#233]^$32534"));
        return Promise.resolve(response.data);
    }
    return response.data;  
}
const logout=async()=>{
    localStorage.removeItem('PortfolioUser');
}

const sendhomepage=async(userdata)=>{
    console.log(userdata);
    const response=await axios.put(API_URL+'homePage',userdata);

    console.log("response is : ",response);
    if(response.status!==200 && response.status!==201)
    {
        // console.log("Response error register : ",response.data.error);
        return Promise.reject(response.data.message);
    }
    else if(response.data && response.status===200)
    {
        // localStorage.setItem('PortfolioUser',JSON.stringify(response.data));
        return Promise.resolve(response.data);
    }
    return response.data;  
}

// getadmin
const getAdmin=async()=>{
    const response=await axios.put(API_URL+'getAdmin');
    console.log("response is : ",response.data);
    if(response.status!==200 && response.status!==201)
    {
        // console.log("Response error register : ",response.data.error);
        return Promise.reject(response.data.message);
    }
    else if(response.data && response.status===200)
    {
        localStorage.setItem('PortfolioUser',JSON.stringify(response.data));
        return Promise.resolve(response.data);
    }
    return response.data;  
}

// send about page

const sendaboutpage=async(userdata)=>{
    console.log("userdata :::: ",userdata);
    const response=await axios.put(API_URL+'aboutpage',userdata);

    console.log("response is : ",response);
    if(response.status!==200 && response.status!==201)
    {
        // console.log("Response error register : ",response.data.error);
        return Promise.reject(response.data.message);
    }
    else if(response.data && response.status===200)
    {
        // localStorage.setItem('PortfolioUser',JSON.stringify(response.data));
        return Promise.resolve(response.data);
    }
    return response.data;  
}

const sendachievementpage=async(userdata)=>{
    console.log("userdata :::: ",userdata);
    const response=await axios.put(API_URL+'achievementpage',userdata);

    console.log("response is : ",response);
    if(response.status!==200 && response.status!==201)
    {
        // console.log("Response error register : ",response.data.error);
        return Promise.reject(response.data.message);
    }
    else if(response.data && response.status===200)
    {
        // localStorage.setItem('PortfolioUser',JSON.stringify(response.data));
        return Promise.resolve(response.data);
    }
    return response.data;  
}

const sendfooterpage=async(userdata)=>{ 
    console.log("userdata :::: ",userdata);
    const response=await axios.put(API_URL+'footerpage',userdata);

    console.log("response is : ",response);
    if(response.status!==200 && response.status!==201)
    {
        // console.log("Response error register : ",response.data.error);
        return Promise.reject(response.data.message);
    }
    else if(response.data && response.status===200)
    {
        // localStorage.setItem('PortfolioUser',JSON.stringify(response.data));
        return Promise.resolve(response.data);
    }
    return response.data;  
}

const sendprojectpage=async(userdata)=>{ 
    console.log("userdata :::: ",userdata);
    const response=await axios.put(API_URL+'projectpage',userdata);

    console.log("response is : ",response);
    if(response.status!==200 && response.status!==201)
    {
        // console.log("Response error register : ",response.data.error);
        return Promise.reject(response.data.message);
    }
    else if(response.data && response.status===200)
    {
        // localStorage.setItem('PortfolioUser',JSON.stringify(response.data));
        return Promise.resolve(response.data);
    }
    return response.data;  
}

const sendaddprojectimagepage=async(userdata)=>{ 
    console.log("userdata :::: ",userdata);
    const response=await axios.put(API_URL+'sendaddprojectimagepage',userdata);

    console.log("response is : ",response);
    if(response.status!==200 && response.status!==201)
    {
        // console.log("Response error register : ",response.data.error);
        return Promise.reject(response.data.message);
    }
    else if(response.data && response.status===200)
    {
        // localStorage.setItem('PortfolioUser',JSON.stringify(response.data));
        return Promise.resolve(response.data);
    }
    return response.data;  
}

const sendservicepage=async(userdata)=>{ 
    console.log("userdata :::: ",userdata);
    const response=await axios.put(API_URL+'servicepage',userdata);

    console.log("response is : ",response);
    if(response.status!==200 && response.status!==201)
    {
        // console.log("Response error register : ",response.data.error);
        return Promise.reject(response.data.message);
    }
    else if(response.data && response.status===200)
    {
        // localStorage.setItem('PortfolioUser',JSON.stringify(response.data));
        return Promise.resolve(response.data);
    }
    return response.data;  
}

const sendtechnologypage=async(userdata)=>{ 
    console.log("userdata :::: ",userdata);
    const response=await axios.put(API_URL+'technologypage',userdata);

    console.log("response is : ",response);
    if(response.status!==200 && response.status!==201)
    {
        // console.log("Response error register : ",response.data.error);
        return Promise.reject(response.data.message);
    }
    else if(response.data && response.status===200)
    {
        // localStorage.setItem('PortfolioUser',JSON.stringify(response.data));
        return Promise.resolve(response.data);
    }
    return response.data;  
}

const sendworkexppage=async(userdata)=>{ 
    console.log("userdata :::: ",userdata);
    const response=await axios.put(API_URL+'workexppage',userdata);

    console.log("response is : ",response);
    if(response.status!==200 && response.status!==201)
    {
        // console.log("Response error register : ",response.data.error);
        return Promise.reject(response.data.message);
    }
    else if(response.data && response.status===200)
    {
        // localStorage.setItem('PortfolioUser',JSON.stringify(response.data));
        return Promise.resolve(response.data);
    }
    return response.data;  
}

const AuthService={
    register,
    login,
    logout,
    sendhomepage,
    getAdmin,
    sendaboutpage,
    sendachievementpage,
    sendfooterpage,
    sendprojectpage,
    sendservicepage,
    sendtechnologypage,
    sendworkexppage,
    sendaddprojectimagepage
}

export default AuthService;