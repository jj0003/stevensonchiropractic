"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div>
      <motion.div
        className="relative mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        }}
      >
        {/* Header Image */}
        <img
          src="/images/Spine - Contact Hero.jpg"
          alt="Contact Us"
          className="w-full h-auto rounded-lg object-cover max-h-[500px]"
        />

        <h1 className="font-extrabold lg:text-7xl md:text-6xl text-4xl satoshi-bold uppercase text-center mt-8">
          Get in Touch with Our Clinic
        </h1>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="mt-16 max-w-3xl mx-auto px-6 lg:px-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Contact Form</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium">
              Message
            </label>
            <textarea
              id="message"
              className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
              rows={4}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>

      {/* Clinic Contact Details */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        }}
      >
        <h2 className="text-2xl font-semibold mb-4">Clinic Information</h2>
        <p className="text-lg">Dr. Fred Stevenson, BSc. D.C.</p>
        <p className="text-lg">Newcastle Chiropractic Center</p>
        <p className="text-lg">123 Main Street, Newcastle, NSW</p>
        <p className="text-lg">Phone: (123) 456-7890</p>
        <p className="text-lg">Email: info@newcastlechiropractic.com</p>
      </motion.div>

      {/* Map */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Location</h2>
        <div className="w-full h-80 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509419!2d144.95373531531593!3d-37.81627927975152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f6e1bb%3A0x5045675218ce7e0!2sNewcastle!5e0!3m2!1sen!2sau!4v1629341234567!5m2!1sen!2sau"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
            title="Newcastle Chiropractic Center Location"
          ></iframe>
        </div>
      </motion.div>

      {/* Career Highlights */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        }}
      >
        <h3 className="text-xl font-semibold text-center mb-6">Career Highlights</h3>
        <div className="flex flex-col lg:flex-row justify-center items-start lg:gap-10 px-6">
          <ul className="list-disc list-inside text-lg mb-4">
            <li>
              Established Hands on Health Clinic in Newcastle for the homeless and disadvantaged.
            </li>
            <li>
              Past President and Ethics Chair, NSW branch, Australian Chiropractic Association.
            </li>
            <li>Lectured at the University of Newcastle in the Faculty of Medicine.</li>
          </ul>
          <ul className="list-disc list-inside text-lg">
            <li>Team chiropractor for Newcastle North Stars since 2000.</li>
            <li>Volunteer chiropractic care for local coal miners.</li>
            <li>Accompanied Australian Men's Ice Hockey team as Chiro/Medic.</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
