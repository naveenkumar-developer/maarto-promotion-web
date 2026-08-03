import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";


const FeatureCTA = () => {
  return (
    <section className="bg-white py-8 px-4 sm:px-6 lg:px-8 xl:px-10 lg:py-12 overflow-hidden">

      <div className="max-w-7xl mx-auto px-5">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-[#ff6a00] rounded-[28px] overflow-hidden"
        >

          <div className="px-6 py-10 lg:px-16 lg:py-12 text-center">

            {/* Heading */}

           <motion.h2
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.2 }}
  viewport={{ once: true }}
  className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-bold text-white leading-tight"
>
  Ready to Simplify Your Selling Journey?
</motion.h2>
            {/* Description */}

                <motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.35 }}
  viewport={{ once: true }}
  className="mt-5 text-white/90 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-7"
>
  Join Maarto today and manage your supplier business with
  confidence using our comprehensive suite of tools.
</motion.p>

            {/* Button */}

            <motion.button

  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.96 }}
  className="mt-8 bg-white text-orange-500 font-semibold rounded-full px-8 py-3 text-sm md:text-base inline-flex items-center gap-3 shadow-xl"
>
  Create Supplier Account
  <FaArrowRight />
</motion.button>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default FeatureCTA;