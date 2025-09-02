import React, { useState } from "react";
import { db } from "../firebase/firebaseconfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Footersection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate Email
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validation
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email || !formData.message) {
      setError("All fields are required!");
      return;
    }
    if (!validateEmail(formData.email)) {
      setError("Invalid email address!");
      return;
    }
    if (formData.phone.length < 10) {
      setError("Phone number must be at least 10 digits!");
      return;
    }

    try {
      await addDoc(collection(db, "messages"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      setSuccess("Message sent successfully ✅");
      setFormData({ firstName: "", lastName: "", phone: "", email: "", message: "" });
    } catch (err) {
      setError("Failed to send message. Try again later.");
    }
  };

  return (
    <div className="bg-[#FCFCEB] min-h-[400px] flex flex-col lg:flex-row justify-center items-stretch gap-10 px-10 py-16 relative">
      
      {/* Background Image */}
      <img 
        src="/media/images/vector.svg" 
        alt="Background Vector"
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{ userSelect: 'none' }}
      />

      {/* Left Side */}
      <div className="bg-white p-6 sm:p-10 rounded shadow lg:w-[560px] relative z-20 flex flex-col justify-between">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center lg:text-left">
          Let Us Mend a Helping Hand
        </h2>
        <p className="mb-8 text-sm sm:text-base leading-relaxed text-center lg:text-left">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
        </p>

        <div className="flex flex-col gap-4 mb-8">
          {/* Phone */}
          <div className="flex items-center gap-4 bg-gray-200 p-4 sm:p-6 border border-gray-500 rounded">
            <div className="w-5 h-5 rounded-full bg-[#AA8863]"></div>
            <a href="tel:+10000000000" className="text-base sm:text-lg font-medium">
              +1 (000) 000-0000
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 bg-gray-200 p-4 border border-gray-500 rounded">
            <div className="w-5 h-5 rounded-full bg-[#AA8863]"></div>
            <a href="mailto:info@xyz.com" className="text-base sm:text-lg font-medium">
              info@xyz.com
            </a>
          </div>
        </div>

        <button className="bg-[#AA8863] text-white px-6 sm:px-10 py-3 font-semibold rounded hover:bg-[#8B724C] transition w-full max-w-xs mx-auto lg:mx-0">
          Apply Now
        </button>
      </div>

      {/* Right Side Form */}
      <form 
        onSubmit={handleSubmit} 
        className="flex flex-col gap-4 relative z-20 w-full max-w-lg"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-black">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="border border-black rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#AA8863]"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="border border-black rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#AA8863]"
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border border-black rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#AA8863]"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="border border-black rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#AA8863]"
          />
        </div>
        <textarea
          rows="5"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="border border-black rounded px-4 py-3 mt-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#AA8863]"
        />

        {error && <p className="text-red-600 font-medium">{error}</p>}
        {success && <p className="text-green-600 font-medium">{success}</p>}

        <button
          type="submit"
          className="bg-black text-white py-3 font-semibold mt-6 rounded hover:bg-gray-800 transition max-w-xs mx-auto lg:mx-0 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
