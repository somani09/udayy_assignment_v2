import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import {BrowserRouter as Router, Redirect} from "react-router-dom";
import Cookies from "cookie";
import {motion} from "framer-motion";

function Login({isLoggedIn,setIsLoggedIn}){
    const [username,setUser]=useState("");
    const [password,setPass]=useState("");
    const [userError,setUserError]=useState("");
    const [passError,setPassError]=useState("");
    const [form,setForm]=useState({user:"",pass:""});
    function handleInput(e){
        setForm({...form,[e.target.name]:e.target.value});
    }
    function valid(){
        setUserError("");
        setPassError("");
        if(form.user==="vaibhav"&&form.pass==="abcd1234")
        {   
            setUserError("");
            setPassError("");
            setUser(form.user);
            setPass(form.pass);
            document.cookie='loggedIn=true';//set cookie to keep loggedin
            console.log(document.cookie);
        }
        else{
            if(form.user==="")
            {
                setUserError("Username Cannot be blank");  
            }
            else if(form.user!=="vaibhav")
            {
                setUserError("invalid Username");
            }
            if(form.pass!="abcd1234")
            {
                setPassError("Invalid Password");
            }
            
        }   
    }
    //form handeling, ie, to get data and validate.
    function handleForm(e){
        e.preventDefault();
        valid();
    }

    const validity=document.cookie.split("=");
    console.log(validity[1]);
    if(validity[1]=="true") return <Redirect to="/multitab/home"/> //check cookie, if loggedin is true, redirected to home

    return(
        <div className="logindiv d-flex justify-content-center align-item-center">
            <motion.form initial={{x:1000}} animate={{x:0, transition:{duration:.2}}} className="login align-self-center p-5 d-flex flex-column col-lg-4 col-md-6 col-sm-8 col-11 w-100  justify-content-center" onSubmit={handleForm}>
                <h1 className="m-auto log">LOGIN</h1>
                <input className="input my-auto mx-5" placeholder="Username" type="text" name="user" value={form.user} onChange={handleInput}/>
                <h5 className="mx-auto justify-content-center errormsg p-">{userError}</h5>
                <input className="input my-auto mx-5" placeholder="Password" type="password" name="pass" value={form.pass} onChange={handleInput}/> 
                <h5 className="mx-auto justify-content-center errormsg">{passError}</h5>
                <button className="logbut btn-primary my-auto mx-5">LogIn</button>
            </motion.form>
            <motion.div initial={{x:1000}} animate={{x:0, transition:{duration:.5}}} className="cred">
                    <p>userName : vaibhav</p>
                    <p>password : abcd1234</p>
            </motion.div>
        </div>
    );
}

export default Login;