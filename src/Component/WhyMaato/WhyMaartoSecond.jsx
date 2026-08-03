import { motion } from "framer-motion";
import {
  FaPercentage,
  FaBullhorn,
  FaComments,
  FaWallet,
  FaWarehouse,
  FaShieldAlt,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaPercentage />,
    title: "Zero Commission",
    desc: "Keep more of what you earn with no commission charged on every sale.",
  },
  {
    icon: <FaBullhorn />,
    title: "Marketing Handled by Maarto",
    desc: "We promote your products and help them reach the right customers.",
  },
  {
    icon: <FaComments />,
    title: "No Direct Customer Handling",
    desc: "Focus on supplying quality products while we manage customer interactions.",
  },
  {
    icon: <FaWallet />,
    title: "Fast & Transparent Payouts",
    desc: "Track your earnings clearly and receive reliable payments without confusion.",
  },
  {
    icon: <FaWarehouse />,
    title: "Free Storage Support",
    desc: "Get storage assistance even when you don't have your own warehouse.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Stable Seller Account",
    desc: "Build confidently with a secure and consistent vendor partnership.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-[#F7F5F3] py-8 px-4 sm:px-6 lg:px-8 xl:px-10 lg:py-12 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-slate-900 mb-16"
        >
          More Support. More Reach. More Profit.
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {benefits.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0,
                delay: index * .08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-2xl transition-all duration-300 group"
            >

              {/* Icon */}

              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  duration: 0,
                }}
                className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center text-2xl mb-8 mx-auto"
              >
                {item.icon}
              </motion.div>

              {/* Title */}

              <h3 className="text-xl font-semibold text-center text-slate-900 mb-4">
                {item.title}
              </h3>

              {/* Description */}

              <p className="text-gray-500 leading-7 text-center">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}