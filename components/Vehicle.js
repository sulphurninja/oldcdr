import React from 'react'
import { motion } from 'framer-motion'

export default function Vehicle() {


  return (
    <div className=''>
      <motion.div whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }} className='absolute cursor-pointer  h-[12%]'>
        <img src='middle4.png' className='h-full w-full ' />
      </motion.div>
    </div>
  )
}
