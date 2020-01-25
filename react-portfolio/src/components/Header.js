import React from 'react';
import data from '../mydata';

const Header = () => {
  return (
    <header className="masthead">
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">{data.headerTagline[0]}</div>
          <div className="intro-heading">{data.headerTagline[1]}</div>
          {/* <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a> */}
        </div>
      </div>
    </header>
  );
};

export default Header;