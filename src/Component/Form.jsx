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
import {toast} from "react-toastify";

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

e.target.reset();
setErrors({});

  e.target.reset();
  setErrors({});


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
  if (response.data.status) {
    setShowSuccess(true);
    e.target.reset();
    setErrors({});
  }
} catch (error) {
  toast.error( error?.response?.data?.message || "Failed to send message. Please try again later.")
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
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-8 items-stretch">
          {/* Left Side */}
<motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="flex flex-col h-full"
>
            <h2 className="text-xl font-bold text-gray-900">
              Get In Touch
            </h2>

            <div className="w-16 h-1 bg-orange-500 mt-3 mb-10 rounded"></div>

<div className="space-y-5 flex-1">
  {/* Phone */}
<div className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition min-h-[120px]">    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500">
      <Phone className="text-white" size={20} />
    </div>

    <div>
      <h3 className="font-semibold text-gray-900">Phone</h3>

      <a
        href="tel:8309620291"
        className="text-orange-500 font-medium hover:underline"
      >
        +91 83096 20291
      </a>

      <p className="text-sm text-gray-500 mt-1">
        Monday - Saturday 
      </p>
    </div>
  </div>

  {/* Email */}
<div className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition min-h-[120px]">    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500">
      <Mail className="text-white" size={20} />
    </div>

    <div>
      <h3 className="font-semibold text-gray-900">Email</h3>

      <a
        href="mailto:maarto.com@gmail.com"
        className="text-orange-500 font-medium hover:underline break-all"
      >
        contact@maarto.com
      </a>

      <p className="text-sm text-gray-500 mt-1">
        We usually respond within 24 hours.
      </p>
    </div>
  </div>

  {/* Address */}
<div className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition min-h-[120px]">    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500">
      <MapPin className="text-white" size={20} />
    </div>

    <div>
      <h3 className="font-semibold text-gray-900">Office Address</h3>

<p className="text-gray-600 leading-7 text-sm mt-1">
  Plot No. 145, 2nd Floor,<br />
  Phase - 3, Banjara Hills,<br />
  Road No. 2,<br />
  Hyderabad - 500034,<br />
  Telangana, India
</p>
    </div>
  </div>
</div>
          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col"
          >
            <h2 className="text-xl font-bold">
              Send Us A Message
            </h2>

            <p className="text-gray-500 mt-2 mb-8 text-sm">
              Fill out the form below and we'll get back to you
              as soon as possible.
            </p>

<form onSubmit={handleSubmit}  className="space-y-5 flex-1 flex flex-col">

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
<div className="pt-2 mt-auto">
  <button
    type="submit"
    className="text-sm w-full bg-orange-500 transition text-white py-4 rounded-lg flex items-center justify-center gap-2 font-semibold"
  >
    Send Message
    <Send size={18} />
  </button>
</div>
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