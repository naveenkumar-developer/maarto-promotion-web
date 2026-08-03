import { motion } from "framer-motion";
import HeroBanner from "../assets/hero/heroBanner2.svg?react";
import Theme from "../assets/Theme/Theme";

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: Theme.primary }}
    >
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-10">

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            Turn Your Products <br />
            <span className="text-yellow-200">Into Profits</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-lg md:text-xl text-white/90 max-w-xl"
          >
            Join our vendor platform and showcase your products to a wider
            audience while we help you drive visibility and sales effortlessly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-8 flex gap-4 flex-wrap"
          >
            <button
             onClick={() => window.open("https://seller.maarto.com/seller/signin", "_blank")}
             className="px-7 py-3 rounded-lg bg-white text-black font-semibold shadow-lg hover:scale-105 transition">
              Become a Seller 
            </button>

            <button
             onClick={() => window.open("https://seller.maarto.com/seller/signin", "_blank")}
              className="px-7 py-3 rounded-lg font-semibold border border-white text-white hover:bg-white hover:text-black transition"
            >
              Explore Features
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 text-sm text-white/80"
          >
            ✓ Easy onboarding &nbsp; ✓ No setup fees &nbsp; ✓ Trusted by vendors
          </motion.p>
        </div>

        <div className="flex justify-center md:justify-end">
          <HeroBanner className="w-full max-w-2xl md:max-w-3xl" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;