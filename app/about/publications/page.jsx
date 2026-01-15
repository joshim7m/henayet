import React from 'react'

const Page = () => {
  const publications = [
    {
      title: "The Role of Islamic Fintech in the Adoption of Internet Banking in the Islamic Banking Industry",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=TyhhVXsAAAAJ&sortby=pubdate&citation_for_view=TyhhVXsAAAAJ:IjCSPb-OGe4C",
      category: "FinTech",
    },
    {
      title: "Examine the Awareness and Knowledge on Public Perception Towards Zakāt Management During the Post-Pandemic Period in Bangladesh",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=TyhhVXsAAAAJ&sortby=pubdate&citation_for_view=TyhhVXsAAAAJ:uWQEDVKXjbEC",
      category: "Social Finance",
    },
    {
      title: "Islamic Banking and Conventional Banking: A Comparative Study in Bangladesh",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=TyhhVXsAAAAJ&sortby=pubdate&citation_for_view=TyhhVXsAAAAJ:XiSMed-E-HIC",
      category: "Banking",
    },
    {
      title: "The Significance of Islamic Finance and Banking for the Socio-Economic Development in Bangladesh",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=TyhhVXsAAAAJ&sortby=pubdate&citation_for_view=TyhhVXsAAAAJ:9yKSN-GCB0IC",
      category: "Economic Development",
    },
    {
      title: "Exploring green human resource management to achieve sustainability in the banking industry of Bangladesh",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=TyhhVXsAAAAJ&sortby=pubdate&citation_for_view=TyhhVXsAAAAJ:KxtntwgDAa4C",
      category: "Sustainability",
    },
    {
      title: "The Role of Islamic Social Finance in Mitigating the Poverty Levels in the Post-Pandemic Period",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=TyhhVXsAAAAJ&sortby=pubdate&citation_for_view=TyhhVXsAAAAJ:W7OEmFMy1HYC",
      category: "Social Finance",
    },
    {
      title: "FinTech Innovation and Financial Inclusion in Malaysia: A Systematic Review",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=TyhhVXsAAAAJ&sortby=pubdate&citation_for_view=TyhhVXsAAAAJ:p2g8aNsByqUC",
      category: "FinTech",
    },
    {
      title: "Social and Environmental Protection in Islamic Social Enterprise: A Proposed Model for Sustainability",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=TyhhVXsAAAAJ&sortby=pubdate&citation_for_view=TyhhVXsAAAAJ:Tiz5es2fbqcC",
      category: "Sustainability",
    },
    {
      title: "Leveraging Green AI for Sustainable Resource Management in Islamic Finance: Bridging the Gap Between Ethical Finance and Environmental Sustainability",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=TyhhVXsAAAAJ&sortby=pubdate&citation_for_view=TyhhVXsAAAAJ:K3LRdlH-MEoC",
      category: "Green AI",
    },
    {
      title: "Advancing Ethical Stewardship: A green AI Framework for Optimizing Sustainable Investments in Islamic Financial Systems",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=TyhhVXsAAAAJ&sortby=pubdate&citation_for_view=TyhhVXsAAAAJ:l7t_Zn2s7bgC",
      category: "Green AI",
    },
    {
      title: "Islamic Social Finance for Sustainable Economic Growth in Bangladesh",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=TyhhVXsAAAAJ&sortby=pubdate&citation_for_view=TyhhVXsAAAAJ:WbkHhVStYXYC",
      category: "Economic Growth",
    },
    {
      title: "Enhancing entrepreneurial security in cryptocurrency wallets using cloud technology",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=TyhhVXsAAAAJ&sortby=pubdate&citation_for_view=TyhhVXsAAAAJ:738O_yMBCRsC",
      category: "Blockchain",
    }
  ];

  return (
    <section className="relative w-full bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="pt-[150px] min-h-[calc(100vh-80px)] py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Header Section */}
          <div className="mb-12">
            <h2 className="text-sm font-bold tracking-wide text-blue-600 dark:text-blue-400 uppercase mb-2">
              Academic Contributions
            </h2>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
                  Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Publications</span>
                </h1>
                <div className="w-20 h-1 bg-blue-600 mt-4 rounded-full"></div>
              </div>
              
              <a 
                href="https://scholar.google.com/citations?user=TyhhVXsAAAAJ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm"
              >
                <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M5.242 13.769L0.5 9.5 12 0l11.5 9.5-4.742 4.269C17.403 12.733 14.775 12 12 12s-5.403 0.733-6.758 1.769zM12 14c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z"/>
                </svg>
                Google Scholar Profile
              </a>
            </div>
          </div>

          {/* Publications List */}
          <div className="grid grid-cols-1 gap-4">
            {publications.map((pub, index) => (
              <div 
                key={index}
                className="group relative bg-white dark:bg-slate-900 p-5 md:p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded">
                      {pub.category}
                    </span>
                    <span className="text-slate-300 dark:text-slate-700">|</span>
                    <span className="text-xs text-slate-500 font-medium">Research Paper</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {pub.title}
                  </h3>
                </div>

                <div className="shrink-0">
                  <a 
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-6 py-2.5 bg-slate-900 dark:bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 transition-all shadow-md group-hover:shadow-blue-500/20"
                  >
                    View Citation
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Interested in collaborating on research? 
              <a href="mailto:your-email@example.com" className="text-blue-600 dark:text-blue-400 font-bold hover:underline ml-1">
                Let's connect.
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Page