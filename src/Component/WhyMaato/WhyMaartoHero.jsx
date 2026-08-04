import { motion } from "framer-motion";
import {
  FaPercent,
  FaRupeeSign,
  FaWarehouse,
  FaWallet,
} from "react-icons/fa";

// import heroImage from "../assets/hero.png";
import WhyHeroImage from "../../assets/images/WhyHeroImage.jpeg"
const stats = [
  {
    icon: <FaPercent />,
    title: "0% Commission",
    desc: "Keep more of every sale.",
  },
  {
    icon: <FaRupeeSign />,
    title: "₹0 Ad Spend",
    desc: "We handle the promotion.",
  },
  {
    icon: <FaWallet />,
    title: "Fast Payouts",
    desc: "Timely & Transparent.",
  },
  {
    icon: <FaWarehouse />,
    title: "Free Storage Support",
    desc: "Storage help at no cost.",
  },
];

export default function WhyMaartoHero() {
  return (
<section className="bg-[#F7F5F3] py-8 px-4 sm:px-6 lg:px-8 xl:px-10 lg:py-12 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-widest font-semibold text-orange-500 text-sm">
              Built For Suppliers
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mt-5">
              Why Suppliers
              <br />

              Choose{" "}

              <span className="text-orange-500">
                Maarto
              </span>
            </h1>

            <p className="mt-8 text-gray-600 text-lg leading-8 max-w-xl">
              Grow your business without the pressure of advertising,
              customer acquisition, or managing an online store.
            </p>

            {/* <div className="flex flex-wrap gap-5 mt-10">

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: .95,
                }}
                className="bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg"
              >
                Start Selling
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: .95,
                }}
                className="border-2 border-orange-500 px-8 py-4 rounded-xl font-semibold text-orange-500 hover:bg-orange-500 hover:text-white transition"
              >
                Explore Benefits
              </motion.button>

            </div> */}

          </motion.div>

          {/* RIGHT */}

<motion.div
  initial={{ opacity: 0, x: 70 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  animate={{
    y: [0, -10, 0],
  }}
>
  <img
    src={WhyHeroImage}
    alt="Why Choose Maarto"
    className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl object-cover"
    style={{
      animation: "float 4s ease-in-out infinite",
    }}
  />
</motion.div>

        </div>

        {/* STATS */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-3xl shadow-xl grid md:grid-cols-2 lg:grid-cols-4 overflow-hidden"
        >

          {stats.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#fff7ed",
              }}
              className="p-8 transition"
            >

              <div className="flex gap-4 items-start">

                <div className="h-14 w-14 rounded-full bg-orange-100 flex justify-center items-center text-orange-500 text-xl">

                  {item.icon}

                </div>

                <div>

                  <h3 className="font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 mt-2 text-sm">
                    {item.desc}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}