import React from 'react';

const ProjectModal = ({ project }) => {


  return (
    <div className="portfolio-modal modal fade" id={`portfolioModal${project.id}`} tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="modal-body">
                  {/* Project Details Go Here */}
                  <h2 className="text-uppercase">{project.title}</h2>
                  <p className="item-intro text-muted">{project.shortDesc}</p>
                  {project.imageFull.map( (image, index) => (
                    <img className="img-fluid d-block mx-auto" src={image} key={index} alt="" />
                  ))}
                  <div>
                    {project.fullDesc.map( (value, index) => 
                      <div key={index}>{value}<br /><br /></div>
                    )}
                  </div>
                  <ul className="list-inline">  
                    <li>Date: {project.date}</li>
                    <li>Client: {project.client}</li>
                    {project.url && (
                      <li>URL: <a href={project.url} target="_blank" rel="noopener noreferrer">{project.url}</a></li>
                    )}
                    {project.github && (
                      <li>GitHub: <a href={project.github} target="_blank" rel="noopener noreferrer">{project.github}</a></li>
                    )}
                  </ul>
                  <button className="btn btn-primary" data-dismiss="modal" type="button">
                    <i className="fas fa-times"></i>
                    {' '}{' '}Close Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;