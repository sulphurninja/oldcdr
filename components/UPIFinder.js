import React from 'react'
import { motion } from 'framer-motion'

export default function UPIFinder() {
  return (
    <div className=''>
     <motion.div whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }} className='absolute cursor-pointer md:h-[10%]  h-[7%]'>
        <img src='middle3.png' className='h-full w-full ' />
        </motion.div>
    </div>
  )
}
