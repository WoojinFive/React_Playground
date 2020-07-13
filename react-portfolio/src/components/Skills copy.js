import React from 'react';

const Skills = () => {
  return (
    <section className='page-section' id='skills'>
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
    </section>
  );
};

export default Skills;
