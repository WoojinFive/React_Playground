import React from 'react';
import '../css/footer.css';

const Footer = (props) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <footer className="text-muted bg-dark">
      <div className="container">
        <p className="float-right">
          <a href="/#" 
            onClick={(e) => {
              e.preventDefault()
              scrollToTop()
            }}
          >Back to top
          </a>
        </p>
        <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
        <p>New to Bootstrap? <a href="/#">Visit the homepage</a> or read our <a href="/#">getting started guide</a>.</p>
      </div>
    </footer>
  );
}
 
export default Footer;