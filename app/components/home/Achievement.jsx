import Link from "next/link";

const skills = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", 
  "Node.js", "Python", "Data Analysis", "SQL", "Git"
];

const achievements = [
  {
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2024",
    icon: "☁️"
  },
  {
    title: "Best Researcher Award",
    issuer: "University Symposium",
    date: "2023",
    icon: "🏆"
  }
];

export const Achievement = () => {
  return (
    <section className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0 py-12.5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Skills Column - Takes 1/3 space */}
        <div className="lg:col-span-1">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-dark dark:text-gray-2">Skills</h2>
            <Link href="/skills" className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline">
              View All
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span 
                key={skill} 
                className="px-4 py-2 rounded-xl bg-gray dark:bg-secondary-dark text-dark dark:text-gray-3 border border-gray-3 dark:border-dark-3 text-sm font-medium transition-transform hover:-translate-y-1"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Training & Achievements Column - Takes 2/3 space */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-dark dark:text-gray-2">Training & Achievements</h2>
            <Link href="/achievements" className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline">
              See Credentials
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((item, index) => (
              <div 
                key={index}
                className="group p-5 rounded-[20px] bg-white dark:bg-dark-2 border border-gray-3 dark:border-dark-3 flex items-center gap-4 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-gray dark:bg-secondary-dark flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-dark dark:text-gray-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {item.issuer} • {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};