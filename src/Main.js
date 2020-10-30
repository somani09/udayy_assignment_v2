import React,{useCallback, useState} from "react";
import ReactDom from "react-dom";
import "./main.css"
import Header from "./Header";
import Mid from "./Mid";
import Footer from "./Footer";
import {BrowserRouter as Router, Redirect} from "react-router-dom";
import debounce from "lodash.debounce";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {motion} from "framer-motion";


function Main({isLoggedIn,setIsLoggedIn}){
    
    const [link1,setLink1]=useState("");
    const [link2,setLink2]=useState("");
    //debounce used so that once one call if fired up at the end of typing
    const debounceSave1= useCallback(
        debounce((nextValue1)=>setLink1(nextValue1),1000),[]
    );   
    function handleLink1(e){
        const nextValue1=e.target.value;
        debounceSave1(nextValue1);
    }
    const debounceSave2= useCallback(
        debounce((nextValue2)=>setLink2(nextValue2),1000),[]
    );   
    function handleLink2(e){
        const nextValue2=e.target.value;
        debounceSave2(nextValue2);
    }
    const validty=document.cookie.split("=");
    console.log(validty[1]);
    if(validty[1]!="true") return <Redirect to="multitab/"/>//check cookie, if loggedin is false, redirected to login page
    return(
        <div className="main">
            <motion.div initial={{x:2000}} animate={{x:0, transition:{duration:.5}}} className="header">
                <Header handleLink1={handleLink1} handleLink2={handleLink2}  />
            </motion.div>
            <motion.div initial={{x:2000}} animate={{x:0, transition:{duration:.7}}} className="mid" >
                <Mid link1={link1} link2={link2} />
            </motion.div>
            <motion.div initial={{x:2000}} animate={{x:0, transition:{duration:1}}} className="footer">
                <Footer />
            </motion.div>
            
        </div>
    );
}

export default Main;