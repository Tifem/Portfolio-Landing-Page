import React from 'react'
import About from '../About'
import Hero from './components/Hero'
import Projects from './components/Projects'

const Home = () => {
  return (
    <main className='home'>
    <Hero/>
    <Projects/>
    {/* <About/> */}
    </main>
  )
}

export default Home