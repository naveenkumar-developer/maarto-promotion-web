import { motion } from "framer-motion";
import Theme from "../assets/Theme/Theme";

const steps = [
  {
    title: "No Direct Selling Required",
    desc: "You supply products to us. We handle marketing, customers, and order management.",
  },
  {
    title: "We Promote Your Products",
    desc: "Our platform actively promotes your products to reach more buyers.",
  },
  {
    title: "Earn Without Marketing Effort",
    desc: "No ads, no customer handling — just supply and earn profits.",
  },
  {
    title: "Guaranteed Business Growth",
    desc: "Expand your business reach without building your own online store.",
  },
  {
    title: "Hassle-Free Process",
    desc: "Simple onboarding and smooth product supply system.",
  },
  {
    title: "Reliable Profit Sharing",
    desc: "Earn consistent returns from every successful sale.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Sell to Us. We Sell to Customers.
        </h2>

        <p className="mt-3 md:mt-4 text-gray-600 text-base md:text-lg">
          You focus on supplying quality products — we take care of promotion,
          customers, and sales.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative mt-12 md:mt-20 max-w-6xl mx-auto px-4 md:px-6">

        {/* Line */}
        <div
          className="absolute left-4 md:left-1/2 top-0 h-full w-1 md:-translate-x-1/2"
          style={{ background: Theme.primary }}
        />

        <div className="space-y-12 md:space-y-16">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              
              {/* Circle */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                  style={{ background: Theme.primary }}
                >
                  {index + 1}
                </motion.div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 pl-12 md:pl-6 pr-2 md:pr-6">
                <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                  <h4
                    className="text-lg md:text-xl font-semibold"
                    style={{ color: Theme.primary }}
                  >
                    {item.title}
                  </h4>

                  <p className="text-gray-600 mt-2 text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Empty space for desktop alignment */}
              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;