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
        <h5 className="card-header">Who is he?</h5>
        <div className="card-body row justify-content-center">
          <p className="col-md-9">
            Dedicated and driven individual with experience producing high
            quality full stack code. Quick to learn, hungry to learn more, full
            of passion and dedication, Levi will stop at nothing to deliver his
            absolute best. With creativity and ingenuity to fuel his fire, grit
            and hustle are two things that he cannot live without.
          </p>
          <img
            className=" my-auto col-md-3 col-sm-6"
            src="./images/Levi-Kane-Headshot.jpg"
            alt="levi kane headshot"
          />{' '}
        </div>
      </div>
      <div className="row justify-content-center mt-2 mx-3">
        {Logos.map((logo) => (
          <div
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
            className="card p-0 rounded-0 shadow-sm col-1 mx-2 my-1"
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
