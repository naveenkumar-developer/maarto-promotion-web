import { motion } from "framer-motion";
import HeroBanner from "../assets/hero/heroBanner2.svg?react";
import Theme from "../assets/Theme/Theme";

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden min-h-[20vh] flex items-center justify-center"
      style={{ background: Theme.primary }}
    >
      <div className="flex px-6 py-20 items-center gap-10">

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-5xl font-bold text-white leading-tight"
          >
            Contact Us <br />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-2 text-lg md:text-sm text-white/90"
          >
            Get questions? Need help? Just send us a message- we're always happy to assist you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-8 flex gap-4 flex-wrap"
          >
            {/* <button
             onClick={() => window.open("https://seller.maarto.com/seller/signin", "_blank")}
             className="px-7 py-3 rounded-lg bg-white text-black font-semibold shadow-lg hover:scale-105 transition">
              Become a Seller 
            </button> */}

            {/* <button
             onClick={() => window.open("https://seller.maarto.com/seller/signin", "_blank")}
              className="px-7 py-3 rounded-lg font-semibold border border-white text-white hover:bg-white hover:text-black transition"
            >
              Explore Features
            </button> */}
          </motion.div>

          {/* <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 text-sm text-white/80"
          >
            ✓ Easy onboarding &nbsp; ✓ No setup fees &nbsp; ✓ Trusted by vendors
          </motion.p> */}
        </div>

        <div className="flex justify-center md:justify-end">
          {/* <HeroBanner className="w-full max-w-2xl md:max-w-3xl" /> */}
        </div>
      </div>
    </section>
    
  );
};

export default HeroSection;
