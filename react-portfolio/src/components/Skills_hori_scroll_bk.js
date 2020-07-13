import React from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';

const list = [
  { icon: 'fab fa-html5', name: 'HTML5' },
  { icon: 'fab fa-css3', name: 'CSS3' },
  { icon: 'fab fa-js', name: 'JavaScript' },
  { icon: 'fab fa-php', name: 'PHP' },
  { icon: 'fab fa-react', name: 'React' },
  { icon: 'fab fa-angular', name: 'Angular' },
  { icon: 'fab fa-laravel', name: 'Laravel' },
  { icon: 'fab fa-wordpress', name: 'WordPress' },
];

const MenuItem = ({ icon, name }) => {
  return (
    <li>
      <div>
        <i className={`${icon}`}></i>
        <span className='tooltiptext'>{name}</span>
      </div>
    </li>
  );
};

export const Menu = (list) =>
  list.map((el) => {
    const { icon, name } = el;

    return <MenuItem icon={icon} name={name} key={name} />;
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const Skills = () => {
  const menu = Menu(list);

  return (
    <section className='page-section' id='skills'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 text-center'>
            {/* <ul> */}
            <ScrollMenu
              data={menu}
              arrowLeft={ArrowLeft}
              arrowRight={ArrowRight}
            />
            {/* <li>
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
              </li> */}
            {/* </ul> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
