import { motion } from "framer-motion";
import {
  FaBoxOpen,
  FaClipboardList,
  FaTruck,
  FaWallet,
  FaChartLine,
} from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";

const steps = [
  {
    icon: <FaBoxOpen />,
    title: "List",
    desc: "Your products",
  },
  {
    icon: <FaClipboardList />,
    title: "Manage",
    desc: "Smart inventory",
  },
  {
    icon: <FaTruck />,
    title: "Fulfill",
    desc: "On-time orders",
  },
  {
    icon: <FaWallet />,
    title: "Get Paid",
    desc: "Secure payments",
  },
  {
    icon: <FaChartLine />,
    title: "Grow",
    desc: "With confidence",
  },
];

const SupplierControl = () => {
  return (
    <section className="bg-white py-8 px-4 sm:px-6 lg:px-8 xl:px-10 lg:py-12 overflow-hiddenn">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">

            One Platform. Complete Supplier Control.

          </h2>

        </motion.div>

        {/* Steps */}

        <div className="mt-12">

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">

            {steps.map((step, index) => (

              <div
                key={index}
                className="relative flex flex-col items-center"
              >

                <motion.div
                  initial={{ opacity: 0, scale: .8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * .15,
                    duration: 0.5,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                  }}
                  className="w-16 h-16 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 text-2xl bg-white shadow-md"
                >

                  {step.icon}

                </motion.div>

                <h3 className="mt-4 font-semibold text-lg">

                  {step.title}

                </h3>

                <p className="text-sm text-gray-500 mt-1">

                  {step.desc}

                </p>

                {/* Arrow */}

                {index !== steps.length - 1 && (

                  <div className="hidden md:block absolute top-7 -right-10 text-orange-300 text-3xl">

                    <HiArrowLongRight />

                  </div>

                )}

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default SupplierControl;