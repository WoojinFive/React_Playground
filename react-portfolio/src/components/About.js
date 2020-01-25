import React from 'react';
import Timeline from './Timeline';
import mydata from '../mydata';

const About = () => {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">
              It is <span className="yellow">A</span><span className="yellowOrange">L</span><span className="orange">L</span> about <span className="red">M</span><span className="redPink">E</span>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              {mydata.timelines.map(timeline => (
                <Timeline timeline={timeline} key={timeline.id} />
              ))}
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <a className="resume" href="/files/Woojin_Oh_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <h4>Download<br />
                      my<br />
                      Resume!
                    </h4>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;