import React from 'react';

const Project = ({ project }) => {
  return (
    <div className="col-md-4 col-sm-6 portfolio-item">
      <a className="portfolio-link" data-toggle="modal" href={`#portfolioModal${project.id}`}>
        <div className="portfolio-hover">
          <div className="portfolio-hover-content">
            <i className="fas fa-plus fa-3x"></i>
          </div>
        </div>
        <img className="img-fluid" src={project.imageThumbnail} alt="" />
      </a>
      <div className="portfolio-caption">
        <h4>{project.title}</h4>
        <p className="text-muted">{project.skills}</p>
      </div>
    </div>
  );
};

export default Project;