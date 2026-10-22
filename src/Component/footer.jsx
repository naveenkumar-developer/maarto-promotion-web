import Theme from "../assets/Theme/Theme";
import WebsiteLogo from '../assets/global/websiteLogo3.svg'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube ,
} from "react-icons/fa";
import Logo from "./logo";

const Footer = () => {

  const socialLinks = [
    {
      id: 1,
      link: "https://www.facebook.com/profile.php?id=61577695685102",
      icon: FaFacebookF,
    },
        {
      id: 1,
      link: "https://www.instagram.com/maarto_official",
      icon: FaInstagram,
    },
    {
      id: 3,
      link: "https://www.linkedin.com/company/maarto/",
      icon: FaLinkedinIn,
    },
    {
      id: 4,
      link: "https://youtube.com/@maarto_official",
      icon: FaYoutube 
    }
  ]
  return (
    <footer
      className="pt-16 pb-8 px-6"
      style={{ background: "#0F172A" }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        <div>
          {/* <h2
            className="text-2xl font-bold mb-4"
            style={{ color: Theme.primary }}
          >
            Maarto
          </h2> */}
                           <div className="h-8 mb-4">
              <img
                src={WebsiteLogo}
                alt="website logo"
                className="h-full w-auto  rounded-sm"
              />
            </div>

          <p className="text-gray-400 leading-relaxed text-sm">
            We help vendors grow their business by purchasing products
            directly and selling them to customers while ensuring reliable
            profit sharing.
          </p>

          <div className="flex gap-4 mt-6">
            {socialLinks.map(
              (data, index) => (
                <div
                  key={index}
                  className="p-2 rounded-full cursor-pointer transition hover:scale-110"
                  style={{ background: "#1E293B" }}
                >
                  <a href={data.link} target="_blank" >
                  <data.icon className="text-white text-sm" />
                  </a>
                </div>
              )
            )}
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Contact us</h3>
<ul className="space-y-3 text-gray-400 text-sm">
  <li className="hover:text-white">
    Email: <a href="mailto:contact@maarto.com" className="hover:underline">contact@maarto.com</a>
  </li>
  <li className="hover:text-white">
    Phone: <a href="tel:9477808080" className="hover:underline">9477808080</a>
  </li>
</ul>
        </div>

        {/* Quick Links */}
        {/* <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">How It Works</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
          </ul>
        </div> */}

        {/* Vendor */}
        {/* <div>
          <h3 className="text-white font-semibold mb-4">Vendors</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">
              Become a Vendor
            </li>
            <li className="hover:text-white cursor-pointer">
              Vendor Dashboard
            </li>
            <li className="hover:text-white cursor-pointer">
              Vendor Guide
            </li>
            <li className="hover:text-white cursor-pointer">
              Profit Model
            </li>
          </ul>
        </div> */}

        {/* Support */}
        {/* <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-white cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-white cursor-pointer">
              Contact Us
            </li>
          </ul>
        </div> */}
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Maarto. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;