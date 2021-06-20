import React from 'react';

function Home() {
  return (
    <div className="card shadow rounded-0">
      <h5 className="card-header">Who is he?</h5>
      <div className="card-body row justify-content-center">
        <p className="col-md-9">
          Dedicated and driven individual with experience producing high quality
          full stack code. Quick to learn, hungry to learn more, full of passion
          and dedication, Levi will stop at nothing to deliver his absolute
          best. With creativity and ingenuity to fuel his fire, grit and hustle
          are two things that he cannot live without,
        </p>
        <img
          className=" my-auto col-md-3 col-sm-6"
          src="./images/Levi-Kane-Headshot.jpg"
          alt="levi kane headshot"
        />{' '}
      </div>
    </div>
  );
}

export default Home;
