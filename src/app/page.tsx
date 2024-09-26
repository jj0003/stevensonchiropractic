"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
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
  className=""
  initial={{ opacity: 0, y: 20 }}
  animate={{
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  }}
>
  <h1 className="lg:text-7xl md:text-6xl text-4xl uppercase satoshi-regular">
    Start your journey to better health and reduction of pain today!
  </h1>
</motion.div>

{/* Image with Overlay Buttons */}
<motion.div
  className="relative mt-10"
  initial={{ opacity: 0 }}
  animate={{
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  }}
>
  {/* Rounded Image for Desktop/Tablet */}
  <div className="hidden md:block w-full h-[1000px] overflow-hidden rounded-lg">
    <img
      src="/images/Dr Fred Stevenson - Neck Adjustment.jpg"
      alt="Chiropractic Care"
      className="w-full h-full object-cover object-center"
    />
  </div>
  
  {/* Rounded Image for Mobile */}
  <img
    src="/images/Dr Fred Stevenson - Neck Adjustment.jpg"
    alt="Chiropractic Care"
    className="block md:hidden w-full h-auto rounded-lg"
  />

  {/* Overlay Buttons */}
  <div className="absolute bottom-4 right-4 flex flex-row gap-2.5">
    <Link href="/call-us" className="btn-extra group">
      <div className="flex flex-col justify-between h-full">
        <span className="text-left font-bold text-white">Call us now</span>
        <svg
          className="w-6 h-6 text-white transform transition-transform duration-300 group-hover:translate-x-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </div>
    </Link>

    <Link
      href="https://my-pod-family-and-sports-podiatry.au3.cliniko.com/bookings?business_id=728271673064693041&practitioner_id=728286191547326094#service"
      className="btn-extra-black group"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-col justify-between h-full">
        <span className="text-left font-bold text-white">Book online</span>
        <svg
          className="w-6 h-6 text-white transform transition-transform duration-300 group-hover:translate-x-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </div>
    </Link>
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
        <h5 className="text-2xl font-semibold mb-2">Testimonials</h5>
        <hr className="border-t border-black mb-8" />

        {/* Testimonials */}
        <div className="flex flex-col lg:flex-row gap-10 w-full">
          <h4 className="flex-1">
            &quot;Been going here for years and wouldn&apos;t go anywhere else. Fred is a
            genius.&quot;
          </h4>
          <h4 className="flex-1">
          &quot;As a Polio survivor, I depend on Fred to keep me mobile. I always
            leave his place feeling better and happier.&quot;
          </h4>
          <h4 className="flex-1">
          &quot;Excellent practitioner... I would highly recommend.&quot;
          </h4>
          <h4 className="flex-1">
          &quot;Dr. Fred is a legend. Thanks for your magic hands and caring
            nature.&quot;
          </h4>
        </div>
      </motion.div>

      <div className="mt-20">
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
              Stevenson Chiropractic Clinic
            </h2>
            <p className="text-lg mt-4">
              Dr Fred Stevenson is a second-generation chiropractor; his 3 other
              siblings are also chiropractors, his daughter is a podiatrist, and
              his son is a chiropractor and surgeon.
            </p>
            <Link href="/about" passHref>
              <button className="btn btn-secondary mt-6"> {/* Add margin here */}
                Discover More About Dr Fred Stevenson
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
            src="/images/Newcastle Team.png" // Replace with your image path
            alt="Community Care"
            className="w-full lg:w-1/2 h-auto object-cover rounded-lg"
          />
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-semibold">Caring for our Community</h3>
            <p className="text-lg mt-4">
              Stevenson Chiropractic has been offering excellent care in the
              Newcastle community for 40 years. We have built a relationship of
              trust and commitment to helping you achieve optimal health and
              wellness.
            </p>
            <p className="text-lg mt-4">
              We help you learn to work with your body to restore mobility
              through concentrated, specific exercises. We believe in a
              comprehensive and holistic approach to get your health back on
              track.
            </p>
            <p className="text-lg mt-4">
              Patients have seen success with conditions like back, neck, knee
              and joint pain, sciatica, headaches, migraines, TMJ, carpal tunnel
              syndrome, rotator cuff injury, sports injuries, pregnancy
              discomfort, and paediatric issues.
            </p>
            <Link href="/about" passHref>
              <button className="btn btn-secondary mt-6"> {/* Add margin here */}
                Discover More About Dr Fred Stevenson
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
            src="/images/Dr Fred Stevenson.jpg" // Replace with your image path
            alt="Education"
            className="w-full lg:w-1/2 h-auto object-cover rounded-lg"
          />
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-semibold">Learning Never Stops</h3>
            <p className="text-lg mt-4">
              Dr Fred Stevenson graduated as an Ontario Scholar from high
              school. He then completed a total of seven years of university
              education, graduating with a Bachelor of Science from the
              University of Western Ontario and a Doctorate of Chiropractic from
              the Canadian Memorial Chiropractic College (CMCC).
            </p>
            <p className="text-lg mt-4">
              Extensive post-graduate studies in rehabilitation by Dynamic
              Neuromuscular Stabilisation (DNS) from the Motel Hospital in
              Prague, Czech Republic.
            </p>
            <p className="text-lg mt-4">
              While he was President of the New South Wales Chiropractic
              Association in the 1990s, he introduced mandatory continuing
              education requirements for membership.
            </p>
            <Link href="/about" passHref>
              <button className="btn btn-secondary mt-6"> {/* Add margin here */}
                Discover More About Dr Fred Stevenson
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Project Showcase */}
      <h5 className="text-2xl font-semibold mb-2 mt-10">Our Services</h5>
        <hr className="border-t border-black mb-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {projects.map((item) => {
          const imageUrl = item.attributes.images?.data?.[0]?.attributes.url;

          return (
            <Link key={item.id} href={`/work/${item.attributes.slug}`} passHref>
              <motion.div
                className="relative bg-cover bg-center rounded-lg h-64 flex flex-col justify-end transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_blue] active:translate-x-0 active:translate-y-0 active:rounded-lg active:shadow-none"
                style={{ backgroundImage: `url(${imageUrl})` }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.8, ease: "easeOut" },
                }}
              >
                <div className="p-4">
                  <motion.h5
                    className="text-white font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.2,
                      },
                    }}
                  >
                    {item.attributes.title}
                  </motion.h5>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>

      
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
