import Logo from "./logo";
import Theme from "../assets/Theme/Theme";
import Home from "../Pages/Home";
import WhyMaarto from "../Pages/WhyMaarto";
import Feature from "../Pages/Feature"
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
// import { useNavigate } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
const Header = () => {
  const [open, setOpen] = useState(false);
// const navigate = useNavigate()
const navigate = useNavigate();
const location = useLocation();
const isActive = (path) => {
  return location.pathname === path;
};
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Logo />

        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          {/* <li onClick={()=>navigate("./Home")} className="cursor-pointer hover:text-black transition">
            Home
          </li> */}
<li
  onClick={() => navigate("/")}
  className={`cursor-pointer transition ${
    isActive("/")
      ? "text-orange-500 border-b-2 border-orange-500"
      : "text-gray-600 hover:text-black"
  }`}
>
  Home
</li>
          {/* <li className="cursor-pointer hover:text-black transition">
            Why Maarto?
          </li> */}

<li
  onClick={() => navigate("/WhyMaarto")}
  className={`cursor-pointer transition ${
    isActive("/WhyMaarto")
      ? "text-orange-500 border-b-2 border-orange-500"
      : "text-gray-600 hover:text-black"
  }`}
>
  Why Maarto?
</li>


          {/* <li onClick={()=>navigate("/howItWorks")} className="cursor-pointer hover:text-black transition">
            How It Works
          </li> */}

<li
  onClick={() => navigate("/howItWorks")}
  className={`cursor-pointer transition ${
    isActive("/howItWorks")
      ? "text-orange-500 border-b-2 border-orange-500"
      : "text-gray-600 hover:text-black"
  }`}
>
  How It Works
</li>

<li
  onClick={() => navigate("/Feature")}
  className={`cursor-pointer transition ${
    isActive("/Feature")
      ? "text-orange-500 border-b-2 border-orange-500"
      : "text-gray-600 hover:text-black"
  }`}
>
  Feature
</li>
          
          {/* <li onClick={()=>navigate("/ContactUs")} className="cursor-pointer hover:text-black transition">
            Contact Us
          </li> */}
        
        <li
  onClick={() => navigate("/ContactUs")}
  className={`cursor-pointer transition ${
    isActive("/ContactUs")
      ? "text-orange-500 border-b-2 border-orange-500"
      : "text-gray-600 hover:text-black"
  }`}
>
  Contact Us
</li>

        </ul>

        <div className="hidden md:flex items-center gap-4 ">

          <button
           onClick={() => window.open("https://seller.maarto.com/seller/signin", "_blank")}
           className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition">
            Sign In
          </button>

          <button
          onClick={() => window.open("https://seller.maarto.com/seller/signin", "_blank")}
            style={{ backgroundColor: Theme.primary }}
            className="px-6 py-2 rounded-lg text-white font-semibold shadow-md hover:opacity-90 transition"
          >
            Start Selling Today
          </button>
        </div>

        <button
        
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* {open && (
        <div className="md:hidden px-6 pb-6 bg-white border-t space-y-5">



          <div className="flex flex-col gap-3 my-2">
            <button
            onClick={() => window.open("https://seller.maarto.com/seller/signin", "_blank")}
            className="w-full py-2 rounded-lg border border-gray-300">
              Sign In
            </button>

            <button
            onClick={() => window.open("https://seller.maarto.com/seller/signin", "_blank")}
              style={{ backgroundColor: Theme.primary }}
              className="w-full py-2 rounded-lg text-white font-semibold"
            >
              Start Selling Today
            </button>
          </div>
        </div>
      )} */}

      {open && (
  <div className="md:hidden bg-white border-t shadow-lg" style={{ borderColor: Theme.primary }}>
    <ul className="flex flex-col py-3">
      <li
        onClick={() => {
          navigate("/");
          setOpen(false);
        }}
        className={`px-6 py-3 cursor-pointer transition ${
          isActive("/")
            ? "text-orange-500 bg-orange-50 font-semibold"
            : "text-gray-700 hover:bg-gray-50"
        }`}
      >
        Home
      </li>

      <li
        onClick={() => {
          navigate("/WhyMaarto");
          setOpen(false);
        }}
        className={`px-6 py-3 cursor-pointer transition ${
          isActive("/WhyMaarto")
            ? "text-orange-500 bg-orange-50 font-semibold"
            : "text-gray-700 hover:bg-gray-50"
        }`}
      >
        Why Maarto?
      </li>

      <li
        onClick={() => {
          navigate("/howItWorks");
          setOpen(false);
        }}
        className={`px-6 py-3 cursor-pointer transition ${
          isActive("/howItWorks")
            ? "text-orange-500 bg-orange-50 font-semibold"
            : "text-gray-700 hover:bg-gray-50"
        }`}
      >
        How It Works
      </li>

      <li
        onClick={() => {
          navigate("/Feature");
          setOpen(false);
        }}
        className={`px-6 py-3 cursor-pointer transition ${
          isActive("/Feature")
            ? "text-orange-500 bg-orange-50 font-semibold"
            : "text-gray-700 hover:bg-gray-50"
        }`}
      >
        Features
      </li>

      <li
        onClick={() => {
          navigate("/ContactUs");
          setOpen(false);
        }}
        className={`px-6 py-3 cursor-pointer transition ${
          isActive("/ContactUs")
            ? "text-orange-500 bg-orange-50 font-semibold"
            : "text-gray-700 hover:bg-gray-50"
        }`}
      >
        Contact Us
      </li>
    </ul>

    <div className="px-6 pb-6 pt-2 space-y-3 border-t" style={{ borderColor: Theme.primary }}>
      <button
        onClick={() =>
          window.open(
            "https://seller.maarto.com/seller/signin",
            "_blank"
          )
        }
        className="w-full py-3 rounded-lg border border-gray-300 font-medium"
      >
        Sign In
      </button>

      <button
        onClick={() =>
          window.open(
            "https://seller.maarto.com/seller/signin",
            "_blank"
          )
        }
        style={{ backgroundColor: Theme.primary }}
        className="w-full py-3 rounded-lg text-white font-semibold shadow-md"
      >
        Start Selling Today
      </button>
    </div>
  </div>
)}
    </header>
  );
};

export default Header;