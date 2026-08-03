import { useState } from "react";
import { motion } from "framer-motion";
import Theme from "../assets/Theme/Theme";

import Testimonial4 from "../assets/Testimonials/testimonial4.jpg";
import Profile from "../assets/global/profile.svg?react"

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      profile: Testimonial4,
      name: "Naveenkumar",
      role: "Vendor Partner",
      review:
        "Working with this platform helped us scale our product distribution without worrying about customer management. Payments are smooth and reliable.",
      ratings: 5,
    },
    {
      id: 2,
      profile: Testimonial4,
      name: "Arun Kumar",
      role: "Wholesale Supplier",
      review:
        "We only focus on supplying products while the platform handles marketing and sales. This partnership increased our revenue significantly.",
      ratings: 5,
    },
    {
      id: 3,
      profile: Testimonial4,
      name: "Priya S",
      role: "Product Vendor",
      review:
        "A very transparent system with clear profits and excellent support. Perfect for vendors who want growth without complexity.",
      ratings: 5,
    },
{
  id: 4,
  profile: Testimonial4,
  name: "Surya L",
  role: "Retail Vendor",
  review:
    "This platform made it easy for us to reach new customers without investing heavily in marketing. The onboarding process was simple and support is always available.",
  ratings: 5,
},
{
  id: 5,
  profile: Testimonial4,
  name: "Prakash M",
  role: "Distributor",
  review:
    "We’ve seen consistent growth since joining. Order management is seamless and payments are always on time. It’s a reliable system for scaling business.",
  ratings: 5,
},
{
  id: 6,
  profile: Testimonial4,
  name: "Arun K",
  role: "Supplier",
  review:
    "What I like most is the transparency. Everything from orders to earnings is clearly tracked. It saves time and lets us focus on product quality.",
  ratings: 5,
}
  ];

  const [selected, setSelected] = useState(testimonialData[0]);

  return (
    <section
      className="py-16 px-6"
      style={{ background: Theme.mainAreaBgColor }}
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h1
          className="text-4xl font-bold"
        >
          Honest feedback from valued partners
        </h1>

        <p
          className="mt-3 max-w-2xl mx-auto"
          style={{ color: Theme.grayTitle }}
        >
          Real feedback from businesses who trusted our platform to grow
          without handling customers or marketing.
        </p>
      </div>

      {/* Layout */}
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        
        {/* LEFT SIDE — Vertical Images */}
        <div className="h-[400px] overflow-y-auto no-scrollbar  space-y-4 pr-2">
          {testimonialData.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelected(item)}
              className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition`}
              style={{
                background:
                  selected.id === item.id
                    ? Theme.referalBoxBackgroundColor
                    : "#fff",
                border:
                  selected.id === item.id
                    ? `2px solid ${Theme.primary}`
                    : "1px solid #eee",
              }}
            >
              {/* <img
                src={item.profile}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover"
              /> */}
              <Profile className="w-14 h-14 "/>

              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p
                  className="text-sm"
                  style={{ color: Theme.grayTitle }}
                >
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT SIDE — Review */}
        <motion.div
          key={selected.id}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <div className="flex items-center gap-4 mb-6">
            {/* <img
              src={selected.profile}
              alt={selected.name}
              className="w-16 h-16 rounded-full object-cover"
            /> */}

<Profile className="w-16 h-16" />
            <div>
              <h3
                className="text-xl font-bold"
                style={{ color: Theme.asideLabelActiveColor }}
              >
                {selected.name}
              </h3>
              <p style={{ color: Theme.grayTitle }}>
                {selected.role}
              </p>
            </div>
          </div>

          <p
            className="leading-relaxed text-lg"
            style={{ color: Theme.topSellingListLabelColor }}
          >
            “{selected.review}”
          </p>

          {/* Ratings */}
          <div className="mt-6 flex gap-1">
            {[...Array(selected.ratings)].map((_, i) => (
              <span
                key={i}
                style={{ color: Theme.primary }}
                className="text-xl"
              >
                ★
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;