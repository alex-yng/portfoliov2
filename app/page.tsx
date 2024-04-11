"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className='flex h-screen flex-col items-center justify-center p-24 overflow-hidden'>
      <motion.div
        initial={{ top: "48%", left: "45.5%" }}
        animate={{
          top: 15,
          left: 15,
        }}
        transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
        className='absolute flex gap-2 items-center'>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
          className='text-3xl'>
          Alex
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
          className='text-3xl'>
          Young
        </motion.h1>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 3.4 }}
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        dragSnapToOrigin
        className='text-2xl text-center'>
        <em>coming soon . . .</em>
      </motion.h1>
    </main>
  );
}
