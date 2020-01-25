import React from 'react';

const Timeline = ({ timeline }) => {
  return (
    <li className={timeline.id%2 === 0 ? "timeline-inverted" : ""}>
      <div className="timeline-image">
        <img className="rounded-circle img-fluid" src={timeline.image} alt="" />
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4>{timeline.date}</h4>
          <h4 className="subheading">{timeline.title}</h4>
        </div>
        <div className="timeline-body">
          <div className="text-muted">
            {timeline.desc.map( (value, index) => 
              <div key={index}>{value}</div>  
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default Timeline;