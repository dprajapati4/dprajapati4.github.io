import React from 'react';
import { Box, Text, Card, Heading, Paragraph, List } from 'grommet';
import { Grow, Js, Reactjs, Node, Aid, Test, System } from 'grommet-icons';

import experienceData from '../data/experienceData';
const Resume = () => {
  return (
    <Box>
      <Heading level="3" flex alignSelf="center">

        My Resume
      </Heading>
        <Heading level="3">TECHNICAL SKILLS</Heading>
      <Card pad="15px" elevation="large">
        <Text size="small">
          Proficient: Javascript, Node.js, Express, React, Redux, Sequelize,
          PostgreSQL, HTML5, CSS, RESTful APIs, Git, Github
          <br />
          Knowledgeable: Firebase,Mocha, Chai, Jasmine, Webpack, Socket.io,
          OAuth,
        </Text>
      </Card>

      <Heading level="3">PROFESSIONAL EXPERIENCE </Heading>
      {experienceData.map((experience) => {
        return (
          <Card pad="15px" elevation="large">
            {experience.position}
            <br />
            {experience.location}
            <List
              border={false}
              key={experience.position}
              data={experience.role}
            ></List>
          </Card>
        );
      })}
      <Heading level="3">EDUCATION</Heading>
      <Card pad="15px" elevation="large">

        <Text size="small">
        Grace Hopper Program at Fullstack Academy, New York NY
          <br />
          Certificate in Software Engineering January 2021 - April 2021
          <List
              border={false}
              data={["17-Week full stack JavaScript (ES6) web development immersive for women+."]}
            >

            </List>
        </Text>
      </Card>
      <Card pad="15px" elevation="large">

        <Text size="small">
        Binghamton University, Binghamton, NY
        <br />
        Bachelors of Science in
        Integrative Neuroscience August 2013 - May 2017
        <br/>
        GPA: 3.5

          <List
              border={false}
              data={["Dean's List: 2013 - 2017,TRIO Scholar, Chi Alpha Epsilon National Honor Society (XAE)"]}
            >

            </List>
        </Text>
      </Card>
    </Box>
  );
};

export default Resume;
