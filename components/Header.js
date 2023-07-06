import React from 'react'
import { motion } from 'framer-motion';

export default function Header() {
  const variants = {
    initial: { opacity: 0, translateY: '-100%' },
    animate: { opacity: 1, translateY: '0%' }
  };

  return (
    <div className='h-[50%] ml-16 md:ml-[30%]' >
    <div className='h-[100%] w-[5%] mt-12'>
    <img src='/logo.png' className='h-full w-full' />

    </div>
      <motion.div
        className='absolute md:w-[30%]  w-[50%]'
        initial='initial'
        animate='animate'
        variants={variants}
        transition={{ duration: 0.8 }}
      >
        <img src="/header.png" alt="Header Image" className="w-full h-full" />
      </motion.div>
    </div>
  );
}
