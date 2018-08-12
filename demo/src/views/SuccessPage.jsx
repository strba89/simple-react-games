import React from 'react'
import { Link } from 'react-router-dom'


const SuccessPage = () => {
  return (
  <div className="success-view container align-items-center">
    <div className="row align-items-center">
      <div className="col-12">
        <div className="row justify-content-center">
          <h1>Čestitamo!!!</h1>
        </div>
      </div>
      <div className="col-12">
        <div className="row justify-content-center">
          <p>Prešli ste igricu</p>
        </div>
      </div>
      <div className="col-12">
        <div className="row justify-content-center">
          <p>Vreme:</p>
        </div>
      </div>
      <div className="col-12">
        <div className="row justify-content-center">
          <p>Potezi:</p>
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
};

export default SuccessPage;