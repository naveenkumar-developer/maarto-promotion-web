import { motion } from "framer-motion";
import {
  FaBoxOpen,
  FaShoppingBag,
  FaChartLine,
} from "react-icons/fa";


const steps = [
  {
    number: "01",
    icon: <FaBoxOpen />,
    title: "You Supply",
    description:
      "Upload your products and maintain stock. We take care of everything after that.",
  },
  {
    number: "02",
    icon: <FaShoppingBag />,
    title: "We Sell",
    description:
      "Maarto promotes your products, handles customers, and processes every order.",
  },
  {
    number: "03",
    icon: <FaChartLine />,
    title: "You Grow",
    description:
      "Receive transparent payouts while your business grows with zero marketing effort.",
  },
];

export default function SupplyProcess() {
  return (
    <section className="bg-white py-8 px-4 sm:px-6 lg:px-8 xl:px-10 lg:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-orange-500 uppercase tracking-widest font-semibold">
            How It Works
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-slate-900">
            You Supply. We Sell.
            <span className="text-orange-500"> You Grow.</span>
          </h2>

          <p className="text-gray-500 mt-6 max-w-3xl mx-auto leading-8">
            Partnering with Maarto is simple. Focus on your products while we
            handle marketing, customers, and order management.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Desktop Line */}

          <div className="hidden lg:block absolute top-10 left-0 right-0 h-1 bg-orange-100"></div>

          {/* Cards */}

          <div className="grid lg:grid-cols-3 gap-10 relative">

            {steps.map((step, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0,
                  delay: index * .2,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                }}
                className="relative bg-[#FFF9F4] rounded-3xl p-8 shadow-md hover:shadow-2xl transition"
              >

                {/* Number Circle */}

                <div className="absolute -top-8 left-1/2 -translate-x-1/2">

                  <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg shadow-lg border-4 border-white">

                    {step.number}

                  </div>

                </div>

                {/* Icon */}

                <motion.div
                  whileHover={{
                    
                    scale: 1.05,
                  }}
                  transition={{ duration: 0 }}
                  className="mt-12 w-20 h-20 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center text-3xl mx-auto"
                >
                  {step.icon}
                </motion.div>

                {/* Title */}

                <h3 className="text-2xl font-bold text-center mt-8">
                  {step.title}
                </h3>

                {/* Description */}

                <p className="text-center text-gray-600 mt-5 leading-7">
                  {step.description}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}