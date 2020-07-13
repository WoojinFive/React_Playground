import React from 'react';
import data from '../mydata';
import Project from './Project';
import ProjectModal from './ProjectModal';

const Portfolio = () => {
  return (
    <>
      <section className='bg-light page-section' id='portfolio'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2 className='section-heading text-uppercase'>Portfolio</h2>
              <h3 className='section-subheading text-muted'>
                It is <span className='yellow'>A</span>
                <span className='yellowOrange'>L</span>
                <span className='orange'>L</span> about my{' '}
                <span className='red'>W</span>
                <span className='redPink'>O</span>
                <span className='pink'>R</span>
                <span className='purple'>K</span>
              </h3>
            </div>
          </div>
          <div className='row'>
            {data.projects.map((project) => (
              <Project project={project} key={project.id} />
            ))}
          </div>
        </div>
      </section>

      {data.projects.map((project) => (
        <ProjectModal project={project} key={project.id} />
      ))}
    </>
  );
};

export default Portfolio;
