import React from 'react'
import Banner from '../Banner/Banner'
import Populer from '../Populer/Populer'
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs'
import Articles from '../Articles/Articles'

const Home = () => {
  return (
    <>
      <Banner/>
      <Populer/>
      <FeaturedJobs/>
      <Articles/>
    </>
  )
}

export default Home