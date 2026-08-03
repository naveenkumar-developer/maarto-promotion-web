import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import img1 from "../../assets/images/Feature01.jpg";

const FeatureHero = () => {
  return (
    <section className="bg-[#F7F5F3] py-8 px-4 sm:px-6 lg:px-8 xl:px-10 lg:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[2px] text-orange-500 font-semibold text-xs mb-3">
              Everything You Need To Grow
            </p>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-[#1F2937]">

              Powerful Features for

              <br />

              <span className="text-orange-500">
                Smarter Selling
              </span>

            </h1>

            <p className="mt-6 text-gray-600 leading-8 max-w-lg">

              Manage products, track orders, monitor earnings,
              and grow your supplier business—all from one
              simple, high-performance platform designed
              for modern sellers.

            </p>
{/* 
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: .95,
              }}
              className="mt-8 bg-orange-500 hover:bg-orange-600 transition text-white px-7 py-3 rounded-lg flex items-center gap-3 font-medium shadow-lg"
            >

              Explore Features

              <FaArrowRight />

            </motion.button> */}

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >

            <motion.img
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              
              src={img1}
              alt="Dashboard"
              className="rounded-2xl shadow-xl w-full max-w-md object-cover"
              
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default FeatureHero;