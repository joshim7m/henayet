import Image from "next/image";
import Link from "next/link";

const educationData = [
  {
    degree: "Master of Science in Data Science",
    institution: "University Name Here",
    year: "2021 - 2023",
    description: "Specialized in Machine Learning and Big Data analytics. Completed thesis on predictive modeling.",
    icon: "/icons/grad-cap.svg", // Replace with your icon or logo
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Another University",
    year: "2017 - 2021",
    description: "Focus on software engineering and database management systems.",
    icon: "/icons/grad-cap.svg",
  },
];

export const Education = () => {
  return (
    <section className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0 py-12.5">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-gray-2">
          Education
        </h2>
        <Link 
          href="/education" 
          className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
        >
          View Full Details
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationData.map((edu, index) => (
          <div 
            key={index} 
            className="p-6 rounded-[20px] bg-gray dark:bg-secondary-dark border border-transparent hover:border-gray-3 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white dark:bg-dark-3 flex items-center justify-center shadow-sm">
                {/* Fallback to a Stock Image/Icon */}
                <span className="text-2xl">🎓</span> 
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  {edu.year}
                </span>
                <h3 className="text-xl font-bold text-dark dark:text-gray-2">
                  {edu.degree}
                </h3>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {edu.institution}
                </p>
                <p className="mt-2 text-sm leading-relaxed dark:text-gray-4">
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