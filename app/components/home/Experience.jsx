import Link from "next/link";

const experiences = [
  {
    title: "Senior Research Analyst",
    company: "Data Insights Corp",
    location: "Remote",
    period: "Jan 2023 — Present",
    description: "Leading a team of 5 to analyze emerging tech trends. Improved data processing efficiency by 40% using automated Python scripts.",
    tools: ["React", "Node.js", "Python", "Tableau"]
  },
  {
    title: "Full Stack Developer",
    company: "Tech Startups Inc",
    location: "Dhaka, BD",
    period: "Jun 2021 — Dec 2022",
    description: "Developed and maintained scalable web applications. Collaborative environment focused on Agile methodologies.",
    tools: ["Next.js", "TypeScript", "PostgreSQL"]
  }
];

export const Experience = () => {
  return (
    <section className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0 py-12.5">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-gray-2">
          Professional Experience
        </h2>
        <Link 
          href="/experience" 
          className="px-5 py-2 rounded-full border border-gray-3 dark:border-dark-3 text-sm font-medium hover:bg-dark hover:text-white dark:hover:bg-white dark:hover:text-dark transition-all"
        >
          Detailed Resume
        </Link>
      </div>

      <div className="relative border-l-2 border-gray-2 dark:border-dark-3 ml-4 md:ml-6">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 ml-8 relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white dark:bg-secondary-dark border-4 border-blue-600 dark:border-blue-400"></div>
            
            <div className="flex flex-col gap-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                <h3 className="text-xl font-bold text-dark dark:text-gray-2">
                  {exp.title}
                </h3>
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full w-fit">
                  {exp.period}
                </span>
              </div>
              
              <div className="text-lg font-medium text-gray-700 dark:text-gray-300">
                {exp.company} <span className="text-gray-400 mx-2">•</span> {exp.location}
              </div>
              
              <p className="max-w-[800px] mt-2 leading-relaxed dark:text-gray-4">
                {exp.description}
              </p>

              {/* Skills/Tools Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tools.map((tool, i) => (
                  <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray dark:bg-gray-700 text-gray-600 dark:text-gray-100 border border-gray-3 dark:border-dark-3">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};