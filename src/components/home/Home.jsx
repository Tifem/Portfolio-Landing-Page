import React from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import GitHubProfile from '../GitHubProfile'

const Home = () => {
  return (
    <main className='home'>
    <Hero/>
    <Projects/>
    <GitHubProfile/>
    </main>
  )
}

export default Home