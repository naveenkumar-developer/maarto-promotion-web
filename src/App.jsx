import EarningsCard from "./Component/EarningsCard";
import Footer from "./Component/footer";
import Header from "./Component/header";
import HeroSection from "./Component/hero";
import HighLights from "./Component/highlights";
import Testimonials from "./Component/Testimonials";
import UserGuide from "./Component/userGuide";
import WhyChooseUs from "./Component/whyChooseUs";
import PageRoutes from "./Pages/PageRoutes";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Component/ScrollToTop";
import { ToastContainer } from "react-toastify";

const App = () =>{
  return (
    <>
    <ScrollToTop />
    <Header />
    <PageRoutes />
    <Footer />

          <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  )
}

export default App;