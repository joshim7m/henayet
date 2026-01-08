import React from 'react'
import { Hero } from './components/home/Hero'
import { About } from './components/home/About'
import { RecentPostList } from './components/home/RecentPostList'

const page = () => {
  return (
    <div className='mt-20'>
      <Hero />
      <About />
      <RecentPostList />
    </div>
  )
}

export default page