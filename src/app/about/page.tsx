"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
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
          src="/images/Spine - About Hero.jpg"
          alt="Spine"
          className="hidden md:block w-full h-auto rounded-lg object-cover max-h-[500px]" // Crops the height on desktop without distortion
        />

        {/* Vertical Cropped Image for Mobile */}
        <img
          src="/images/Spine - About Hero.jpg"
          alt="Chiropractic Care"
          className="block md:hidden w-full h-auto rounded-lg object-cover object-center max-h-[80vh]" // Crops the sides on mobile
        />

        <h1 className="font-extrabold lg:text-7xl md:text-6xl text-4xl satoshi-bold uppercase text-center mt-8">
          Say goodbye to your pain with our experienced care
        </h1>
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
        <h5 id="FredStevenson" className="text-2xl font-semibold mb-2">
          Dr. Fred Stevenson, BSc. D.C.
        </h5>
        <hr className="border-t border-black mb-2" />
      </motion.div>

      <div className="mt-10">
        {/* About Dr Fred Stevenson */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
          className="flex flex-col lg:flex-row items-center gap-10 "
        >
          <img
            src="/images/Dr Fred Stevenson.jpg" // Replace with your image path
            alt="Education"
            className="w-full lg:w-1/3 h-auto object-cover rounded-lg"
          />
          <div className="w-full lg:w-2/3">
            <h3 className="text-xl font-semibold">About Dr. Fred Stevenson</h3>
            <p className="text-lg mt-4">
              Dr. Fred Stevenson graduated from university in Canada and
              relocated to Australia, where he worked as a locum for 3 years.
              After meeting his wife, he settled in Newcastle and opened his own
              practice in 1985.
            </p>
            <p className="text-lg mt-4">
              Dr. Stevenson has served as the President of the NSW branch of the
              Australian Chiropractic Association and chaired its ethics and
              continuing education portfolios. He has lectured at the University
              of Newcastle and participated in interview panels for
              undergraduate medical students.
            </p>
            <p className="text-lg mt-4">
              Additionally, he has provided chiropractic care for coal miners
              and served as the team chiropractor for the Newcastle North Stars
              since 2000.
            </p>
          </div>
        </motion.div>


        <h3 className="text-xl font-semibold mt-14 mb-4">Career Highlights</h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
          className="flex flex-col lg:flex-row items-start lg:gap-10"
        >
          <div className="w-full lg:w-1/2">
            <ul className="list-disc list-inside text-lg">
              <li>
                Helped initiate the setup of Hands on Health Clinic in Newcastle
                to give free treatment to homeless and disadvantaged people.
              </li>
              <li>
                Served on the executive of the NSW branch of the Australian
                Chiropractic Association for 10 years, including 3 years as
                President.
              </li>
              <li>
                Chaired the ethics and continuing education portfolios of the
                NSW branch of the Australian Chiropractic Association.
              </li>
              <li>
                Lectured at the University of Newcastle within the Faculty of
                Medicine.
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-1/2">
            <ul className="list-disc list-inside text-lg">
              <li>
                Part of the interview panel for potential undergraduate medical
                students.
              </li>
              <li>
                Provided chiropractic treatment for workers at Centennial,
                Gretley, and Bulga coal mines upon request.
              </li>
              <li>Coached and played for Australia in Inline Hockey.</li>
              <li>
                Travelled overseas with the Men&apos;s Australian Ice Hockey
                team for 6 years as the team&apos;s Chiro/Medic.
              </li>
              <li>
                Coached and played for the Newcastle North Stars; team
                Chiropractor since their inception in 2000.
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
          className="flex flex-col lg:flex-row items-center gap-10 mt-10"
        >
          <div className="w-full lg:w-1/3 h-80 overflow-hidden rounded-lg">
            <img
              src="/images/Dr. Fred Stevenson - Hockey.jpg" // Replace with your image path
              alt="Dr. Fred Stevenson Hockey"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full lg:w-1/3 h-80 overflow-hidden rounded-lg">
            <img
              src="/images/Dr. Fred Stevenson - Hockey 2.jpg" // Replace with your image path
              alt="Dr. Fred Stevenson Hockey 2"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full lg:w-1/3 h-80 overflow-hidden rounded-lg">
            <img
              src="/images/Newcastle Team.png" // Replace with your image path
              alt="Newcastle Team"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>



        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
          className="flex flex-col lg:flex-row items-start lg:gap-10 mt-4"
        >
                  
          <div className="w-full">
          <h3 className="text-xl font-semibold mt-10 mb-4">
          Enjoying an Active Family Life{" "}
        </h3>
            <p className="text-lg mt-4">
              Current weekly activities include ice hockey (it&apos;s the
              Canadian in him), golf, running, tennis, cycling, kayaking,
              stand-up paddleboarding.
            </p>
            <p className="text-lg mt-4">
              He has climbed Africa&apos;s and South America&apos;s tallest
              mountains, Mt Kilimanjaro and Aconcagua. The former with his
              daughter.
            </p>
            <p className="text-lg mt-4">
              He has finished in the top 10 of his age group in the
              Blackmore&apos;s 42km marathon.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
          className="flex flex-col lg:flex-row items-center gap-10 mt-10"
        >
          <div className="w-full lg:w-1/4 h-80 overflow-hidden rounded-lg">
            <img
              src="/images/Dr. Fred Stevenson - Family Activity 4.jpg" // Replace with your image path
              alt="Dr. Fred Stevenson Hockey"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full lg:w-1/4 h-80 overflow-hidden rounded-lg">
            <img
              src="/images/Dr. Fred Stevenson - Family Activity 3.jpg" // Replace with your image path
              alt="Dr. Fred Stevenson Hockey 2"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full lg:w-1/4 h-80 overflow-hidden rounded-lg">
            <img
              src="/images/Dr. Fred Stevenson - Family Activity 2.jpg" // Replace with your image path
              alt="Newcastle Team"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full lg:w-1/4 h-80 overflow-hidden rounded-lg">
            <img
              src="/images/Dr. Fred Stevenson - Family Activity 1.jpg" // Replace with your image path
              alt="Newcastle Team"
              className="w-full h-full object-cover"
            />
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
          <h5 className="text-2xl font-semibold mb-2">
            Meet Our Wonderful Reception Team
          </h5>
          <hr className="border-t border-black mb-2" />
        </motion.div>

        {/* About Dr Fred Stevenson */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
          className="flex flex-col lg:flex-row items-center gap-10 mt-10 mb-10"
        >
          <img
            src="/images/Stevenson Chiropractic and Podiatry Waiting Room.jpg" // Replace with your image path
            alt="Education"
            className="w-full lg:w-1/3 h-auto object-cover rounded-lg"
          />
          <div className="w-full lg:w-2/3">
            <h3 className="text-xl font-semibold">
              Lynell, Michelle and Tracey
            </h3>
            <p className="text-lg mt-4">
              You will have to come into our office to meet our camera shy
              support team: Lynell, Michelle and Tracey!
            </p>
            <p className="text-lg mt-4">
              When our team are not making our workplace run like clockwork,
              they are busy with their grandchildren, fostering guide dogs in
              training, or out walking to enjoy a moment to themselves!
            </p>
            <p className="text-lg mt-4">
              We are immensely grateful to our team and all that they do to make
              our workplace a joy to be part of!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
