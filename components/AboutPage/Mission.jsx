/* eslint linebreak-style: ["error", "windows"]  */
import React from 'react';
import g1 from '../../assets/g1.png';
import g2 from '../../assets/g2.png';
// import g3 from '../../assets/g3.png';
import Vect from '../../assets/Vect.png';
import './Mission.scss';

const Mission = () => (
  <section className="mission">
    <div className="container" style={{ marginTop: '20rem' }}>
      <div className="row justify-content-between home-landing">
        <div className="col-md-4">
          <img src={g1} className="img-fluid" alt="fluid" />
        </div>
        <div className="col-md-7 my-auto">
          <div className="box-1">
            <p className="title-3">
              OUR MISSION
            </p>
            <p className="para">
              To help businesses everywhere spend smarter.
            </p>
          </div>
        </div>
      </div>
      <img src={Vect} alt="..." className="vect" />
    </div>
    {/* *************************************************** */}
    <div className="container" style={{ marginTop: '0rem' }}>
      <div className="row justify-content-between home-landing">
        <div className="col-md-7 my-auto">
          <div className="box-1">
            <p className="title">
              WE BELIEVE
            </p>
            <p className="para">
              Trust + Control = how modern teams should work.
            </p>
            <p className="text-1">
              Comapnies that trust and empower their people are able
              to move faster, do better work and ultimately be more successful.
              Provide a simple framework and clear rules, and you set expectations
              that your team can easily meet. That's how we've built Raahee.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <img src={g2} className="img-fluid" alt="fluid" />
        </div>
      </div>
      <img src={Vect} alt="..." className="vect" />
    </div>
    {/* ***************************************************************************** */}
    <div className="container" style={{ marginTop: '0rem' }}>
      <div className="row justify-content-between home-landing">
        <div className="col-md-3 sol" />
        <div className="col-md-7 my-auto">
          <div className="box-1">
            <p className="title">
              OUR SOLUTION
            </p>
            <p className="para">
              An end-to-end platform instead of a complex stack of tools
            </p>
            <p className="text-1">
              People don't enjoy juggling a bunch of different systems.It
              slows them down creates more manual work and isn't a delightful experience.That's
              why we're giving companies one easy place to control, manage and track the entire
              spending process.
            </p>
          </div>
        </div>
      </div>
      <img src={Vect} alt="..." className="vect" />
    </div>
  </section>
);

export default Mission;
