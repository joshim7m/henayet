import { social_links } from '@/lib/constants'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="relative bg-slate-950 text-gray-300 py-17.5 overflow-hidden border-t border-slate-800">
      {/* Optional: Colorful background blur effect for aesthetic */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[600px] opacity-20 pointer-events-none">
        <div className="absolute top-[-50%] left-0 w-full h-full bg-blue-600 blur-[100px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="relative z-10 max-w-[885px] mx-auto px-4 sm:px-8 xl:px-0 text-center">
        {/* Logo Section */}
        <a href="" className="inline-block hover:opacity-90 transition-opacity">
          <h2 className="text-2xl font-semibold text-white">
            <span className="text-blue-500 font-bold text-3xl">MD. Enayet</span> Hossain
          </h2>
        </a>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4 mt-10 lg:mt-15">
          {social_links.map((item, index) => (
            <a
              key={index}
              href={item.url}
              title={item.name}
              className="flex items-center justify-center w-11 h-11 rounded-full bg-slate-800 text-gray-400 hover:bg-blue-600 hover:text-white hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Gradient Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mt-9 mb-8 opacity-50"></div>

        {/* Navigation Links */}
        <div className="mb-6">
          <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <li>
              <a
                href="privacy-policy.html"
                className="group leading-none flex text-sm font-medium text-gray-400 transition-colors duration-300 hover:text-blue-400"
              >
                <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_1px] group-hover:bg-[length:100%_1px]">
                  Privacy Policy
                </span>
              </a>
            </li>
            <li>
              <span className="flex w-1 h-1 rounded-full bg-slate-600"></span>
            </li>
            <li>
              <a
                href="privacy-policy.html"
                className="group leading-none flex text-sm font-medium text-gray-400 transition-colors duration-300 hover:text-blue-400"
              >
                <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_1px] group-hover:bg-[length:100%_1px]">
                  Terms &amp; Conditions
                </span>
              </a>
            </li>
            <li>
              <span className="flex w-1 h-1 rounded-full bg-slate-600"></span>
            </li>
            <li>
              <a
                href="signup.html"
                className="group leading-none flex text-sm font-medium text-gray-400 transition-colors duration-300 hover:text-blue-400"
              >
                <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_1px] group-hover:bg-[length:100%_1px]">
                  Contact
                </span>
              </a>
            </li>
          </ul>
        </div>

        <p className="text-sm text-slate-500">
          &copy; 2025 hmenayet. All rights reserved
        </p>
      </div>
    </footer>
  )
}