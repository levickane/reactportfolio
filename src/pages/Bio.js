import React from 'react';

function Bio() {
  return (
    <div className="container row gx-0 bg-light p-2">
      <h1 className="my-2">Levi Kane</h1>
      <p className="col-lg-9 col-md-6">
        My name is Levi Kane and I'm former World Class Athlete, turned Fitness
        Training Coach, turned Full Stack Developer. After losing my leg in a
        motorcycle accident in 2009, I had finally found my way in my newly
        amputated life in 2012, when I was introduced to the sport of
        ParaTriathlon. Here, I would be racing against other athletes with the
        same level of disability as myself (above-knee amputee). In the year
        2015 I had hit my personal peak with athletics getting a Gold medal at
        National championships, Silver medal at World Championships, a Bronze
        medal at Continental Championships and I became the first single-leg
        above-knee amputee to ever run a sub 20:00 5k in the entire World. After
        that, I ran my own fitness training and coaching business for 5 years.
        Using my education in Kinesiology, paired with my story of inspiration,
        my business flourished!
      </p>
      <img
        className="col-lg-3 col-md-6 my-2 p-3 my-auto"
        src="./images/Levi-Kane-Headshot.jpg"
        alt="levi kane headshot"
      />
      <p className="">
        But then sadly, due to Covid-19, my business was brought to a screeching
        hault. And that's when I thought,{' '}
        <em>"Why don't I learn how to write software??"</em> My favorite clients
        were always developers, so asking them for advice on the matter only
        seemed natural. So after some guidence from seasoned veterans of the
        industry, I spent my Covid-cation immersing myself in the world of
        applicaiton development, learning as much as I could and even earning a
        short term paid-internship with company in which I was contracted to
        build their website using Vue and can be seen at
        <a
          href="https://www.newgameplus.live/"
          rel="noreferrer"
          target="_blank">
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
        University's Coding Bootcamp. With the exception of the PechaKucha
        project, all of the web-applications displayed on my projects page are
        custom built by me, from scratch. On the contact page you'll find all of
        my contact info as well as my resume which can be viewed in a
        downloadable PDF
      </p>
    </div>
  );
}

export default Bio;
