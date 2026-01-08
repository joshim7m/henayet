import Link from "next/link";

export const About = () => {
  return (
    <section className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Detailed Bio */}
        <div className="lg:col-span-8">
          <h2 className="text-3xl font-bold text-dark dark:text-white mb-6">
            About Me
          </h2>
          <div className="flex flex-col gap-6 text-base leading-relaxed text-gray-600 dark:text-gray-400">
            <p>
              I am <span className="font-semibold text-dark dark:text-white">Mohammad Enayet Hossain</span>, 
              a researcher and professional bridging the gap between <span className="text-blue-600">Islamic Finance, FinTech, and Data Analytics</span>. 
              Currently, I serve as a Research Associate at the IIUM Institute of Islamic Banking and Finance (IIiBF), 
              contributing to global research and industry collaboration.
            </p>
            <p>
              My professional journey includes impactful roles as a Project Officer with <span className="font-medium text-dark dark:text-white">The World Bank (IPFF)</span> 
              and leadership positions at CBL Money Transfer. I specialize in regulatory compliance, AML/CFT, 
              and financial operations designed to support underserved communities.
            </p>
            <p>
              With a PhD in progress and an MBA in Data Analytics from Indiana Wesleyan University, 
              my research on blockchain and sustainable development has been published in Q1 journals like 
              <span className="italic"> Innovation and Knowledge</span> and <span className="italic">IEEE Access</span>.
            </p>
            <p>
              Driven by social impact, I lead <span className="font-medium text-dark dark:text-white">Friends’ Foundation</span> 
              and <span className="font-medium text-dark dark:text-white">YouthHub Global</span>, 
              striving to integrate ethical finance with technological innovation for a more inclusive economic future.
            </p>
          </div>
        </div>

        {/* Right Column: Quick Info / Highlights */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="p-8 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10">
            <h3 className="text-xl font-bold text-dark dark:text-white mb-4">Focus Areas</h3>
            <ul className="flex flex-wrap gap-2">
              {["Islamic Finance", "FinTech", "Data Analytics", "Sustainable Dev", "Blockchain", "Compliance"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-medium bg-white dark:bg-dark-3 border border-gray-200 dark:border-white/10 rounded-full text-blue-600 dark:text-blue-400">
                  {tag}
                </span>
              ))}
            </ul>
            
            <hr className="my-6 border-gray-200 dark:border-white/10" />
            
            <h3 className="text-xl font-bold text-dark dark:text-white mb-4">Key Certifications</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <span className="text-blue-600">☁️</span>
                <span>AWS Cloud Practitioner</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-blue-600">📊</span>
                <span>Google Data Analytics</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-blue-600">🛡️</span>
                <span>AML/CFT Professional</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};