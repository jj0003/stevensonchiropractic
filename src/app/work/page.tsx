"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  attributes: {
    slug: string;
    title: string;
    images?: {
      data?: {
        attributes: {
          url: string;
        };
      }[];
    };
  };
}

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/projects?populate=*`)
      .then((response) => {
        setProjects(response.data.data);
        setLoading(false); // Data has been fetched, stop loading
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
        setLoading(false); // Stop loading even if there's an error
      });
  }, []);

  // Helper function to get the full image URL
  const getFullImageUrl = (url: string) => {
    return url.startsWith('http') ? url : `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`;
  };

  const renderSkeletons = () => (
    <>
      <div className="relative bg-gray-300 rounded-lg h-32 animate-pulse"></div>
      <div className="relative bg-gray-300 rounded-lg h-32 animate-pulse"></div>
      <div className="relative bg-gray-300 rounded-lg h-32 animate-pulse"></div>
      <div className="relative bg-gray-300 rounded-lg h-32 animate-pulse"></div>
      <div className="relative bg-gray-300 rounded-lg h-32 animate-pulse"></div>
      <div className="relative bg-gray-300 rounded-lg h-32 animate-pulse"></div>
      <div className="relative bg-gray-300 rounded-lg h-32 animate-pulse"></div>
      <div className="relative bg-gray-300 rounded-lg h-32 animate-pulse"></div>

    </>
  );

  return (
    <div>
      <h1 className="lg:text-7xl md:text-6xl text-4xl uppercase satoshi-regular">
        TAKE A LOOK AT OUR WORK
      </h1>
      <div className="grid gap-5 mt-10">
        {loading ? (
          // Display skeletons while loading
          renderSkeletons()
        ) : (
          projects.length > 0 ? (
            projects.map((item) => {
              const imageUrl = item.attributes.images?.data?.[0]?.attributes.url;
              const fullImageUrl = imageUrl ? getFullImageUrl(imageUrl) : '/default-image.jpg';

              return (
                <Link href={`/work/${item.attributes.slug}`} key={item.id} className="block">
                  <div
                    className="relative bg-cover bg-center rounded-lg h-32 flex flex-col justify-end transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_blue] active:translate-x-[0px] active:translate-y-[0px] active:rounded-lg active:shadow-none"
                    style={{ backgroundImage: `url(${fullImageUrl})` }}
                  >
                    <div className="p-4">
                      <h5 className="text-white font-semibold">
                        {item.attributes.title}
                      </h5>
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            <p>No projects found.</p>
          )
        )}
      </div>
      <p className="text-gray-400 mt-2 mb-10 text-xs">
        * These are some of the projects our team members have worked on in the past. Vortechs does not take credit for the design or development of these projects. All the rights belong to the respective owners.
      </p>

      {/* What We Do */}
      <motion.div
        className="bg-[#0049FF] rounded-md p-5 mt-20 mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        }}
      >
        <div className="flex flex-col items-center">
          <h1 className="satoshi-black text-white">Our Services</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-3">
          <div className="p-4 rounded-md bg-white">
            <h5 className="font-semibold">Chiropractic Care</h5>
            <p>
              Chiropractic care is a patient-centred, non-invasive, hands-on,
              regulated health care profession focused on your spine, muscles,
              joints and nervous system.
              <br />
              Chiropractors use the best available evidence and clinical
              expertise to diagnose issues that affect your body movement. They
              treat them without medication or surgery and prevent them from
              returning. Chiropractic care can also promote health and improve
              your quality of life, as well as alleviate pain.{" "}
            </p>
          </div>
          <div className="p-4 rounded-md bg-white">
            <h5 className="font-semibold">Dry Needling</h5>
            <p>
              Involves the use of fine acupuncture needles inserted into the
              skin to aid release of myofascial trigger points.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-5">
          <div className="p-4 rounded-md bg-white">
            <h5 className="font-semibold">
              Dynamic Neuromuscular Stabilisation
            </h5>
            <p>
              Encompasses the principles of developmental kinesiology during the
              first year of life;
              <br />
              Defines postural, breathing patterns, and functional joint
              centration from this neurodevelopmental perspective; and
              <br />
              Derives the ideal quality of these functional stereotypes from
              central (neurological) programs maturing during early postural
              ontogenesis.
            </p>
          </div>
          <div className="p-4 rounded-md bg-white">
            <h5 className="font-semibold">Muscle Massage</h5>
            <p>Enhances muscle recovery and releases stress and tension.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
