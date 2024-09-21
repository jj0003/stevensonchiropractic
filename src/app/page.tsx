// "@/components/Home.jsx"
"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const projects = [
    {
      id: 1,
      attributes: {
        slug: 'project-one',
        title: 'Project One',
        images: {
          data: [
            {
              attributes: {
                url: '/images/project-one.jpg',
              },
            },
          ],
        },
      },
    },
    {
      id: 2,
      attributes: {
        slug: 'project-two',
        title: 'Project Two',
        images: {
          data: [
            {
              attributes: {
                url: '/images/project-two.jpg',
              },
            },
          ],
        },
      },
    },
    {
      id: 3,
      attributes: {
        slug: 'project-three',
        title: 'Project Three',
        images: {
          data: [
            {
              attributes: {
                url: '/images/project-three.jpg',
              },
            },
          ],
        },
      },
    },
    {
      id: 4,
      attributes: {
        slug: 'project-four',
        title: 'Project Four',
        images: {
          data: [
            {
              attributes: {
                url: '/images/project-four.jpg',
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
        className="mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }}
      >
        <h1 className="lg:text-7xl md:text-6xl text-4xl uppercase satoshi-regular">
          Start your journey to better health and reduction of pain today!
        </h1>
      </motion.div>

      {/* Image with Overlay Buttons */}
      <motion.div
        className="relative mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } }}
      >
        {/* Rounded Image */}
        <img
          src="/images/Stock - Hero.jpg" // Replace with your actual image path
          alt="Chiropractic Care"
          className="w-full h-auto rounded-lg"
        />

        {/* Overlay Buttons */}
        <div className="absolute bottom-4 right-4 flex gap-2.5">
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

          <Link href="https://my-pod-family-and-sports-podiatry.au3.cliniko.com/bookings?business_id=728271673064693041&practitioner_id=728286191547326094#service" className="btn-extra-black group"   target="_blank" rel="noopener noreferrer">
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
        className="flex lg:flex-row flex-col mt-5 gap-10 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }}
      >
        <h3 className="flex">
        Who we are
        </h3>
        <h6 className="flex">
        Led by Dr. Fred Stevenson, a second-generation chiropractor with decades of experience, our clinic prides itself on offering personalized, professional care. With extensive post-graduate training and a deep commitment to continued education, we ensure that our patients benefit from the latest techniques in chiropractic care.
        </h6>
        <h6 className="flex">
        Whether you are dealing with chronic pain, sports injuries, or pregnancy discomfort, Stevenson Chiropractic Clinic is here to support your journey to better health. We believe in building long-term relationships with our patients and the community, working together to help you feel your best.
        </h6>
      </motion.div>

      {/* Project Showcase */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {projects.map((item) => {
          const imageUrl = item.attributes.images?.data?.[0]?.attributes.url;

          return (
            <motion.div
              key={item.id}
              className="relative bg-cover bg-center rounded-lg h-64 flex flex-col justify-end transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_blue] active:translate-x-0 active:translate-y-0 active:rounded-lg active:shadow-none"
              style={{ backgroundImage: `url(${imageUrl})` }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } }}
            >
              <div className="p-4">
                <motion.h5
                  className="text-white font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
                  }}
                >
                  {item.attributes.title}
                </motion.h5>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: 'easeOut', delay: 0.4 },
                  }}
                >
                  <Link
                    href={`/work/${item.attributes.slug}`}
                    className="btn btn-secondary mt-2 inline-block"
                  >
                    View Project
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.p
        className="text-gray-400 mt-2 text-xs"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: 'easeOut', delay: 0.6 },
        }}
      >
        * These are some of the projects our team members have worked on in the past. Vortechs does
        not take credit for the design or development of these projects. All rights belong to the
        respective owners.
      </motion.p>

      {/* What We Do */}
      <motion.div
        className="bg-[#0049FF] rounded-md p-5 mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: 'easeOut' },
        }}
      >
        <div className="flex flex-col items-center">
          <h1 className="satoshi-black text-white">Our Services</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-3">
          <div className="p-4 rounded-md bg-white">
            <h5 className="font-semibold">Chiropractic Care</h5>
            <p>
            Chiropractic care is a patient-centred, non-invasive, hands-on, regulated health care profession focused on your spine, muscles,  joints and nervous system. 
            <br />

            Chiropractors use the best available evidence and clinical expertise to diagnose issues that affect your body movement. They treat them without medication or surgery and prevent them from returning. Chiropractic care can also promote health and improve your quality of life, as well as alleviate pain.            </p>
          </div>
          <div className="p-4 rounded-md bg-white">
            <h5 className="font-semibold">Dry Needling</h5>
            <p>
            Involves the use of fine acupuncture needles inserted into the skin to aid release of myofascial trigger points.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-3">
          <div className="p-4 rounded-md bg-white">
            <h5 className="font-semibold">Dynamic Neuromuscular Stabilisation</h5>
            <p>
              Encompasses the principles of developmental kinesiology during the first year of life;
              <br />
              Defines postural, breathing patterns, and functional joint centration from this neurodevelopmental perspective; and
              <br />
              Derives the ideal quality of these functional stereotypes from central (neurological) programs maturing during early postural ontogenesis.   
            </p>         

          </div>
          <div className="p-4 rounded-md bg-white">
            <h5 className="font-semibold">Muscle Massage</h5>
            <p>
            Enhances muscle recovery and releases stress and tension.  
            </p>
          </div>
        </div>
      </motion.div>

      {/* Apply for a Slot */}
      <motion.h1
        className="lg:text-7xl md:text-6xl text-4xl uppercase satoshi-regular mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: 'easeOut' },
        }}
      >
        APPLY FOR A SLOT TO BECOME ONE OF FIVE NEW CLIENTS WE SELECT EVERY YEAR
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mt-4 mb-20">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className={`relative p-4 rounded-md border-2 border-gray-400 ${
              index === 0 || index === 1
                ? 'bg-gray-400'
                : 'bg-[#0049FF] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:rounded-2xl active:shadow-none'
            } lg:h-96 md:h-72 sm:h-40 h-40`}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.1 * index, duration: 0.8, ease: 'easeOut' },
            }}
          >
            <h5 className="font-medium uppercase text-3xl text-white">
              slot
              <br />
              {index + 1}
            </h5>
            {index === 0 || index === 1 ? (
              <span className="absolute bottom-4 left-4 btn btn-disabled cursor-not-allowed">
                Unavailable
              </span>
            ) : (
              <Link
                href="https://cal.com/vortechs/30min"
                className="absolute bottom-4 left-4 btn btn-apply hover:bg-black"
              >
                🔥available
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
