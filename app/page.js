import React from 'react'
import { Hero } from './components/home/Hero'
import { RecentPostList } from './components/home/RecentPostList'

const page = () => {
  return (
    <div className='mt-20'>
      <Hero />
      <RecentPostList />
    </div>
  )
}

export default page