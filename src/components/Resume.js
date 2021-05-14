import React from 'react';
import { Box, Text, Card, Heading, Paragraph } from 'grommet';
import { Js, Reactjs, Node, Aid, Test, System } from 'grommet-icons';
const Resume = () => {
  return (
    <Box  >
      <Heading margin="45px">My Resume </Heading>

        <Heading>TECHNICAL SKILLS</Heading>
        <Paragraph>
          Proficient: Javascript, Node.js, Express, React, Redux, Sequelize,
          PostgreSQL, HTML5, CSS, RESTful APIs, Git, Github
          Knowledgeable: Firebase,Mocha, Chai, Jasmine, Webpack, Socket.io, OAuth,
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
