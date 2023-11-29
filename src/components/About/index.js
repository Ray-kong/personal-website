import { useEffect, useState } from 'react'
import {
  faUnity,
  faJava,
  faGitAlt,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { faCuttlefish } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            👨‍💻As a Computer Science and Game Development major at Northeastern
            University, my academic journey has been marked by a deep
            fascination with object-oriented design and programming. I
            particularly enjoyed classes like Object-Oriented Design and
            Programming in C++, where I got to delve into the intricacies of
            these languages. My coursework has not only solidified my
            understanding of fundamental concepts but also allowed me to explore
            complex problem-solving techniques, preparing me for real-world
            challenges in software development.
          </p>
          <p align="LEFT">
            🚀Currently, I am expanding my expertise in Computer Science with a
            specific focus on the top-down approach in C++ and exploring the
            capabilities of Rust. This exploration is driven by my desire to
            deepen my understanding of system-level programming and its
            practical applications. My journey into these areas is not just
            about gaining knowledge but about mastering the skills needed to
            innovate and excel in the ever-evolving field of computer science.
          </p>
          <p>
            💡My choice to major in Game Development was inspired by visually
            stunning games like 'The Legend of Zelda: Breath of the Wild',
            'Overwatch', and 'Super Mario Galaxy'. The compelling visual
            narratives and artistic excellence in these games sparked my passion
            for visual storytelling. This passion now drives my academic and
            creative endeavors, as I aim to contribute to the gaming industry by
            creating games that are not only technologically advanced but also
            rich in story and visual appeal.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faUnity} color="#000000" />
            </div>
            <div className="face2">
              <div style={{ transform: 'rotate(270deg)' }}>
                <FontAwesomeIcon
                  icon={faCuttlefish}
                  color="#00549D"
                  style={{ fontSize: '0.8em' }}
                />
                <span
                  style={{
                    fontSize: '0.8em',
                    color: '#00549D',
                    userSelect: 'none',
                  }}
                >
                  ++
                </span>
              </div>
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJava} color="#5382a1" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faPython} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
