export default
{
  //Change The Website Template
  name: 'Woojin Oh',
  headerTagline: [
    //line 1 for Header
    'Hello 👋\xa0\xa0I am Woojin Oh',
    //line 2 for Header
    'Web Developer',
  ],
  // Change Projects Here 
  projects:[
    {
      id: 1,
      title: 'NSCC IT Jobfair',
      skills: 'Laravel, MySQL, Apache',
      shortDesc: 'Building a NSCC IT Jobfair Website with Laravel Framework.',
      imageFull: ["/images/portfolio/01-full.jpg"],
      imageThumbnail: "/images/portfolio/01-thumbnail.jpg",
      fullDesc: ['Nova Scotia Community College (NSCC) in Halifax has conducted an annual IT Job Fair since 2015 and desires to make its organization more efficient. To accomplish this, NSCC is interested in creating a Job Fair website to promote and organize the 2020 IT Job Fair.', 'This project was to create a website that allows students and IT organizations to register for the 2020 IT Job Fair. The website will allow NSCC administration to organize event details and the event schedule. The website will effectively deliver relevant event information to all users.', 'I participated in this project as a full stack developer.', 'Laravel, PHP, HTML, CSS and JavaScript technologies were used to build the website, and Apache and MySQL were used for the server and database.'],
      date: 'January 2020',
      client: 'NSCC IT Campus',
      url: 'https://itjobfair.ca/',
      github: '',
    },
    {
      id: 2,
      title: 'ILBUNJI BISTRO',
      skills: 'Laravel, MySQL, Apache',
      shortDesc: 'Building a Website for local business with Laravel Framework.',
      imageFull: ["/images/portfolio/02-full.jpg", "/images/portfolio/02-full-2.jpg"],
      imageThumbnail: "/images/portfolio/02-thumbnail.jpg",
      fullDesc: ['ILBUNJI BISTRO is a restaurant that started its new business in December 2019.', 'They wanted to create a website to promote their new business and make their customers more comfortable.', 'And they requested me to design menus and brochures.', 'Laravel, PHP, HTML, CSS and JavaScript technologies were used to build the website, and Apache and MySQL were used for the server and database.', 'And I used Photoshop to design menu and brochure.'],
      date: 'November 2019',
      client: 'ILBUNJI BISTRO',
      url: 'http://ilbunjibistro.com',
      github: '',
    },
    {
      id: 3,
      title: 'JS Full Stack App',
      skills: 'React, MongoDB, Node.js',
      shortDesc: 'Building a Full Stack Web App with JavaScript.',
      imageFull: ["/images/portfolio/03-full.jpg"],
      imageThumbnail: "/images/portfolio/03-thumbnail.jpg",
      fullDesc: ['This is my first Full Stack JavaScript project.', 'This web app allows users to create / read / update / delete contact information. It also provides user registration, login and logout functions and proceeds with the authentication process using JWT.', 'React was used to build the front-end, and Node.js and Express.js were used for the back-end. MongoDB and Mongoose were used for the database.'],
      date: 'December 2019',
      client: 'NSCC PROG3017',
      url: 'http://w0419410.herokuapp.com/',
      github: 'https://git.io/JvtiY',
    },
    {
      id: 4,
      title: 'Arirang',
      skills: 'HTML, Apache',
      shortDesc: 'Building a Website for local business with HTML.',
      imageFull: ["/images/portfolio/04-full.jpg"],
      imageThumbnail: "/images/portfolio/04-thumbnail.jpg",
      fullDesc: ['The project was to renew the Arirang restaurant website. The most important goal was to create a homepage to improve the convenience of customers\' access to the menu. Therefore, the design and developing focused on the convenience of access to the menu except for additional functions.', 'HTML, CSS and JavaScript technologies were used to build the website, and Apache was used for the server.'],
      date: 'May 2019',
      client: 'Arirang Restaurant',
      url: 'http://www.ariranghalifax.ca/',
      github: '',
    },
    {
      id: 5,
      title: 'Photo Feed App',
      skills: 'Laravel, MySQL, Apache',
      shortDesc: 'Building a Full Stack Web App with Laravel Framework.',
      imageFull: ["/images/portfolio/05-full.jpg"],
      imageThumbnail: "/images/portfolio/05-thumbnail.jpg",
      fullDesc: ['This is my first Laravel project.', 'This project was to create a web application in PHP that will serve as a custom Social Media Feed site. The site consists of two areas:', '1) An administrative back-end area, the basic structure (i.e. users, posts, themes) of a website can be dynamically created and modified by only authorized users with the appropriate permissions. The additions and changes to the site’s administrative structure will all be stored in the custom SQLite/MySQL databases that you will create to support your Social Media Feed site.', '2) A front-end site area which will dynamically display posts based on the structure stored in the database. The front-end site will be viewable by all users including guests, but users can register and on subsequent visits log in in order to be able to contribute and make some changes to feed content.', 'The site was built using the LARAVEL Application Framework and styled using BOOTSTRAP.'],
      date: 'December 2019',
      client: 'NSCC INET2005',
      url: '',
      github: 'https://git.io/JvtiO',
    },
    {
      id: 6,
      title: 'Portfolio Website',
      skills: 'React',
      shortDesc: 'Building my portfolio website with React Library.',
      imageFull: ["/images/portfolio/06-full.jpg"],
      imageThumbnail: "/images/portfolio/06-thumbnail.jpg",
      fullDesc: [''],
      date: 'January 2020',
      client: 'Woojin Oh',
      url: 'http://www.halifaxweb.dev',
      github: 'https://git.io/JvqYr',
    },
  ],
  timelines:[
    {
      id: 1,
      date: 'September 2011',
      title: 'University Of Seoul, Seoul, Korea',
      desc: ['School of Electrical and Computer Engineering'],
      image: '/images/about/1.jpg'
    },
    {
      id: 2,
      date: '2011-2015',
      title: 'Samsung Display',
      desc: ['Flexible OLED Research & Development Center', '- Engineer'],
      image: '/images/about/2.jpg'
    },
    {
      id: 3,
      date: '2016-2017',
      title: 'Sell Your Travel',
      desc: ['Planning & Management Team', '- Website Manager & Team Manager'],
      image: '/images/about/3.jpg'
    },
    {
      id: 4,
      date: '2018-2020',
      title: 'Nova Scotia Community College',
      desc: ['IT Web Development'],
      image: '/images/about/4.jpg'
    },
  ],
}