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
        <h1 className="font-extrabold lg:text-7xl md:text-6xl text-4xl satoshi-bold uppercase text-center mt-8">
          Get in Touch with Our Clinic
        </h1>
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
        <p className="text-lg">179 Brunker Road, Adamstown NSW 2289 Australia</p>
        <p className="text-lg">Phone: (02) 4956 1144</p>
        <p className="text-lg">Email: fas@stevensonchiropractic.com.au</p>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.228943876451!2d151.72014631531607!3d-32.93877927934865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b7315186d07b7d7%3A0x1aa9a117ae2af55b!2s179%20Brunker%20Rd%2C%20Adamstown%20NSW%202289%2C%20Australia!5e0!3m2!1sen!2sus!4v1691089458351!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen={true}
            loading="lazy"
            className="border-0"
            title="Newcastle Chiropractic Center Location"
          ></iframe>
        </div>
      </motion.div>

    </div>
  );
}
