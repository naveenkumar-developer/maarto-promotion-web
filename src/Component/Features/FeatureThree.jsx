import { motion } from "framer-motion";
import {
  FaWarehouse,
  FaSyncAlt,
  FaChartBar,
} from "react-icons/fa";
import img1 from "../../assets/images/Feature03.jpg";

const inventoryFeatures = [
  {
    icon: <FaWarehouse />,
    title: "Real-Time Stock Updates",
    description:
      "Monitor inventory levels instantly and avoid overselling with live stock synchronization.",
  },
  {
    icon: <FaSyncAlt />,
    title: "Automatic Inventory Sync",
    description:
      "Every order automatically updates your inventory, keeping product availability accurate.",
  },
  {
    icon: <FaChartBar />,
    title: "Inventory Insights",
    description:
      "View stock movement reports and identify your best-selling products with ease.",
  },
];

const InventoryManagement = () => {
  return (
    <section className="bg-[#F8F8F8] py-8 px-4 sm:px-6 lg:px-8 xl:px-10 lg:py-12 overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0 }}
            viewport={{ once: true }}
            className="flex justify-center order-2 lg:order-1"
          >
            <motion.img
              src={img1}
              alt="Inventory"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="rounded-2xl shadow-xl w-full max-w-lg"
            />
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >

            <span className="uppercase text-orange-500 font-semibold tracking-[2px] text-sm">
              Smart Inventory
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold mt-4 text-slate-900">
              2. Inventory Management
            </h2>

            <p className="text-gray-600 mt-5 leading-8">
              Keep your inventory organized with intelligent stock tracking,
              automatic updates, and detailed insights—all in one place.
            </p>

            <div className="mt-8 space-y-8">

              {inventoryFeatures.map((item, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >

                  <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-lg flex-shrink-0">

                    {item.icon}

                  </div>

                  <div>

                    <h3 className="font-semibold text-lg text-slate-900">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 mt-2 leading-7">
                      {item.description}
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default InventoryManagement;