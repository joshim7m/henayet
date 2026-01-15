import { getCategories } from '@/lib'
import Link from 'next/link'
import React from 'react'

export const Categories = async () => {

  const categories = await getCategories();

  return (
    <div className="max-w-[370px] w-full rounded-[10px] border border-gray-3 p-4 sm:p-7.5 lg:p-10">
      <h4 className="mb-8 font-semibold text-custom-4 text-dark">
        Explore Topics
      </h4>

      <div className="flex flex-col gap-3">
        {categories.map((item, index) => (
          <Link key={index} href="#" className="flex items-center justify-between gap-2 group">
          <p className="duration-200 ease-in group-hover:text-dark">
            {item.name}
          </p>
          <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-dark group-hover:border-dark">
            {item.postCount}
          </span>
        </Link>
        ))}
      </div>
    </div>
  )
}
