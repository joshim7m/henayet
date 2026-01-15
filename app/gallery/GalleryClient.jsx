"use client";

import React, { useEffect, useState } from "react";
import moment from "moment";

export default function GalleryClient({ items }) {
  const [activeImage, setActiveImage] = useState(null);

  // Optional: close on ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Gallery</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            {/* Image */}
            <button
              type="button"
              className="relative block w-full overflow-hidden cursor-pointer focus:outline-none"
              onClick={() => setActiveImage(item)}
              aria-label={`Open ${item.title}`}
            >
              <img
                src={item.image.url}
                alt={item.title}
                className="w-full h-[550px] object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm tracking-wide">
                  Click to view
                </span>
              </div>
            </button>

            {/* Text */}
            <div className="p-4 dark:bg-secondary-dark transition-colors duration-300">
              <h2 className="dark:text-gray-100 text-lg font-semibold transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-gray-100">
                {item.title}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-200">
                {moment(item.date).format("MMM DD, YYYY")}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Popup / Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300"
              onClick={() => setActiveImage(null)}
              aria-label="Close"
              type="button"
            >
              ✕
            </button>

            <img
              src={activeImage.image.url}
              alt={activeImage.title}
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-xl"
            />

            <div className="mt-4 text-center text-white">
              <h2 className="text-xl font-semibold">{activeImage.title}</h2>
              <p className="text-sm opacity-80">
                {moment(activeImage.date).format("MMM DD, YYYY")}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
