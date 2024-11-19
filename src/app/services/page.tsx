"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Services() {
  const projects = [
    {
      id: 1,
      attributes: {
        slug: "chiropractic-care",
        title: "Chiropractic Care",
        images: {
          data: [
            {
              attributes: {
                url: "/images/Chirpractic-Care.jpg",
              },
            },
          ],
        },
      },
    },
    {
      id: 2,
      attributes: {
        slug: "dry-needling",
        title: "Dry Needling",
        images: {
          data: [
            {
              attributes: {
                url: "/images/Dry-Needling.jpg",
              },
            },
          ],
        },
      },
    },
    {
      id: 3,
      attributes: {
        slug: "dynamic-neuromuscular-stabilisation",
        title: "Dynamic Neuromuscular Stabilisation",
        images: {
          data: [
            {
              attributes: {
                url: "/images/Dynamic-Neuromuscular-Stabilisation.jpg",
              },
            },
          ],
        },
      },
    },
    {
      id: 4,
      attributes: {
        slug: "muscle-massage",
        title: "Muscle Massage",
        images: {
          data: [
            {
              attributes: {
                url: "/images/Muscular-Massage.jpg",
              },
            },
          ],
        },
      },
    },
  ];

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
        {/* Cropped Image for Desktop/Tablet */}
        <img
          src="/images/Spine - Service Hero.jpg"
          alt="Spine"
          className="hidden md:block w-full h-auto rounded-lg object-cover max-h-[500px]" // Crops the height on desktop without distortion
        />

        {/* Vertical Cropped Image for Mobile */}
        <img
          src="/images/Spine - Service Hero.jpg"
          alt="Chiropractic Care"
          className="block md:hidden w-full h-auto rounded-lg object-cover object-center max-h-[80vh]" // Crops the sides on mobile
        />

        <h1 className="font-extrabold lg:text-7xl md:text-6xl text-4xl satoshi-bold uppercase text-center mt-8">
          Our Services
        </h1>

        <h3 className="text-center mt-2">
        Achieving optimal health and wellness by learning to work with your body to restore mobility
        </h3>
      </motion.div>


      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        }}
      >
        {/* Title */}
        <h5 className="text-2xl font-semibold mb-2">What we offer</h5>
        <hr className="border-t border-black mb-8" />

        {/* Testimonials */}
        <div className="gap-10 w-full">
          <p className="text-xl">
          Our clinic uses a variety of methods to help patients achieve the results they want and need. 
          </p>
          <p className="text-xl mt-4">


Chiropractic adjustment is our primary treatment. We use manual manipulation techniques including Diversified, Thompson Drop, and the Activator Tool, which works well for children, elders, and anyone who cannot tolerate manual adjustment.
          </p>
          <p className="text-xl mt-4">
