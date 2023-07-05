import axios from 'axios';
import { useState } from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';

export default function VehicleSearch() {
  const [vid, setVid] = useState('');
  const [result, setResult] = useState(null);



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`/api/rto?vid=${vid}`);
      setResult(response.data);
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
        className='mt-40 h-[20%] w-[60%]   ml-[20%] text-center absolute'
      >
        <img src='/rto.png' className='absolute rounded-3xl' />
        <form className='-mt-12' onSubmit={handleSubmit}>
          <input
            type="text"
            value={vid}
            onChange={(e) => setVid(e.target.value)}
            placeholder="Enter Vehicle Number"
            className='bg-white absolute text-black font-mono border-4 border-green-400 mt-36 -ml-36 h-12 rounded-xl px-2 '
          />
          <button className='bg-blue-400 font-bold font-mono hover:bg-blue-700 text-white absolute mt-36 h-12 ml-24 px-6 rounded-xl ' type="submit">Submit</button>
        </form>
      </motion.div>

      {result && (
        <div className='absolute text-white mt-[30%] w-[50%]  ml-[25%] font-mono font-bold text-2xl'>
          {result.error ? (
            <p className='text-red-600 font-bold animate-pulse'>⚠️ Error Occurred!!!</p>
          ) : (
            <div className='text-sm grid  grid-cols-2 gap-x-4'>
              <p>Owner Name: {result.response.owner_name}</p>
              <p>Brand Name: {result.response.brand_name}</p>
              <p>Brand Model: {result.response.brand_model}</p>
              <p>Color: {result.response.color}</p>
              <p>Owner Count: {result.response.owner_count}</p>
              <p>Insurance Company: {result.response.insurance_company}</p>
              <p>Insurance Policy: {result.response.insurance_policy}</p>
              <p>Insurance Expiry: {result.response.insurance_expiry}</p>
              <p>Class: {result.response.class}</p>
              <p>Registration Date: {result.response.registration_date}</p>
              <p>PUCC Upto: {result.response.pucc_upto}</p>
              <p>Chassis Number: {result.response.chassis_number}</p>
              <p>Engine Number: {result.response.engine_number}</p>
              <p>Fuel Type: {result.response.fuel_type}</p>  
            </div>
          )}
        </div>
      )}
    </div>
  );
}


