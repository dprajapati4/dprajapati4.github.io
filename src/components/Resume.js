import React from 'react';
import { Box, Text, Card, Heading, Paragraph } from 'grommet';
import { Js, Reactjs, Node, Aid, Test, System } from 'grommet-icons';
const Resume = () => {
  return (
    <Box >
      <Heading margin="45px">My Resume </Heading>

        <Heading>TECHNICAL SKILLS</Heading>
        <Paragraph>
          Proficient: Javascript, Node.js, Express, React, Redux, Sequelize,
          PostgreSQL, HTML5, CSS, RESTful APIs, Git, Github Knowledgeable:
          Firebase,Mocha, Chai, Jasmine, Webpack, Socket.io, OAuth,
        </Paragraph>
        <Heading>PROJECTS </Heading>
        <Paragraph>
          Scrapplr | Software Developer | https://scrapplr.web.app/ March-April
          2021 A progressive web application for scrapbooking. Create a virtual
          scrapbook by uploading photos and descriptions to document travels and
          life events. Add panoramic views from Google Places and generate a map
          of all visited locations. Built a non-relational database in Cloud
          Firestore to handle user updates and queries in real-time Developed
          backend routes to fetch data from Google Maps, Places and Geolocation
          APIs Designed an intuitive and responsive web application by creating
          grid layouts and swipeable pages Node.js, Cloud Firestore,Sockets.io.
          OAuth, REACT, Google Maps, Places and Geolocation API, Grommet UI Cafe
          Code Brew | Sole Developer | https://cafe-code-brew.herokuapp.com
          March 2021 A virtual, personalizable cafe experience. Choose your cafe
          scenery, music station , order cafe items from locations near you, and
          invite your friend to join you at your virtual cafe. Designed a
          creative and interactive front-end application using React, Node.Js,
          Javascript,HTML, CSS and Semantic UI that allows a user to choose
          between different cafe ambiences and music stations Utilized Yelp API
          to generate real cafe data near the users location so the user can
          review cafes and order food and drinks Utilized Twilio API to send
          text messages to other users with a link that allows them to join the
          user at the cafe
        </Paragraph>
        <Heading>PROFESSIONAL EXPERIENCE </Heading>
        Psychometrician, Comprehensive Consultations Psychological Services
        Dr.Sanam Hafeez Psy D. February 2019 - January 2021
        <Paragraph>
          Scored and documented between 2-3 complete neuropsychological and
          psycho-educational patient testing a day Mentored psychometrician
          interns and trained them to understand and score psychological tests
          Collaborated with clinical staff and patients to develop between 4-5
          comprehensive reports per week detailing patient history, psychometric
          data and treatment plans Research Assistant, NYU College of Dentistry
          COBRA Lab, Dr. Paulo Coelho - Biomaterials January 2018 - January 2019
          Trained to use 3D printing, microCT imaging, nano-indentation
          technology and read histological analysis Prepared polished
          histological section specimen samples for histomorphometry (BIC/BAFO)
          Maintained between 5 - 10 cell lines to be used by other lab members
          Office Assistant, Binghamton University Anthropology Department August
          2014 - May 2017 Answered phone calls, greeted visitors and aided
          students visiting the Anthropology Department Successfully organized
          and prepared for monthly speaker events and faculty meetings.
          Maintained over 50 student files per semester and transitioned the
          documents onto a web-based data-entry application
        </Paragraph>
        <Heading>EDUCATION</Heading>
        <Paragraph>
          Grace Hopper Program at Fullstack Academy, New York, NY Certificate in
          Software Engineering January 2021 - April 2021 17-Week full stack
          JavaScript (ES6) web development immersive for women+. Binghamton
          University, Binghamton, NY Bachelors of Science in Integrative
          Neuroscience GPA: 3.5 August 2013 - May 2017 Honors/Awards: Dean's
          List: 2013 - 2017 TRIO Scholar, Chi Alpha Epsilon National Honor
          Society (XAE)
        </Paragraph>
    </Box>
  );
};

export default Resume;
