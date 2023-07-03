
import { GetStaticProps } from 'next';
import React, { useState } from 'react'

export default function Social({ socialMediaData }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Social Media Metadata</h1>
        <div className="space-y-4">
          {socialMediaData.map((data, index) => (
            <div key={index} className="bg-white rounded p-4">
              <h2 className="text-xl font-semibold mb-2">{data.platform}</h2>
              <p>Username: {data.username}</p>
              <p>URL: {data.url}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export const getStaticProps = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/scrape');
    if (!response.ok) {
      throw new Error('Failed to fetch data from API');
    }
    const { socialMediaData } = await response.json();

    return {
      props: {
        socialMediaData,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        socialMediaData: null,
      },
    };
  }
};
