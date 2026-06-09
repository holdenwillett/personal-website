import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import { motion } from "framer-motion"
import Head from "next/head"
import Navbar from "../components/navbar"
import Landing from "../components/landing"
import About from "../components/about"
import Skills from "../components/skills"
import Experience from "../components/experience"
import Contact from "../components/contact"

export default function Index() {
  const router = useRouter()

  useEffect(() => {
    router.push('/');
  }, []);

  return (
    <>
      <ParallaxProvider>
        <Head>
          <title>Holden Willett</title>
          <meta name="description" content="An electrical engineer and software developer, student at the University of Iowa striving to build impactful solutions."/>
          <meta name="keywords" content="University of Iowa, Electrical Engineering, Computer Science, Holden Willett, Software Engineer"/>
          <meta name="author" content="Holden Willett"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Navbar/>
        <Parallax speed={-25}>
          <Landing id="home"/>
        </Parallax>
        <Parallax>
          <div className="z-5 relative">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230" className="absolute bottom-0" aria-hidden="true">
                <path fill="#f3f4f5" fillOpacity="0.9" d="M0,32L60,74.7C120,117,240,203,360,202.7C480,203,600,117,720,106.7C840,96,960,160,1080,176C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
              </svg>
              <motion.svg 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                duration: 0.4,
                delay: 2.1,
                }}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1240 300" className="absolute bottom-0" aria-hidden="true">
                <path fill="#f3f4f5" fillOpacity="0.2" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </motion.svg>
              <motion.svg
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                duration: 0.4,
                delay: 2.2,
                }}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280" className="absolute bottom-0">
                <path fill="#f3f4f5" fillOpacity="0.2" d="M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,101.3C672,128,768,224,864,250.7C960,277,1056,235,1152,197.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </motion.svg>
          </div>
          <About id="about"/>
          <div className="z-0 relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 90 1440 144" className="relative top-0">
            <path fill="#e5e6e8" fillOpacity="1" d="M0,224L48,218.7C96,213,192,203,288,192C384,181,480,171,576,170.7C672,171,768,181,864,192C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
          </div>
          <Skills id="skills"/>
          <Experience id="experience"/>
          <Contact id="contact"/>
        </Parallax>
      </ParallaxProvider>
    </>
  )
}
