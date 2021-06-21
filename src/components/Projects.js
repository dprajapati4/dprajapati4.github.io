import React, { useState } from 'react';
import {
  Box,
  Anchor,
  Image,
  Button,
  Text,
  Carousel,
  ThemeContext,
  Heading,
  Grommet,
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

const customTheme = {
  carousel: {
    animation: {
      duration: 400,
    },
    chromatic: { disable: true },
    icons: {
      color: 'brand',
    },

    disabled: {
      icons: {
        color: 'grey',
      },
    },
  },
};



const Projects = ({ controls, ...rest }) => {


  return (
    <Grommet theme={customTheme}>
    <Box margin="10px" gap="small" >
      <Heading level={4} gap="small" pad="large">
        Some things I have built
      </Heading>
      <Carousel controls={controls} {...rest}>
        {projectData.map((project) => {
          return (
            <Box  >
            <Box gap="xsmall" background-color="neutral-1" >
              <Heading margin="none" color="#3D138D" level="4">
                {project.title}
              </Heading>
              <Text size="small">{project.description}</Text>
              <Box pad="xsmall" gap="xsmall" direction="row">
                {project.technology.map((tech) => {
                  return (
                    <Box flex="shrink" direction="row" alignContent="between">
                      <CaretNext color="black" size="small" />
                      <Text size="small">{tech}</Text>
                    </Box>
                  );
                })}
              </Box>
              <Image
                src={project.url}
                alt={project.alt}
                height="large"
                fit="contain"
              />
            </Box>
            </Box>
          );
        })}
      </Carousel>

    </Box>
    <Box direction="row" gap="small"  justify='evenly'>


          <Box direction="column" justify='center'  >
          <Text size="small">PnR Gif Generator</Text>

          <Box direction='row' justify='evenly'>
        <Anchor
          a11yTitle="Github link to Parks and Recreation repo"
          href="https://github.com/dprajapati4/parks-n-recs-gif-app"
          icon={<Github />}
        />
        </Box>
        </Box>

        <Box direction="column"  >
          <Text alignSelf='center' size="small">Cafe Code Brew</Text>

          <Box direction='row'>
        <Anchor
          a11yTitle="Github link to Cafe Code Brew repo"
          href="https://github.com/dprajapati4/code_brew"
          icon={<Github />}
        />
        <Anchor
          a11yTitle="Live demo of Cafe Code Brew"
          href='https://cafe-code-brew.herokuapp.com/'
          icon={<Expand />}
        />
        </Box>
        </Box>
        <Box direction="column" >
          <Text alignSelf='center' size="small">Star Hopper</Text>
          <Box direction='row' justify='center' >
        <Anchor
          a11yTitle="Github link to Star Hopper repo"
          href="https://github.com/Team-Elastigirl/Graceshopper"
          icon={<Github />}
        />
        <Anchor
          a11yTitle="Full screen gif demo of Star Hopper"
          href='https://starhopper.herokuapp.com/'
          icon={<Expand />}
        />
        </Box>
        </Box>
        <Box direction="column" justify='around' >
          <Text alignSelf='center'size="small">Scrapplr</Text>
          <Box direction='row'>
        <Anchor
          a11yTitle="Github link to Scrapplr repo"
          href="https://github.com/team-antheia/scrapplr"
          icon={<Github />}
        />
        <Anchor
          a11yTitle="Full screen demo of Scrapplr"
          href='https://scrapplr.web.app/'
          icon={<Expand />}
        />
        </Box>
        </Box>



      </Box>
    </Grommet>
  );
};

Projects.parameters = {
  chromatic: { disable: false },
};

export default Projects;
