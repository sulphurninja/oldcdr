import React from 'react'
import { motion } from 'framer-motion';

export default function Header() {
  const variants = {
    initial: { opacity: 0, translateY: '-100%' },
    animate: { opacity: 1, translateY: '0%' }
  };

  return (
    <motion.div
      className='absolute top-0 left-0  w-full'
      initial='initial'
      animate='animate'
      variants={variants}
      transition={{ duration: 0.8 }}
    >
 <img src="/header.png" alt="Header Image" className="ml-[30%]" />
    </motion.div>
  );
}
