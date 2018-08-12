import React from 'react'
import { Link } from 'react-router-dom'


const GameOverPage = () => {
  return (
    <div className="game-over-view container align-items-center">
      <div className="row align-items-center">
        <div className="col-12">
          <div className="row justify-content-center">
            <h1>Game Over</h1>
          </div>
        </div>
        <div className="col-12">
          <div className="row justify-content-center">
            <p>Vreme ti je isteklo</p>
          </div>
        </div>
        <div className="col-12">
          <div className="row justify-content-center">
            <Link to='/' type="button" className="btn align-self-center">Igraj Ispocetka</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameOverPage;