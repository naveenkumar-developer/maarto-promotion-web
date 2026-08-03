import HeroSection from "../Component/hero";
import HighLights from "../Component/highlights";
import Testimonials from "../Component/Testimonials";
import UserGuide from "../Component/userGuide";
import WhyChooseUs from "../Component/whyChooseUs";

const Home = () =>{
    return(
<>
    <HeroSection />
    <HighLights />
    {/* <EarningsCard /> */}
    <WhyChooseUs />
    <Testimonials />
    <UserGuide />
</>
    )
}

export default Home;