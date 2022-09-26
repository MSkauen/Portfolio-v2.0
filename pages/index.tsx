import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
    overflow-scroll z-0">
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1 viewport-fit=cover"/>
        <title>Mathias Skauen Harestad</title>
      </Head>

    <Header/>

    {/* Hero */}
    <section id="hero" className='snap-start'>
      <Hero/>
    </section>
    {/* About */}

    <section id="about" className='snap-center'>
      <About/>
    </section>
    {/* Experience */}

    {/* Skills */}

    {/* Projects */}

    {/* Contact Me */}

    </div>
  )
}

export default Home
