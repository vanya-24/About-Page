/* eslint linebreak-style: ["error", "windows"]  */
import React from 'react';
import './Values.scss';

const Values = () => (
  <section className="values">
    <div className="container" style={{ marginTop: '20rem' }}>
      <h2>Our shared values keep us connected & guide us as one team</h2>
    </div>
    <div className="container-1">
      <div className="card align-items-center" style={{ width: '50rem' }}>
        <ul className="list-group list-group-flush w-100 align-items-stretch">
          <li className="list-group-item text-center d-inline-block">
            <h4>Choose positivity</h4>
            <br />
            <p>We’re problem solvers, not problem finders.</p>
          </li>
          <li className="list-group-item text-center d-inline-block">
            <h4>Go for it boldly and without fear of failure</h4>
            <br />
            <p>Ambitious goals are only reached when you’re comfortable with taking risks.</p>
          </li>
          <li className="list-group-item text-center d-inline-block">
            <h4>We’re all owners</h4>
            <br />
            <p>Every employee is empowered to make an impact.</p>
          </li>
          <li className="list-group-item text-center d-inline-block">
            <h4>Be kind, humble & trustworthy</h4>
            <br />
            <p>Trust is the glue that allows us to achieve great things together.</p>
          </li>
          <li className="list-group-item text-center d-inline-block">
            <h4>Proactively seek out ways to grow</h4>
            <br />
            <p>Learning is a lifelong process.</p>
          </li>
          <li className="list-group-item text-center d-inline-block">
            <h4>Always run the extra mile</h4>
            <br />
            <p>For the customer, your team, and yourself.</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Values;
