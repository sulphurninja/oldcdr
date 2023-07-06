import CDRAnalysis from '../components/CDRAnalysis'
import IPDRAnalysis from '../components/IPDRAnalysis'
import DUMPAnalysis from '../components/DUMPAnalysis'
import Location from '../components/Location'
import Header from '../components/Header'
import React, { useEffect } from 'react'
import SocialAnalyzer from '../components/SocialAnalyzer'
import UPIFinder from '../components/UPIFinder'
import Vehicle from '../components/Vehicle'
import CourtCheck from '../components/CourtCheck'
import { motion } from 'framer-motion'
import FaceDetection from '../components/FaceDetection'
import GPRSCDRAnalysis from '../components/GPRSCDRAnalysis'
import SDRAnalysis from '../components/SDRAnalysis'
import GasConnection from '../components/GasConnection'
import TimeConvertor from '../components/TimeConvertor'
import IMEIInfo from '../components/IMEIInfo'
import CellIDTracker from '../components/CellIDTracker'
import CyberSecurityUpdates from '../components/CyberSecurityUpdates'
import { Howl } from 'howler';
import Link from 'next/link'

export default function Home() {

  useEffect(() => {
    const sound = new Howl({
      src: ['sound.mp3'],
    });
    sound.play();

    return () => {
      sound.unload();
    };
  }, []);


  return (
    <div className=" h-screen w-screen absolute ">

      <video autoPlay muted className="absolute  object-cover   w-full h-full">  {/** Background Video */}
        <source src="/bg.mp4" type="video/mp4" />
        Update your system atleast!
      </video>

      <div className='h-[5%] absolute md:mt-[-8%]  mt-[-22%] w-full'>
        <Header />
      </div>
      <div className='grid  grid-cols-2 md:grid-cols-4 md:mt-[15%] lg:mt-[10%]  mt-[28%] ml-11  gap-y-24  '>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}>
          <CDRAnalysis />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}     
        >
          <IPDRAnalysis />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <DUMPAnalysis />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <GPRSCDRAnalysis />
        </motion.div>

      </div>

      <div className='grid grid-cols-3 md:grid-cols-3 md:mt-[15%] lg:mt-[12%] md:gap-y-16 h-[30%] lg:ml-[15%]  md:ml-[15%]   px-4 mt-[28%] '>
        <Link href='/Social'>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.01, ease: 'easeInOut' }}>
            <SocialAnalyzer />
          </motion.div>
        </Link>
        <Link href='/Location'>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}>
            <Location />
          </motion.div>
        </Link>
        <Link href='/UPIFinder'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}>
          <UPIFinder />
        </motion.div>
        </Link>
        <Link href='/VehicleSearch'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 2.1, ease: 'easeInOut' }}>
          <Vehicle />
        </motion.div>
        </Link>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}>
          <CourtCheck />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 2.8, ease: 'easeInOut' }}>
          <FaceDetection />
        </motion.div>
      </div>

      

      <div className='grid grid-cols-3 md:grid-cols-1 md:gap-y-24 md:mt-[-18%] lg:mt-[-12%] gap-4 px-4 h-[10%]   '>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 3.2, ease: 'easeInOut' }}>
          <SDRAnalysis />
        </motion.div>

        <Link href='/TimeConvertor'>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 3.8, ease: 'easeInOut' }}>
            <TimeConvertor />
          </motion.div>
        </Link>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 4.2, ease: 'easeInOut' }}>
          <GasConnection />
        </motion.div>

      </div>
      <div className='grid grid-cols-3 md:grid-cols-1 md:gap-y-24 md:mt-[-4.9%]  gap-4 px-4 h-[10%] md:ml-[89%]'>
        <Link href='/IMEInfo'>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 4.6, ease: 'easeInOut' }}>
            <IMEIInfo />
          </motion.div>
        </Link>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 5.0, ease: 'easeInOut' }}>
          <CellIDTracker />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 5.6, ease: 'easeInOut' }}>
          <CyberSecurityUpdates />
        </motion.div>

      </div>
    </div>
  )
}
