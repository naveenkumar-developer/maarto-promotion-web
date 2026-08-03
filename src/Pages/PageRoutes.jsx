import {Routes, Route, Navigate}  from "react-router-dom";
import HowItWorks from "./HowItWorks";
import Home from "./Home";
import ContactUs from "./ContactUs";
import WhyMaarto from "./WhyMaarto";
import Feature from "./Feature";

const PageRoutes = () =>{
    return(
        <>
        
        <Routes>
        <Route index element = {<Home />} />
        <Route path="/home" element = {<Home />} />
        <Route path="/howItWorks" element = {<HowItWorks />} />
        <Route path="/ContactUs" element = {<ContactUs />} />
        <Route path="/WhyMaarto" element = {<WhyMaarto />} />
        <Route path="/Feature" element = {<Feature />} />
        </Routes>
        </>
    )
}

export default PageRoutes;