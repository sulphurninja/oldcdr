import React from 'react'
import { motion } from 'framer-motion'

export default function GPRSCDRAnalysis() {
  return (
    <div className='absolute cursor-pointer h-[8%]  md:h-[15%]'>
    <motion.div whileHover={{
    scale: 1.05,
    transition: { duration: 0.2 },
  }} className=' h-[100%]  '>
      <label className='cursor-pointer'>

<img src='gprs.png' className='h-full w-full ' />

<input
    type="file"
    className="hidden"
  />

</label>
        </motion.div>
    </div>
  )
}
