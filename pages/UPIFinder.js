import axios from 'axios';
import { useState } from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';

export default function UPIFinder() {
  const [vpa, setVpa] = useState('');
  const [result, setResult] = useState(null);



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`/api/upifind?vpa=${vpa}`);
      setResult(response.data);
      console.log(response.data.name_at_bank)
    } catch (error) {
      console.error(error);
      setResult({ error: 'An error occurred while fetching data from the API' });
    }
  };

  return (
    <div className='h-screen w-screen'>
      <video autoPlay muted className="absolute inset-0 object-cover w-full h-full">  {/** Background Video */}
        <source src="/bg.mp4" type="video/mp4" />
        Update your system atleast!
      </video>
      <div className='h-[5%] absolute mt-[-2%] w-full'>
        <Header />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className='mt-[15%] w-[50%]   ml-[25%] text-center absolute'
      >
        <img src='/upi.png' className='absolute rounded-3xl' />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={vpa}
            onChange={(e) => setVpa(e.target.value)}
            placeholder="Enter UPI ID"
            className='bg-white absolute text-black font-mono border-4 border-green-400 mt-36 -ml-36 h-12 rounded-xl px-2 '
          />
          <button className='bg-blue-400 font-bold font-mono hover:bg-blue-700 text-white absolute mt-36 h-12 ml-24 px-6 rounded-xl ' type="submit">Submit</button>
        </form>
      </motion.div>

      {result && (
        <div className='absolute text-white mt-[32%] leading-10 ml-[30%] font-mono font-bold text-2xl'>
          {result.error ? (
            <p className='text-red-600 font-bold animate-pulse'>⚠️ Error Occurred!!!</p>
          ) : (
            <div>
              <p>Account Exists: {result.result.account_exists}</p>
              <p>Name at Bank: {result.result.name_at_bank}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}


