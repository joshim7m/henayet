import Link from "next/link";

export const About = () => {
  return (
    <section className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Detailed Bio */}
        <div className="lg:col-span-8">
          <h2 className="text-center md:text-start text-3xl font-bold text-dark dark:text-white mb-6">
            About Me
          </h2>
          <div className="flex flex-col gap-6 text-base leading-relaxed text-gray-600 dark:text-gray-400">
            <p>I am deeply intrigued by the rapid advancements in financial technology (FinTech) within the Conventional & Islamic financial ecosystem and am driven by a strong aspiration to contribute toward reducing socio-economic disparities across communities. My academic and professional journey is rooted in Islamic Economics, Banking, and Finance, with a comprehensive and interdisciplinary focus on Corporate Finance, Islamic Finance, Conventional Finance, FinTech-driven innovation, financial inclusion, data analytics, and sustainable economic development.</p>
            <p>I bring multiple years of professional experience in financial services, regulatory compliance, project management, AML/CFT implementation, financial operations, and stakeholder engagement. My work has consistently focused on supporting underserved communities through responsible financial practices and data-informed decision-making.</p>
            <p>Beyond academia and consultancy, I am deeply committed to social development and community empowerment. I serve as the Co-Founder and President of Friends’ Foundation, the Co-Founder of Global Society for Islamic Social Finance (GSISF), and the Executive Director of YouthHub Global, these social organizations dedicated to youth development, social welfare, and community service.  Through these initiatives, I strive to promote leadership, ethical values, and sustainable social impact. My vision is to integrate ethical finance, technological innovation, and research-driven insights to advance inclusive, responsible, and sustainability-focused economic development.</p>
          </div>
        </div>

        {/* Right Column: Quick Info / Highlights */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="p-2 md:p-8 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10">
            <h3 className="text-center md:text-start text-xl font-bold text-dark dark:text-white mb-4">Focus Areas</h3>
            <ul className="flex flex-wrap gap-2">
              {["Islamic Finance", "FinTech", "Data Analytics", "Sustainable Dev", "Blockchain", "Compliance"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-medium bg-white dark:bg-dark-3 border border-gray-200 dark:border-white/10 rounded-full text-blue-600 dark:text-blue-400">
                  {tag}
                </span>
              ))}
            </ul>
            
            <hr className="my-6 border-gray-200 dark:border-white/10" />
            
            <h3 className="text-center md:text-start text-xl font-bold text-dark dark:text-white mb-4">Key Certifications</h3>
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