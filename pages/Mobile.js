import axios from 'axios';
import { useState } from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PDFDownloadLink, PDFViewer, Document, Page, View, Image, Text, StyleSheet }from '@react-pdf/renderer';

export default function Mobile() {
  const [phone, setPhone] = useState('');
  const [result, setResult] = useState(null);



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`/api/mobile?phone=${phone}`);
      setResult(response.data);
    } catch (error) {
      console.error(error);
      setResult({ error: 'An error occurred while fetching data from the API' });
    }
  };

  console.log(result);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className='h-screen w-screen'>
      <video autoPlay muted className="absolute inset-0 object-cover w-full h-full">  {/** Background Video */}
        <source src="/bg.mp4" type="video/mp4" />
        Update your system atleast!
      </video>
      <div className='h-[10%] w-[20%] md:w-[10%] md:h-[20%] absolute  '>
        <Link href='/'>
          <img src='/logo.png' className='h-full w-full' />
        </Link>
      </div>
      <div className='h-[5%] absolute md:mt-[-8%]  mt-[-22%] w-full'>
        <Header />
      </div>
     
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className='mt-[15%] w-[50%]   ml-[25%] text-center absolute'
      >
 
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter Mobile Number"
            className='bg-white absolute text-black font-mono border-4 border-green-400 md:mt-10 mt-24 md:-ml-36 -ml-40 h-12 rounded-xl px-2 '
          />
          <button className='bg-blue-400  font-bold font-mono hover:bg-blue-700 text-white absolute md:mt-10 mt-24 h-12 md:ml-24 ml-14 px-6 rounded-xl ' type="submit">Submit</button>
        
        </form>
        <button className=' bg-red-400 z-50 font-bold font-mono hover:bg-green-700 text-white absolute  -mt-36 h-12 md:ml-32 ml-14 px-6 rounded-xl ' onClick={handlePrint}>
         Export as PDF
        </button>
      </motion.div>
      {/* TO be exported as a pdf */}
      {result && result.status && (
        <div  className='printable-content bg-black ml-56  w-[90%] h-[90%] rounded-xl border-2 border-white text-white font-mono  md:mt-4 mt-32 mx-10 md:mx-4 absolute '>
          <Link href='/'>
            <img src='/logo.png' className='garuda md:h-24 h-12 ml-24 md:ml-32 flex' />
          </Link>
          <h1 className='mx-2 headd '>Garuda Analysis Report for {result.data[0].phones[0].e164Format}</h1>
          {/* Display name */}
          <p className='text-center namee pt-2 font-bold md:text-2xl font-mono'>{result.data[0].name}</p>

          {/* Display image */}
          <img src={result.data[0].image} className='profile md:w-44 w-24 mt-4 rounded-xl ml-12 md:ml-28 border-2 border-white' alt="User's profile" />

          {/* Display internetAddresses */}

          <ul className='mt-4 inter space-y-8 text-sm md:text-lg mx-4'>
            {result.data[0].internetAddresses.map((address) => (
              <li className='font-bold' key={address.id}><span className='uppercase'>{address.service}</span>: {address.id}</li>
            ))}
          </ul>

          {/* Display carrier */}
          <p className=' carrier font-bold mx-4'><span className='underline  font-bold'>Carrier</span>: {result.data[0].phones[0].carrier}</p>
          <p className='phoneno font-bold mx-4' ><span className='underline  font-bold'>Phone No:</span>: {result.data[0].phones[0].e164Format}</p>
          <ul className='address  mx-4'>
            {result.data[0].addresses.map((addresses) => (
              <li className='font-bold' key={addresses.id}><span className=' underline  font-bold'>Address</span>: {addresses.address}</li>
            ))}
          </ul>
          
        </div>
      )}
     {/* Updated Export as PDF button */}
      {/* Print button */}
    
       
    </div>
  );
}