We also offer several adjunct services—Massage therapy, Dry Needling, Spinal Decompression, Custom Orthotics, Taping, Exercise therapy, and Dynamic Neuromuscular Stabilization. A combination of these services may be necessary to achieve the lasting results you want.
We believe that during your care, the patient should be educated by their Chiropractor to maximise proper posture, maintain flexibility, balance and pain free living.

          </p>
        </div>
      </motion.div>

      
      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        }}
      >
        {/* Title */}
        <h5 className="text-2xl font-semibold mb-2">Our Services</h5>
        <hr className="border-t border-black mb-8" />
      </motion.div>

      <div className="mt-10">
        {/* Left Image, Right Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
          className="flex flex-col lg:flex-row items-center gap-10"
        >
          <img
            src="/images/Dr Fred Stevenson - Adjustment.jpg" // Replace with your image path
            alt="Chiropractor"
            className="w-full lg:w-1/2 h-[700px] object-cover rounded-lg"
          />
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold">
              Chiropractic Care
            </h2>
            <p className="text-lg mt-4">
            Chiropractic care is a patient-centred, non-invasive, hands-on, regulated health care profession focused on your spine, muscles,  joints and nervous system.
            </p>
            <p className="text-lg mt-4">
            Chiropractors use the best available evidence and clinical expertise to diagnose issues that affect the movement of your body. They treat them without medication or surgery and prevent them from returning. Chiropractic care can also promote health and improve your quality of life, as well as alleviate pain.
            </p>
            <Link href="https://my-pod-family-and-sports-podiatry.au3.cliniko.com/bookings?business_id=728271673064693041&practitioner_id=728286191547326094#service" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-secondary mt-6">
                {" "}
                {/* Add margin here */}
                Book An Appointment Today
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Right Image, Left Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
          className="flex flex-col lg:flex-row-reverse items-center gap-10 mt-10"
        >
          <img
            src="/images/Dynamic-Neuromuscular-Stabilisation.jpg" // Replace with your image path
            alt="Community Care"
            className="w-full lg:w-1/2 h-auto object-cover rounded-lg"
          />
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-semibold">
            Dynamic Neuromuscular Stabilisation
            </h3>

            <p className="text-lg mt-4">
            Encompasses the principles of developmental kinesiology during the first year of life;
            </p>
            <p className="text-lg mt-4">
            Defines postural, breathing patterns, and functional joint centration from this neurodevelopmental perspective; and
            </p>
            <p className="text-lg mt-4">
            Derives the ideal quality of these functional stereotypes from central (neurological) programs maturing during early postural ontogenesis. 
            </p>
            <Link href="https://my-pod-family-and-sports-podiatry.au3.cliniko.com/bookings?business_id=728271673064693041&practitioner_id=728286191547326094#service" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-secondary mt-6">
                {" "}
                Book An Appointment Today
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Learning Never Stops */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
          className="flex flex-col lg:flex-row items-center gap-10 mt-10"
        >
          <img
            src="/images/Dry-Needling.jpg" // Replace with your image path
            alt="Education"
            className="w-full lg:w-1/2 h-auto object-cover rounded-lg"
          />
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-semibold">Dry Needling</h3>
            <p className="text-lg mt-4">
            Involves the use of fine acupuncture needles inserted into the skin to aid release of myofascial trigger points.
            </p>
            <Link href="https://my-pod-family-and-sports-podiatry.au3.cliniko.com/bookings?business_id=728271673064693041&practitioner_id=728286191547326094#service" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-secondary mt-6">
                {" "}
                Book An Appointment Today
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Right Image, Left Text */}
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
          className="flex flex-col lg:flex-row-reverse items-center gap-10 mt-10"
        >
          <img
            src="/images/Chirpractic-Care.jpg" 
            alt="Community Care"
            className="w-full lg:w-1/2 h-auto object-cover rounded-lg"
          />
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-semibold">
            Muscle Massage: Manual and/or Theragun
            </h3>
            <p className="text-lg mt-4">
            Enhances muscle recovery and releases stress and tension.
            </p>
            <Link href="/about#FredStevenson" passHref>
              <button className="btn btn-secondary mt-6">
                {" "}
                {/* Add margin here */}
                Discover More About Dr Fred Stevenson
              </button>
            </Link>
          </div>
        </motion.div>


      {/* Accreditations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        }}
        className="flex flex-col lg:flex-row items-center gap-10 mt-10"
      >
        <div className="w-full lg:w-1/4 h-auto overflow-hidden rounded-lg">
          <img
            src="/images/AHPRA-Logo.png" // Replace with your image path
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/4 h-auto overflow-hidden rounded-lg">
          <img
            src="/images/DeptVetAf-Logo.png" // Replace with your image path
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/4 h-auto overflow-hidden rounded-lg">
          <img
            src="/images/Medicare-Logo.png" // Replace with your image path
            alt=""
            className="w-full h-full"
          />
        </div>

        <div className="w-full lg:w-1/4 h-auto overflow-hidden rounded-lg">
          <img
            src="/images/Nicaps - Logo.png" // Replace with your image path
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}
