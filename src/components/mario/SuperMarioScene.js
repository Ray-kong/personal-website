import React from 'react'
import './SuperMarioScene.css' // Assuming you have an external CSS file

const SuperMarioScene = () => {
  return (
    <div className="sky">
      <div className="scorebar">
        <p>
          <span className="topline-mario">MARIO</span>
          <span className="topline-world">WORLD</span>
          <span className="topline-time">TIME</span>
          <span className="bottomline-score">OOOOOO</span>
          <span className="bottomline-coin">
            <img
              src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/Coin.gif"
              alt="Coin"
              height="40px"
            />{' '}
            x OO
          </span>
          <span className="bottomline-world">1 - 1</span>
          <span className="bottomline-time">111</span>
        </p>
      </div>

      <img
        className="cloud"
        src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/CloudSingle.gif"
        alt="Cloud"
      />
      <img
        className="cloud"
        src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/CloudDouble.gif"
        alt="Cloud"
      />
      <img
        className="cloud"
        src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/CloudTriple.gif"
        alt="Cloud"
      />

      <div className="ground">
        <div className="skyblocks">
          <img
            className="brick"
            src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/Bricks.gif"
            alt="Brick"
            height="70px"
          />
          <img
            className="brick"
            src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/QuestionBlock.gif"
            alt="Question Block"
            height="70px"
          />
          <img
            className="brick"
            src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/Bricks.gif"
            alt="Brick"
            height="70px"
          />
          <img
            className="brick"
            src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/Bricks.gif"
            alt="Brick"
            height="70px"
          />
        </div>

        <img
          className="bush"
          src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/BushSingle.gif"
          alt="Bush"
          height="70px"
        />
        <img
          className="bush"
          src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/BushDouble.gif"
          alt="Bush"
          height="70px"
        />
        <img
          className="bush"
          src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/BushSingle.gif"
          alt="Bush"
          height="70px"
        />

        <div className="mario"></div>
      </div>
    </div>
  )
}

export default SuperMarioScene
