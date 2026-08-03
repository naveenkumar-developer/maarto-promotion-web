import Theme from "../assets/Theme/Theme"
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";
import { useState } from "react";
import API_CONFIG from "../helper/Api_config";
import axios from "axios";


const ContactForm = () => {
const [errors, setErrors] = useState({});
const [showSuccess, setShowSuccess] = useState(false);

const [form, setForm]= useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
const handleSubmit = async (e) => {
  e.preventDefault();

console.log("Form Data:", form); // Log the form data to the console

  // const name = e.target.name.value.trim();
  // const email = e.target.email.value.trim();
  // const phone = e.target.phone.value.trim().replace(/\D/g, ""); // Remove non-digit characters
  // const message = e.target.message.value.trim();

  let newErrors = {};

  // Name
  if (!form.name) {
    newErrors.name = "Please enter your full name.";
  }

  // Email
  if (!form.email) {
    newErrors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    newErrors.email = "Please enter a valid email address.";
  }

  // Phone
  if (!form.phone) {
    newErrors.phone = "Please enter your phone number.";
  } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
    newErrors.phone = "Please enter a valid 10-digit mobile number.";
  }

  // Message
  if (!form.message) {
    newErrors.message = "Please enter your message.";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) return;
console.log("Adjbsiu");
  setShowSuccess(true);
e.target.reset();
setErrors({});

  e.target.reset();
  setErrors({});

  // Api call to send the form data to the backend
try {
  const response = await axios.post(
    API_CONFIG.ENQUIRY_SEND,
    {
      full_name: form.name,
      email: form.email,
      phone: form.phone,
      message: form.message,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.data.success) {
    setShowSuccess(true);
    e.target.reset();
    setErrors({});
  }

} catch (error) {
  console.error(error);
}finally {
  setForm({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
}
};



  return (
    <section className="bg-gray-100 md:py-10">
      <div className="w-full max-w-280 mx-auto px-4 md:px-8 py-8 md:py-5">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 items-start">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-bold text-gray-900">
              Get In Touch
            </h2>

            <div className="w-16 h-1 bg-orange-500 mt-3 mb-10 rounded"></div>

            <div className="space-y-8">

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center">
                  <Phone className="text-white" size={20}/>
                </div>

                <div>
                  <h3 className="font-bold text-sm">Phone</h3>
                  <p className="text-xs">9042473737</p>
                  <span className="text-gray-500 text-xs">
                    Weekly available
                  </span>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center">
                  <Mail className="text-white" size={20}/>
                </div>

                <div>
                  <h3 className="font-bold text-sm">Email</h3>
                  <p className="text-xs">support@company.com</p>
                  <span className="text-gray-500 text-xs">
                    We reply within 24 hours
                  </span>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center">
                  <MapPin className="text-white" size={20}/>
                </div>

                <div>
                  <h3 className="font-bold text-sm">Address</h3>
                  <p className="text-xs">
                    292-1/D,<br />
                    Coimbatore, Tamil Nadu
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center">
                  <Clock className="text-white" size={20}/>
                </div>

                <div>
                  <h3 className="font-bold text-sm">
                    Working Hours
                  </h3>

                  <p className="text-xs">Mon - Sat : 8AM - 8PM</p>
                  <span className="text-gray-500 text-xs">
                    Sunday : Closed
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-5"
          >
            <h2 className="text-xl font-bold">
              Send Us A Message
            </h2>

            <p className="text-gray-500 mt-2 mb-8 text-sm">
              Fill out the form below and we'll get back to you
              as soon as possible.
            </p>

<form onSubmit={handleSubmit} className="space-y-2">

  <div className="grid md:grid-cols-2 gap-3">

    {/* Name */}
    <div>
      <label className="font-medium text-sm">
        Full Name
      </label>

      <input
        id="name"
        name="name"
        type="text"
        placeholder="John Doe"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="text-xs w-full mt-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-0"
        
        style={{
          borderColor: errors.name
            ? "#ef4444"
            : Theme.inputBorderColor,
        }}
      />

      {errors.name && (
        <p className="text-red-500 text-xs mt-1">
          {errors.name}
        </p>
      )}
    </div>

    {/* Email */}
    <div>
      <label className="font-medium text-sm">
        Email
      </label>

      <input
        id="email"
        name="email"
        type="email"
        onChange={(e) => setForm({ ...form, email: e.target.value.replace(/\s/g, "") })}
        placeholder="example@mail.com"
        className="text-xs w-full mt-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-0"
        style={{
          borderColor: errors.email
            ? "#ef4444"
            : Theme.inputBorderColor,
        }}
      />

      {errors.email && (
        <p className="text-red-500 text-xs mt-1">
          {errors.email}
        </p>
      )}
    </div>

  </div>

  {/* Phone */}
  <div>
    <label className="font-medium text-sm">
      Phone
    </label>

    <input
      id="phone"
      name="phone"
      maxLength={10}
      type="text"
      onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "") })}
      placeholder="+91 9876543210"
      className="text-xs w-full mt-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-0"
      style={{
        borderColor: errors.phone
          ? "#ef4444"
          : Theme.inputBorderColor,
      }}
    />

    {errors.phone && (
      <p className="text-red-500 text-xs mt-1">
        {errors.phone}
      </p>
    )}
  </div>

  {/* Message */}
  <div>
    <label className="font-medium text-sm">
      Your Message
    </label>

    <textarea
      id="message"
      name="message"
      rows={6}
      onChange={(e) => setForm({ ...form, message: e.target.value })}
      placeholder="How can we help you?"
      className="text-xs w-full mt-1 border rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-0"
      style={{
        borderColor: errors.message
          ? "#ef4444"
          : Theme.inputBorderColor,
      }}
    />

    {errors.message && (
      <p className="text-red-500 text-xs mt-1">
        {errors.message}
      </p>
    )}
  </div>

  <button
    type="submit"
    className="text-sm w-full bg-orange-500 transition text-white py-4 rounded-lg flex items-center justify-center gap-2 font-semibold"
  >
    Send Message
    <Send size={18} />
  </button>

</form>
{/* Success Message */}
{showSuccess && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl shadow-xl p-8 w-[90%] max-w-md text-center">

      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <svg
          className="w-8 h-8 text-green-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h2 className="text-2xl font-bold mt-5">
        Message Sent!
      </h2>

      <p className="text-gray-600 mt-3">
        Thank you for contacting us.
        <br />
        We will get back to you shortly.
      </p>

      <button
        onClick={() => setShowSuccess(false)}
        className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition"
      >
        OK
      </button>

    </div>
  </div>
)}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;