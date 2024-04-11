"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className='h-screen overflow-hidden grid place-items-center'>
      <section className='h-[90%] w-[90%] border m-auto'>
        <motion.div
          initial={{ top: "48%", left: "45.5%" }}
          animate={{
            top: -20,
            left: 50,
          }}
          transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
          className='relative flex gap-2 items-center w-fit bg-black px-4 z-50'>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.2 }}
            className='text-3xl'>
            alex
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
            className='text-3xl'>
            young
          </motion.h1>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: -50 }}
          transition={{ duration: 2, delay: 3.4 }}
          className='text-2xl text-center h-full grid place-items-center'>
          <em>coming soon . . .</em>
        </motion.h1>
        <div className='bg-black absolute top-[45px] left-[120px] h-4 w-48' />
      </section>
    </main>
  );
}
