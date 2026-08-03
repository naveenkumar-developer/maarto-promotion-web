import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaBoxOpen,
  FaTags,
} from "react-icons/fa";
import img1 from "../../assets/images/Feature02.jpg";

const features = [
  {
    icon: <FaCheckCircle />,
    title: "Quick Product Listing",
    description:
      "Add product details, pricing, images and specifications in just a few simple steps.",
  },
  {
    icon: <FaTags />,
    title: "Category-Based Listings",
    description:
      "Organize your products into the right categories for better visibility and customer discovery.",
  },
  {
    icon: <FaBoxOpen />,
    title: "Product Approval Tracking",
    description:
      "Track whether each listing is pending, approved or requires changes in real time.",
  },
];

const ProductManagement = () => {
  return (
    <section className="bg-white py-8 px-4 sm:px-6 lg:px-8 xl:px-10 lg:py-12 overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0 }}
            viewport={{ once: true }}
          >

            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">

              1. Manage Your Products
              <br />
              with Ease

            </h2>

            <div className="mt-8 space-y-8">

              {features.map((item, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * .15,
                  }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >

                  <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center flex-shrink-0">

                    {item.icon}

                  </div>

                  <div>

                    <h3 className="font-semibold text-lg">

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

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
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
              }}
              src={img1}
              alt="Product Management"
              className="rounded-2xl shadow-xl w-full max-w-lg"
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default ProductManagement;