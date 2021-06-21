import React from 'react';
import Logos from '../logoInfo.json';

function Home() {
  function MouseOver(event) {
    event.target.style.transform = 'scale(1.3)';
  }
  function MouseOut(event) {
    event.target.style.transform = 'scale(1)';
  }
  return (
    <div>
      <div className="card shadow rounded-0">
        <div className="card-header d-flex justify-content-between">
          <h5 className="pt-3">Levi Kane</h5>
          <img
            src="./logos/NU-seal.png"
            alt="nu-seal"
            style={{ height: '50px' }}
          />
        </div>
        <div className="card-body row justify-content-center">
          <p className="col-md-9">
            A Northwestern University Full Stack Bootcamp graduate. Dedicated
            and driven individual with experience producing high quality full
            stack code. Quick to learn, hungry to learn more, full of passion
            and dedication, Levi will stop at nothing to deliver his absolute
            best. With creativity and ingenuity to fuel his fire, grit and
            hustle are two things that he cannot live without.
          </p>
          <img
            className=" my-auto col-md-3 col-sm-6"
            src="./images/Levi-Kane-Headshot.jpg"
            alt="levi kane headshot"
          />{' '}
        </div>
      </div>
      <div className="row justify-content-center mt-3 mx-3 bg-light">
        {Logos.map((logo) => (
          <div
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
            className="card p-0 rounded-0 border-0  bg-transparent col-1 mx-2 my-1"
            key={logo.id}
          >
            <img src={logo.image} alt={logo.id} key={logo.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
