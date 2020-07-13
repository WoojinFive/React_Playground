import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Skills = () => {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 5,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 3,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 5,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <>
      <div className='container page-section' id='skill'>
        <div className='row'>
          <div className='col-lg-12 text-center'>
            <h2 className='section-heading text-uppercase'>My Skills</h2>
            <h3 className='section-subheading text-muted'>
              My <span className='yellow'>F</span>
              <span className='yellowOrange'>A</span>
              <span className='orange'>V</span>
              <span className='red'>O</span>
              <span className='redPink'>R</span>
              <span className='pink'>I</span>
              <span className='purple'>T</span>
              <span className='purple'>E</span> Technologies
            </h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12 text-center' id='carousel'>
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=''
              containerClass='container-with-dots'
              dotListClass=''
              draggable
              focusOnSelect={false}
              infinite
              itemClass=''
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={responsive}
              showDots={false}
              sliderClass=''
              slidesToSlide={1}
              swipeable
            >
              <div className='html5'>
                <i className='fab fa-html5'></i>
                <span className='tooltiptext'>HTML5</span>
              </div>
              <div className='css3'>
                <i className='fab fa-css3'></i>
                <span className='tooltiptext'>CSS3</span>
              </div>
              <div className='js'>
                <i className='fab fa-js'></i>
                <span className='tooltiptext'>JavaScript</span>
              </div>
              <div className='php'>
                <i className='fab fa-php'></i>
                <span className='tooltiptext'>PHP</span>
              </div>
              <div className='react'>
                <i className='fab fa-react'></i>
                <span className='tooltiptext'>React</span>
              </div>
              <div className='angular'>
                <i className='fab fa-angular'></i>
                <span className='tooltiptext'>Angular</span>
              </div>
              <div className='laravel'>
                <i className='fab fa-laravel'></i>
                <span className='tooltiptext'>Laravel</span>
              </div>
              <div className='wordpress'>
                <i className='fab fa-wordpress'></i>
                <span className='tooltiptext'>WordPress</span>
              </div>
              <div className='mysql'>
                <object type='image/svg+xml' data='/images/icons/mysql.svg'>
                  MySQL
                </object>
                <span className='tooltiptext'>MySQL</span>
              </div>
              <div className='mongodb'>
                <object type='image/svg+xml' data='/images/icons/mongodb.svg'>
                  mongoDB
                </object>
                <span className='tooltiptext'>mongoDB</span>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      {/* <section className='page-section' id='skills'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <ul>
                <li>
                  <div>
                    <i className='fab fa-html5'></i>
                    <span className='tooltiptext'>HTML5</span>
                  </div>
                </li>
                <li>
                  <div>
                    <i className='fab fa-css3'></i>
                    <span className='tooltiptext'>CSS3</span>
                  </div>
                </li>
                <li>
                  <div>
                    <i className='fab fa-js'></i>
                    <span className='tooltiptext'>JavaScript</span>
                  </div>
                </li>
                <li>
                  <div>
                    <i className='fab fa-php'></i>
                    <span className='tooltiptext'>PHP</span>
                  </div>
                </li>
                <li>
                  <div href='#'>
                    <i className='fab fa-react'></i>
                    <span className='tooltiptext'>React</span>
                  </div>
                </li>
                <li>
                  <div href='#'>
                    <i className='fab fa-angular'></i>
                    <span className='tooltiptext'>Angular</span>
                  </div>
                </li>
                <li>
                  <div href='#'>
                    <i className='fab fa-laravel'></i>
                    <span className='tooltiptext'>Laravel</span>
                  </div>
                </li>
                <li>
                  <div href='#'>
                    <i className='fab fa-wordpress'></i>
                    <span className='tooltiptext'>WordPress</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Skills;
