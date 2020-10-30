import React, { useState } from "react";
import ReactDom from "react-dom";
import "./header.css";
import {BrowserRouter as Router, Redirect, Link} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function Header({handleLink1,handleLink2}){
    
   function logOut(){
        document.cookie="loggedIn=false;expires=Thu, 01 Jan 1970 00:00:01 GMT";//set loggedIn to false and logOut
   }

    const validity=document.cookie.split("=");
    console.log(validity[1]);
    if(validity[1]=="false") return <Redirect to="/"/>//check cookie, if loggedin is false, redirected to login page
    return (
        <div className="row h-100 w-100 m-0 head">
            <div className="col-xl-1 col-lg-2 col-3 d-flex align-self-center justify-content-center"><p className="  m-auto name">Vaibhav</p></div>
            <div className="col-xl-10 col-lg-8 col-6 m-auto d-flex justify-content-center">
                <div className="row w-100 m-2 d-flex align-self-center justify-content-center">
                    <input className=" link my-auto w-100 col-lg-5    mx-3 w-100" placeholder="Enter Link 1" type="text" name="link1"  onChange={handleLink1}/>
                    <input className=" link col-lg-5  link my-auto mx-3 w-100" placeholder="Enter Link 2" type="text" name="link2" onChange={handleLink2}/>
                </div>
            </div>
            <div className="col-xl-1 col-lg-2 col-3 d-flex align-items-center justify-content-center ">
                <Link to="/multitab" onClick={logOut} className="logout m-auto ">LogOut</Link>
            </div>
        </div>
    );
}

export default Header;