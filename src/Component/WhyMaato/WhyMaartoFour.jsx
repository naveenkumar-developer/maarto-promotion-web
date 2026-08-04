import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import img1 from "../../assets/images/WhyCard01.jpeg";
import img2 from "../../assets/images/WhyCard02.jpeg";
import img3 from "../../assets/images/WhyCard03.jpeg";


const suppliers = [
  {
    image: img1,
    title: "Upload Products",
    desc: "List your products in minutes.",
  },
  {
    image: img2,
    title: "We Manage Orders",
    desc: "We handle orders and customers.",
  },
  {
    image: img3,
    title: "Receive Payments",
    desc: "Get transparent payouts on time.",
  },
];

export default function SupplyProcessBottom() {
  return (
    <section className="bg-[#F8F8F8] py-8 px-4 sm:px-6 lg:px-8 xl:px-10 lg:py-12 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <span className="uppercase tracking-widest text-orange-500 font-semibold">
            Simple Process
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-slate-900">
            From Supplier To
            <span className="text-orange-500">
              {" "}Successful Seller
            </span>
          </h2>

          <p className="text-gray-500 mt-6 max-w-3xl mx-auto leading-8">
            Join Maarto in three simple steps and let us handle the hard work
            while you focus on supplying quality products.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-10 relative">

          {/* Timeline Line */}

          <div className="hidden lg:block absolute top-44 left-[18%] right-[18%] h-1 bg-orange-200 rounded-full"></div>

          {suppliers.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .7,
                delay: index * .15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
              }}
              className="relative"
            >

              {/* Image */}

              <div className="relative overflow-hidden rounded-3xl shadow-xl group">

                <motion.img
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: .5,
                  }}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[280px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent"></div>

              </div>

              {/* Number */}

              <div className="absolute top-[250px] left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg border-4 border-white shadow-lg">

                0{index + 1}

              </div>

              {/* Content */}

              <div className="bg-white rounded-3xl shadow-lg pt-12 pb-8 px-7 -mt-5">

                <h3 className="text-2xl font-bold text-center text-slate-900">

                  {item.title}

                </h3>

                <p className="text-center text-gray-500 mt-5 leading-7">

                  {item.desc}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

        {/* CTA Starts Below */}

 

      </div>

    </section>
  );
}