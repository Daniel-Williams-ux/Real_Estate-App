import React from 'react';
import Footer from './Footer';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
      <div className="w-full h-screen relative">
        <img
          src="/alcasa1.jpg"
          alt="Image 1"
          className="w-full h-full object-cover absolute inset-0"
        />
      </div>

      <div className="w-full h-screen relative ">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover absolute inset-0"
        >
          <source src="/ACCOLADE FINAL.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* <div className="w-full h-screen relative ">
        <img
          src="/alcasa2.jpg"
          alt="Image 1"
          className="w-full h-full object-cover absolute inset-0"
        /> 
      </div> */}

      <Footer />

    </div>
  );
}
