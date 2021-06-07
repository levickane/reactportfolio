import React from 'react';
import Logos from '../../logoInfo.json';

function Bio() {
  return (
    <div className="row">
      <h1>Bio Page</h1>
      <img
        className="col-lg-4 col-md-6 my-2"
        src="./images/Levi-Kane-Headshot.jpg"
        alt="levi kane headshot"
      />

      <p className="col-lg-8 col-md-6">
        My name is Levi Kane and I'm former World Class Athlete, turned Fitness
        Training Coach, turned Full Stack Developer. In 2012 I was introduced to
        the sport of ParaTriathlon where I would be racing against other
        athletes with the same level of disability as myself (above-knee
        amputee). In the year 2015 I had hit my personal peak with athletics
        getting a Gold medal at National championships, Silver medal at World
        Championships, a Bronze medal at Continental Championships and I became
        the first (and still the only) single-leg above-knee amputee to ever run
        a sub 20:00 5k in the entire World.
      </p>
      <p>
        After that, I ran my own fitness training and coaching business for 5
        years. Using my education in Kinesiology, paired with my story of
        inspiration, my business flourished! But then sadly, due to Covid-19, my
        business was brought to a screeching hault. And that's when I thought,{' '}
        <em>"Why don't I learn how to write code??"</em> My favorite clients
        were always developers, so asking them for advice on the matter only
        seemed natural. So after some guidence from seasoned veterans of the
        industry, I spent my Covid-cation immersing myself in the world of
        applicaiton development, learning as much as I could and even earning a
        short term paid-internship with company in which I was contracted to
        build their website using Vue and can be seen at
        <a
          href="https://www.newgameplus.live/"
          rel="noreferrer"
          target="_blank"
        >
          {' '}
          www.newgameplus.live{' '}
        </a>
        (with the mutual agreement to not continue employment after the contract
        was over). When my internship came to a close, the CTO told me that I
        had the same skill set as someone coming out of a bootcamp, but still
        recommended that I join one to not just sharpen my skillset, but also
        for both building the network of peers and for the professional coaching
        on how to acutally land a job within the incredibly competetive Tech
        industry.
      </p>
      <p>
        So that's how I found myself here! A student at Northwestern
        University's Coding Bootcamp. The web-applications listed below are all
        custom built by me, from scratch, through the University's curriculum.
        At the bottom you'll find my contact info as well as my resume which can
        viewed in a downloadable PDF
      </p>
      <div className="row justify-content-center g-6">
        <h3>Profiency In:</h3>
        {Logos.map((logo) => (
          <div className="card col-lg-3 col-5 p-2 mx-1 my-1">
            <img src={logo.image} alt={logo.id} key={logo.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bio;
