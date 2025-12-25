import React from 'react'
import { Hero } from './components/home/Hero'
import { Education } from './components/home/Education'
import { Experience } from './components/home/Experience'
import { Achievement } from './components/home/Achievement'
import { RecentPostList } from './components/home/RecentPostList'

const page = () => {
  return (
    <div className='mt-20'>
      <Hero />
      <Education />
      <Experience />
      <Achievement />
      <RecentPostList />
    </div>
  )
}

export default page