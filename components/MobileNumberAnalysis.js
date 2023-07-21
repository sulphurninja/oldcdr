import React from 'react'
import { motion } from 'framer-motion'

export default function MobileNumberAnalysis() {
  return (
    <div className='mt-72 md:mt-36 ml-[25%] md:ml-[60%]'>
      <motion.div whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }} className='absolute cursor-pointer md:h-[40%] h-[25%]'>
        <img src='mobile.png' className='h-full w-full ' />
      </motion.div>
    </div>

  )
}
