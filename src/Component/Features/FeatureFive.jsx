import { motion } from "framer-motion";
import {
  FaBullhorn,
  FaHeadset,
  FaGift,
} from "react-icons/fa";

const tools = [
  {
    icon: <FaBullhorn />,
    title: "Seller Notifications",
    description:
      "Stay updated with important platform announcements and marketplace changes.",
  },
  {
    icon: <FaHeadset />,
    title: "Dedicated Support",
    description:
      "Get expert help whenever you need it via chat, email, or priority phone support.",
  },
  {
    icon: <FaGift />,
    title: "Referral Rewards",
    description:
      "Invite more suppliers and earn exciting rewards for growing the Maarto community.",
  },
];

const BusinessTools = () => {
  return (
    <section className="bg-[#F7F5F3] py-8 px-4 sm:px-6 lg:px-8 xl:px-10 lg:py-12 overflow-hidden">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
            4. Tools That Help Your Business Grow
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto leading-7">
            Accelerate your marketplace journey with smart
            analytics and dedicated support tools.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-5 mt-10">

          {tools.map((tool, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * .15,
                duration: 0,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
            >

              <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 text-xl">

                {tool.icon}

              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">

                {tool.title}

              </h3>

              <p className="mt-3 text-gray-500 leading-7 text-sm">

                {tool.description}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default BusinessTools;