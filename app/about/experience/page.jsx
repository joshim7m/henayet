import React from 'react';

const Page = () => {
  // Breaking down your text into structured data for better UI rendering
  const experiences = [
    {
      id: 1,
      role: "Research Associate & Researcher",
      company: "IIUM (Malaysia) & MNC (New York, USA)",
      period: "Current",
      description: "I currently serve as a Research Associate at the Institute of Islamic Banking and Finance, IIUM, Malaysia, where I contribute to academic research and finance-related projects. In parallel, I work as a researcher at a multinational company in New York, USA.",
      active: true,
    },
    {
      id: 2,
      role: "Domain Expert & Business Analyst",
      company: "CBL Money Transfer (Malaysia)",
      period: "Previous",
      description: "Previously, I spent several years at CBL Money Transfer (Malaysia) as a Domain Expert, Business Analyst, and Branch In-Charge. I managed financial operations, ensured AML/CFT compliance, and coordinated with headquarters and regulatory authorities.",
      active: false,
    },
    {
      id: 3,
      role: "Project Officer",
      company: "Development Organization (Bangladesh)",
      period: "Earlier",
      description: "Earlier, I worked as a Project Officer with a reputed development organization in Bangladesh, supporting development finance initiatives, NGO collaboration, and services for underserved communities.",
      active: false,
    },
  ];

  return (
    <section className="relative w-full bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Layout Constraints:
        1. pt-[80px]: Pushes content down to clear the fixed header.
        2. min-h-[calc(100vh-80px)]: Ensures the footer is pushed to bottom if content is short.
      */}
      <div className="pt-[150px] min-h-[calc(100vh-80px)] flex flex-col justify-center py-12">
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-wide text-blue-600 dark:text-blue-400 uppercase mb-2">
              Career History
            </h2>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Experience</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Timeline Container */}
          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent dark:before:via-slate-700">
            
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                
                {/* Icon / Dot on Timeline */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 transition-colors duration-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:static">
                  {exp.active ? (
                     <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-500 dark:text-slate-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                     </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-slate-500 dark:text-slate-400 group-hover:text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>

                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:shadow-blue-900/10 transition-all duration-300 ml-14 md:ml-0">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${
                      exp.active 
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" 
                      : "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-400"
                    }`}>
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
                    {exp.role}
                  </h3>
                  <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    {exp.company}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Page