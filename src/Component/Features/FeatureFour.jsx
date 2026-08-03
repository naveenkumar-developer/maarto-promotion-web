import { motion } from "framer-motion";
import {
  FaReceipt,
  FaHandshake,
  FaBoxOpen,
  FaTruck,
  FaBell,
  FaMapMarkerAlt,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaReceipt />,
    title: "New Order",
    desc: "Order received from buyer.",
  },
  {
    icon: <FaHandshake />,
    title: "Accepted",
    desc: "Review and accept order.",
  },
  {
    icon: <FaBoxOpen />,
    title: "Packed",
    desc: "Pack and generate invoice.",
  },
  {
    icon: <FaTruck />,
    title: "Dispatched",
    desc: "Ship and update tracking.",
  },
];

const cards = [
  {
    icon: <FaBell />,
    title: "Order Notifications",
    desc: "Instant updates for easy activity across your sales channel.",
  },
  {
    icon: <FaHandshake />,
    title: "Accept or Reject",
    desc: "Maintain control by reviewing every order before commitment.",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Dispatch Tracking",
    desc: "Track shipments until they safely reach your customer's door.",
  },
];

export default function OrderTimeline() {
  return (
    <section className=" bg-white py-8 px-4 sm:px-6 lg:px-8 xl:px-10 lg:py-12 overflow-hidden">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <motion.div
          initial={{ opacity:0,y:40 }}
          whileInView={{ opacity:1,y:0 }}
          transition={{ duration:0 }}
          viewport={{ once:true }}
          className="text-center"
        >

          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">

            3. Orders Made Simple

          </h2>

          <p className="mt-5 text-gray-500 max-w-3xl mx-auto leading-8">

            View order details, prepare products, generate invoices,
            and follow every order until dispatch with zero friction.

          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative mt-10">

          {/* Line */}

          <div className="hidden md:block absolute left-[12%] right-[12%] top-10 border-t-2 border-dashed border-orange-200"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 relative">

            {steps.map((step,index)=>(

              <motion.div
                key={index}
                initial={{ opacity:0,y:30 }}
                whileInView={{ opacity:1,y:0 }}
                transition={{
                  delay:index*.15,
                  duration:0.5
                }}
                viewport={{ once:true }}
                className="text-center"
              >

                <motion.div

                  whileHover={{
                    y:-8,
                    scale:1.05,
                  }}

                  className="mx-auto w-16 h-16 lg:w-18 lg:h-18 rounded-xl bg-white shadow-lg flex items-center justify-center text-2xl text-orange-600 border"

                >

                  {step.icon}

                </motion.div>

                <h3 className="font-semibold mt-4 text-lg">

                  {step.title}

                </h3>

                <p className="text-gray-500 mt-1 text-sm">

                  {step.desc}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-5 mt-10">
                      {cards.map((card, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                transition: { duration: 0 },
              }}
              className="bg-[#F8F8F8] rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-lg transition-all"
            >

              {/* Icon */}

              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 text-lg">

                {card.icon}

              </div>

              {/* Title */}

              <h3 className="text-lg font-semibold text-slate-900 mt-5">

                {card.title}

              </h3>

              {/* Description */}

              <p className="text-gray-500 text-sm leading-6 mt-3">

                {card.desc}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}