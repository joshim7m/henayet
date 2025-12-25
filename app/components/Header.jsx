'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, ChevronDown, GraduationCap, Briefcase, Award, Mic2, BookOpen, Presentation, Database, Landmark, School, Users } from "lucide-react";

const menuData = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    submenu: [
      { name: "Professional Experience", href: "/experience", icon: <Briefcase size={16} /> },
      { name: "Education", href: "/education", icon: <GraduationCap size={16} /> },
      { name: "Training & Skills", href: "/skills", icon: <Award size={16} /> },
      { name: "Conferences", href: "/conferences", icon: <Mic2 size={16} /> },
      { name: "Publications", href: "/publications", icon: <BookOpen size={16} /> },
    ],
  },
  {
    name: "Learn",
    href: "/learn",
    submenu: [
      { name: "Excel", href: "/learn/excel", icon: <Presentation size={16} /> },
      { name: "PowerPoint", href: "/learn/powerpoint", icon: <Presentation size={16} /> },
      { name: "Data Analytics (Python)", href: "/learn/python", icon: <Database size={16} /> },
      { name: "Islamic Finance", href: "/learn/finance", icon: <Landmark size={16} /> },
    ],
  },
  {
    name: "Opportunities",
    href: "/opportunities",
    submenu: [
      { name: "Study", href: "/opp/study", icon: <School size={16} /> },
      { name: "Seminar/Conference", href: "/opp/seminar", icon: <Users size={16} /> },
      { name: "Scholarship", href: "/opp/scholarship", icon: <GraduationCap size={16} /> },
    ],
  },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed left-0 top-0 w-full z-[9999] transition-all duration-300 ${
      scrolled ? "bg-white/80 dark:bg-primary-dark/80 backdrop-blur-md py-4 shadow-sm border-b dark:border-gray-800" : "bg-transparent py-6"
    }`}>
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5">
          {/* The Visual Icon / Logo Mark */}
          <div className="relative flex items-center justify-center w-12 h-12">
            {/* Background Shape: Rotating square on hover for a dynamic feel */}
            <div className="absolute inset-0 bg-blue-600 rounded-xl rotate-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 opacity-10"></div>
            <div className="absolute inset-0 bg-blue-600 rounded-xl -rotate-6 group-hover:-rotate-3 transition-all duration-300 opacity-20"></div>
            
            {/* The Initial */}
            <span className="relative text-2xl font-black text-blue-600 dark:text-blue-400">
              H
            </span>
          </div>

          {/* The Text Brand */}
          <div className="flex flex-col leading-none">
            <span className="text-[22px] font-black tracking-tighter text-dark dark:text-white uppercase transition-colors group-hover:text-blue-600">
              Enayet
            </span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-gray-500 dark:text-gray-400 uppercase ml-0.5">
              Hossain
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {menuData.map((item) => (
              <li key={item.name} className="group relative">
                <Link href={item.href} className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2">
                  {item.name}
                  {item.submenu && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                </Link>

                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className="absolute top-full left-0 w-64 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white dark:bg-secondary-dark border dark:border-gray-700 rounded-xl shadow-xl overflow-hidden p-2">
                      {item.submenu.map((sub) => (
                        <Link key={sub.name} href={sub.href} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                          <span className="text-blue-600">{sub.icon}</span>
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href='/contact' className="hidden md:flex bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-5 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-transform">
            Get In Touch
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-gray-700 dark:text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 top-[72px] bg-white dark:bg-primary-dark lg:hidden transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-6 h-full overflow-y-auto">
          <ul className="space-y-4">
            {menuData.map((item) => (
              <li key={item.name} className="border-b dark:border-gray-800 pb-4">
                <div className="flex items-center justify-between" onClick={() => setActiveSubmenu(activeSubmenu === item.name ? null : item.name)}>
                  <Link href={item.href} className="text-xl font-semibold dark:text-white" onClick={() => !item.submenu && setIsOpen(false)}>
                    {item.name}
                  </Link>
                  {item.submenu && <ChevronDown className={`transition-transform ${activeSubmenu === item.name ? "rotate-180" : ""}`} />}
                </div>
                
                {item.submenu && activeSubmenu === item.name && (
                  <ul className="mt-4 space-y-3 pl-4">
                    {item.submenu.map((sub) => (
                      <li key={sub.name}>
                        <Link href={sub.href} className="flex items-center gap-3 text-gray-600 dark:text-gray-400 py-1" onClick={() => setIsOpen(false)}>
                          {sub.icon} {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link href='/contact' className="mt-8 flex w-full justify-center bg-blue-600 text-white py-4 rounded-xl font-bold" onClick={() => setIsOpen(false)}>
            Get In Touch
          </Link>
        </div>
      </div>
    </header>
  );
};