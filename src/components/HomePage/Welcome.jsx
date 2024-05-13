"use client"
import React from "react";
import Image from "next/image";
import { motion } from 'framer-motion';


const Welcome = () => {
  return (
    <motion.div
      className="flex items-center pt-44 lg:pt-10"
      style={{ minHeight: "100vh" }}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
    >
      <div className="flex flex-col lg:flex-row w-auto max-w-6xl mx-auto gap-14 p-5 items-center justify-center">
        <motion.div
          className="flex flex-col w-auto md:w-1/2 gap-5 text-center"
          
        >
          <h1 className="text-3xl font-semibold text-cyan-900 mb-6">Welcome To <br /> SmartStay Hotel Lahore</h1>
          <p>
            Surround yourself with serenity in the heart of the bustling city as we welcome you to SmartStay Hotel Lahore. Experience the comforts of home by staying in our modern rooms and suites.
            Enjoy delicious food at our signature restaurants serving both international and local cuisines. Relax in the fitness centre, spa or swimming pool.
            With our round-the-clock services, we ensure making your stay pleasant and comfortable, each time you visit.
          </p>
        </motion.div>
        <motion.div
          className="h-auto"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ ease: "easeOut", duration: 0.6 }}

        >
          <Image src="/lobby.jpg" alt="HEHE" className="w-auto h-auto" width={500} height={500} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Welcome;
