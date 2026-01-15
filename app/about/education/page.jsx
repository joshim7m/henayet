import React from 'react'

const Page = () => {
  // Structured data for cleaner mapping
  const education = [
    {
      id: 1,
      degree: "MBA in Data Analytics",
      institution: "Indiana Wesleyan University, USA",
      status: "Current",
      color: "blue",
      description: "Pursuing a strong focus on financial analytics and data-driven decision-making."
    },
    {
      id: 2,
      degree: "PhD in Islamic Banking & Finance",
      institution: "Institute of Islamic Banking and Finance, IIUM",
      status: "Result Appeared",
      color: "emerald",
      description: "Specialized in advanced research methodologies within the Islamic financial sector."
    },
    {
      id: 3,
      degree: "MSc in Islamic Banking & Finance",
      institution: "International Islamic University Malaysia",
      status: "Completed",
      color: "slate",
      description: "Built a solid foundation in financial principles and Shariah-compliant economics."
    },
    {
      id: 4,
      degree: "Multidisciplinary Foundation",
      institution: "Various Institutions",
      status: "Completed",
      color: "slate",
      description: "Qualifications in Law, Education, and Science supporting an analytical and regulatory approach."
    }
  ];

  const researchInterests = [
    "Conventional Finance",
    "Islamic Finance",
    "Islamic Economics",
    "FinTech",
    "Financial Inclusion",
    "Blockchain Applications",
    "Sustainable Development"
  ];

  return (
    <section className="relative w-full bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Layout Constraints:
         1. pt-[80px]: Offsets fixed header
         2. min-h-[calc(100vh-80px)]: Ensures full screen coverage
      */}
      <div className="pt-[150px] min-h-[calc(100vh-80px)] flex flex-col justify-center py-12">
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-wide text-blue-600 dark:text-blue-400 uppercase mb-2">
              Academic Background
            </h2>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Research</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Education Cards (8 Cols) */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((item) => (
                <div 
                  key={item.id} 
                  className="group relative bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 shadow-sm hover:shadow-xl dark:hover:shadow-blue-900/10 transition-all duration-300 flex flex-col"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-blue-50 dark:bg-slate-800 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                      {/* Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </div>
                    {/* Status Badge */}
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full border 
                      ${item.status === 'Current' 
                        ? 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800' 
                        : item.status === 'Result Appeared'
                        ? 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800'
                        : 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.degree}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">
                    {item.institution}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-auto">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Column: Research Interests (4 Cols) */}
            <div className="lg:col-span-4 flex flex-col">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Research Focus</h3>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                  My research centers on the intersection of modern finance, technology, and sustainable development, with publications in internationally indexed journals.
                </p>

                <div className="flex flex-wrap gap-2">
                  {researchInterests.map((interest, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1.5 text-xs font-medium rounded bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 dark:hover:bg-blue-900/20 dark:hover:text-blue-400 dark:hover:border-blue-800 transition-colors cursor-default"
                    >
                      # {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Page