import React from 'react';
import { Box, Text, Heading } from 'grommet';
import {
  Aid,
  PersonalComputer,
  UserFemale,
  Certificate,
  Test,
  Inherit,
  Toast,
  Train,
  Camera,
  Gamepad,
  Restaurant
} from 'grommet-icons';

const AboutMe = () => {
  return (
    <>

        <Heading margin="45px">
          Hey, I'm Deep Prajapati!
          <UserFemale size="large" />
        </Heading>
        <Box align="center" direction="row" gap="small"> <PersonalComputer size="large"/>  I am a New York City based Software
        Engineer who is passionate about finding simple solutions to complex
        problems.</Box>

        <Heading size="large" level="4"> Where I come from</Heading>
        <Box align="center" direction="row" gap="small" pad="small">
          <Inherit size="large" /> Curious about the biology and psychology of
          the human mind I graduated with a BSc in Neuroscience.
        </Box>
        <Box align="center" direction="row" gap="small" pad="small">
          <Test size="large" /> As a Research Assistant, I worked with 3D
          printed bioceramic scaffolds that aimed to augement bone growth.
        </Box>
        <Box align="center" direction="row" gap="small" pad="small">
          <Aid size="large" /> I analyzed psychometric scales and statistical
          data as a Psychometrician to help diagnose psychological issues and
          learning disabilities.
        </Box>
        <Box align="center" direction="row" gap="small" pad="small">
          <Certificate size="large" />I graduated from The Grace Hopper Program
          at Fullstack Academy and started my Software Engineer journey.
        </Box>
        <Heading size="large" level="4"> What technologies I have been using </Heading>
        <Box align="center" direction="row" gap="small" pad="small">

          </Box>

        <Heading size="large" level="4"> When I am not coding you can find me</Heading>
        <Box align="center" direction="row" gap="small" pad="small">
          <Toast size="large" />Trying trendy foods.


          <Camera size="large" /> Exploring new places and taking photos.


          <Gamepad size="large" /> Playing Animal Crossing New Horizons
        </Box>


    </>
  );
};

export default AboutMe;
