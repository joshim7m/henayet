import Image from "next/image";
import Link from "next/link";

const educationData = [
  {
    degree: "PhD in Islamic Banking and Finance",
    institution: "International Islamic University Malaysia (IIUM)",
    year: "In Progress",
    description: "Advanced research focusing on the intersection of Shari'ah-compliant finance and modern economic systems.",
    icon: "🎓",
  },
  {
    degree: "MBA in Data Analytics",
    institution: "Indiana Wesleyan University, USA",
    year: "In Progress",
    description: "Integrating business administration with advanced data science, predictive modeling, and strategic decision-making.",
    icon: "📊",
  },
  {
    degree: "MSc in Islamic Banking and Finance",
    institution: "IIUM Institute of Islamic Banking and Finance (IIiBF)",
    year: "Completed",
    description: "Specialized in Islamic social finance, financial inclusion, and ethical investment frameworks.",
    icon: "📜",
  },
];

export const Education = () => {
  return (
    <section className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0 py-12.5">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-white">
          Academic Journey
        </h2>
        <Link 
          href="/cv" 
          className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline transition-colors"
        >
          View Full CV
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {educationData.map((edu, index) => (
          <div 
            key={index} 
            className="p-6 rounded-[20px] bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex flex-col gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white dark:bg-dark-3 flex items-center justify-center shadow-sm border border-gray-100 dark:border-none">
                <span className="text-2xl">{edu.icon}</span> 
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                  {edu.year}
                </span>
                <h3 className="text-lg font-bold text-dark dark:text-white leading-tight">
                  {edu.degree}
                </h3>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                  {edu.institution}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {edu.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};