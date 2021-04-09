import React from 'react';
import { Helmet } from 'react-helmet';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import Mission from '../../components/AboutPage/Mission';
import Values from '../../components/AboutPage/Values';
import Story from '../../components/AboutPage/Story';
import './aboutPage.scss';

const AboutPage = () => (
  <section className="aboutPage">
    <Helmet>
      <title>Raahee | About</title>
    </Helmet>
    <div className="outside">
      <div className="rect">
        <div className="box-2">
          <p className="title-1">
            About Raahee
          </p>
          <div className="row justify-content-between nav">
            <Router>
              <div>
                <nav className="navbar navbar-expand-lg navbar-fixed-top">
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        <Link to="/" className="nav-link sec-1">Mission</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/Values" className="nav-link sec"> Values</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/Story" className="nav-link sec">Story</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
                <hr />
                <Switch>
                  <Route exact path="/" component={Mission} />
                  <Route exact path="/" component={Mission}>
                    <Redirect to="/Mission" />
                  </Route>
                  <Route path="/Values" component={Values} />
                  <Route path="/Story" component={Story} />
                </Switch>
              </div>
            </Router>
          </div>
        </div>
      </div>
    </div>
    {/* ************************************************ */}
    <div className="container container-fluid" />
  </section>
);

export default AboutPage;
