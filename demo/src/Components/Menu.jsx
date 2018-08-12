import React from 'react'
import { Link } from 'react-router-dom'


const Menu = () => {
    return (
      <div className="menu container align-items-center">
        <div className="row align-items-center">
          <div className="col-12">
              <div className="row justify-content-center">
                <Link to='/memory' type="button" className="btn align-self-center">Memory</Link>
              </div>
            </div>
          <div className="col-12">
            <div className="row justify-content-center">
              <Link to='/sliding_puzzle' type="button" className="btn align-self-center">Sliding Puzzle</Link>
            </div>
          </div>
          </div>
        </div>
    );
}

export default Menu;