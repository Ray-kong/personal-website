import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/R-logos_black.png' // need to change this for "r" logo
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['R', 'a', 'y', ' ', 'k', 'o', 'n', 'g', '.']
  const jobArray = []

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>Hi,</span>
            <br />
            <span className={`${letterClass} _13`}>my</span>
            <span className={`${letterClass} _14`}>&nbsp;name</span>
            <span className={`${letterClass} _15`}>&nbsp;is</span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Game Developer / Software Enginner / Explorer</h2>
          <a
            href="/path/to/your/resume.pdf" // Replace with the actual path to PDF file
            className="flat-button"
            style={{ marginRight: '20px' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME
          </a>

          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
