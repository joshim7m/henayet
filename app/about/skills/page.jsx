"use client"; // Required for useState in Next.js App Router

import React, { useState } from 'react';
import Image from "next/image";
import { taining_skills } from "@/lib/constants";

const Page = () => {
  // State to track which image is being viewed
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="relative w-full bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="pt-[150px] min-h-[calc(100vh-80px)] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-wide text-blue-600 dark:text-blue-400 uppercase mb-2">Certifications</h2>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">Training & Skills</h1>
            <p className="text-slate-500 mt-2 text-sm">Click on any certificate to view in full size</p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {taining_skills.map((item, index) => (
              <div 
                key={index} 
                onClick={() => setSelectedImg(item)} // Open Lightbox
                className="group cursor-pointer relative overflow-hidden bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 transition-all duration-300 shadow-sm hover:shadow-2xl hover:border-blue-500"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover Overlay Icon */}
                  <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-slate-800 dark:text-white">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- LIGHTBOX MODAL --- */}
{selectedImg && (
  <div 
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
    onClick={() => setSelectedImg(null)} 
  >
    {/* Close Button - Increased z-index and padding for easier clicking */}
    <button 
      onClick={(e) => {
        e.stopPropagation(); // Prevent trigger conflict
        setSelectedImg(null);
      }}
      className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white transition-colors z-[10000] p-4"
      aria-label="Close modal"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    {/* Large Image Container */}
    <div 
      className="relative w-full max-w-5xl h-[70vh] md:h-[80vh]"
      onClick={(e) => e.stopPropagation()} 
    >
      <Image
        src={selectedImg.image}
        alt={selectedImg.title}
        fill
        className="object-contain"
        priority
      />
      <div className="absolute -bottom-16 left-0 right-0 text-center px-4">
        <h3 className="text-white text-xl font-semibold">{selectedImg.title}</h3>
      </div>
    </div>
  </div>
)}
    </section>
  );
};

export default Page;