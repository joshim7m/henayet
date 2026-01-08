import { social_links } from "@/lib/constants";
import Image from "next/image";

export const Hero = () => {
  return (
    <div>
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0 pb-12.5 pt-20">
        <div className="rounded-[20px] relative overflow-hidden z-10">
          <div>
            <div className="absolute bottom-0 left-0 rounded-[20px] w-full h-full bg-gray dark:bg-secondary-dark"></div>
          </div>

          <div className="max-w-[880px] mx-auto py-7.5 sm:py-10 lg:py-15 relative z-1">
            <div className="flex flex-col sm:flex-row items-center gap-7.5 lg:gap-15">
              <div className="max-w-[277px] w-full h-[277px] rounded-full flex items-center justify-center border border-gray-3">
                <div className="max-w-[165px] w-full h-[165px] shadow-img rounded-full overflow-hidden">
                  <Image
                    src="/hm-enayet.png"
                    alt="Mohamamd Enayet Hossain"
                    width={165}
                    height={165}
                  />
                </div>
              </div>

              <div className="max-w-[593px] w-full flex flex-col gap-3">
                <h1 className="text-center md:text-left text-2xl md:text-4xl text-dark dark:text-gray-2">
                   Mohammad <span className="font-bold">  Enayet Hossain</span>
                </h1>
                <p className="text-center md:text-left dark:text-gray-4">
                 Researcher and PhD candidate specializing in the intersection of Islamic Finance, FinTech, and Data Analytics. I bridge ethical financial systems with technological innovation to drive sustainable economic development and global financial inclusion.
                </p>

                <div className="flex items-center gap-3">
                 <div className="flex items-center justify-center gap-3 mt-3">
                       {social_links.map((item, index) => (
                         <a key={index} href={item.url} title={item.name} className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-2 transition-all duration-200 hover:text-dark">
                             {item.icon}
                         </a>
                       ))}
                     </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
