import { social_links } from '@/lib/constants'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="border-t border-gray-3 py-17.5">
  <div className="max-w-[885px] mx-auto px-4 sm:px-8 xl:px-0 text-center">
    <a href="">
      <h2 className="text-2xl font-semibold"> <span className="text-primary font-bold text-3xl">Enayet</span> Hossain </h2>
    </a>

    <div className="flex items-center justify-center gap-3 mt-10 lg:mt-15">
      {social_links.map((item, index) => (
        <a key={index} href={item.url} title={item.name} className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-2 transition-all duration-200 hover:text-dark">
            {item.icon}
        </a>
      ))}
    </div>

    <div className="w-full h-px gradient mt-9 mb-8"></div>

    <div className="mb-4">
      <ul className="flex flex-wrap items-center justify-center gap-2.5">
        <li>
          <a href="privacy-policy.html" className="group leading-none flex text-custom-sm ease-in duration-200 hover:text-dark">
            <span className="bg-linear-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">Privacy Policy</span>
          </a>
        </li>
        <li>
          <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
        </li>
        <li>
          <a href="privacy-policy.html" className="group leading-none flex text-custom-sm ease-in duration-300 hover:text-dark">
            <span className="bg-linear-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">Terms &amp; Conditions</span>
          </a>
        </li>
        <li>
          <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
        </li>
        <li>
          <a href="signup.html" className="group leading-none flex text-custom-sm ease-in duration-300 hover:text-dark">
            <span className="bg-linear-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">Contact</span>
          </a>
        </li>
        <li>
          <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
        </li>
      </ul>
    </div>

    <p className="text-custom-sm">&copy; 2025 hmenayet. All rights reserved</p>
  </div>
</footer>
  )
}
