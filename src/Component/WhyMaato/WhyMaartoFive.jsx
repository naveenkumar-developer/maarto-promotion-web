import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "How do I become a supplier on Maarto?",
    answer:
      "Simply register as a supplier, upload your products, and our team will verify your account. Once approved, your products will be available for customers.",
  },
  {
    question: "Does Maarto charge any commission?",
    answer:
      "No. Maarto follows a zero commission model, allowing you to keep more of your earnings.",
  },
  {
    question: "Who handles customer support?",
    answer:
      "Maarto manages customer queries, order tracking, returns, and overall support, so you can focus on your products.",
  },
//   {
//     question: "How will I receive my payments?",
//     answer:
//       "Payments are transferred directly to your registered bank account according to the payout schedule.",
//   },
  {
    question: "Can I update my products anytime?",
    answer:
      "Yes. You can add and edit products whenever you want from your supplier dashboard.",
  },
  {
    question: "Is there any advertising cost?",
    answer:
      "No. Maarto promotes your products through its own marketing channels at no additional cost.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className=" bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 xl:px-10 lg:py-12 overflow-hidden">

      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
  Frequently Asked Questions
</h2>

          <p className="mt-5 text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-7">
  Find answers to the most common questions about becoming a supplier and
  growing your business with Maarto.
</p>
        </motion.div>

        {/* <div className="grid lg:grid-cols-2 gap-16 items-start "> */}
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">

          <div className="space-y-5">

            {faqData.map((faq, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .5,
                  delay: index * .08,
                }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300"
              >

                {/* Question */}

                <button
                  onClick={() =>
                    setOpen(open === index ? null : index)
                  }
                  className="w-full flex justify-between items-center px-4 sm:px-6 py-4 sm:py-5 bg-white"
                >

                  <h3 className="font-semibold text-left text-sm sm:text-base text-slate-900 pr-4">
                    {faq.question}
                  </h3>

                  <span className="text-orange-500">

                    {open === index ? (
                      <FaMinus />
                    ) : (
                      <FaPlus />
                    )}

                  </span>

                </button>

                <AnimatePresence>

                  {open === index && (

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: .35 }}
                      className="overflow-hidden"
                    >

                      <div className="px-4 sm:px-6 pb-5 text-sm sm:text-base text-gray-600 leading-7">

                        {faq.answer}

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>

            ))}

          </div>

        </div>

  

      </div>

    </section>
  );
}