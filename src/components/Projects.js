import React, { useState } from 'react';
import {
  Box,
  Anchor,
  Image,
  Button,
  Carousel,
  ThemeContext,
  Heading,
} from 'grommet';
import {
  Link,
  Github,
  Expand,
  CaretNext,
  Js,
  Reactjs,
  Html5,
  Css3,
  Node,
} from 'grommet-icons';

import projectData from '../data/projectData';

const techPnR = ['React.js', 'Node.js', 'Html', 'CSS', 'Giphy API'];

const Projects = ({ controls, ...rest }) => {
  const [Link, setLink] = useState({
    github: 'https://github.com/dprajapati4/parks-n-recs-gif-app',
    link: 'https://deeps-personal-website.s3.us-east-2.amazonaws.com/Scrapplr.gif',
    website: '',
  });

  return (
    <Box >
      <Heading margin="none"level={4} pad="large">Some things I have built</Heading>
      <Carousel controls={controls} {...rest}>
        {projectData.map((project) => {
          return (
            <Box gap="xxsmall">
              <Heading margin="none"color="#3D138D" level="4">
                {project.title}
              </Heading>
              {project.description}
              <Image
                src={project.url}
                alt={project.alt}
                height="large"
                fit="contain"
              />
              <Box pad="large" gap="xsmall" direction="row">
                {project.technology.map((tech) => {
                  return (
                    <Box gap="xxsmall" direction="row" align="center">
                      <CaretNext />
                      {tech}
                    </Box>
                  );
                })}
              </Box>
            </Box>
          );
        })}
      </Carousel>
      <Box direction="row" gap="small">
        <Anchor
          a11yTitle="Github link to Parks and Recreation repo"
          href="https://github.com/dprajapati4/parks-n-recs-gif-app"
          icon={<Github />}
        />
        <Anchor
          a11yTitle="Full screen gif demo of the website"
          href="https://deeps-personal-website.s3.us-east-2.amazonaws.com/Parks+and+Rec+Gif.gif"
          icon={<Expand />}
        />
      </Box>
    </Box>
  );
};

export default Projects;
