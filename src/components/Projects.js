import React from 'react';
import { Box, Card, Image, Button, Carousel } from 'grommet';
import { Linkedin, Github } from 'grommet-icons';

const carouselTheme = {
  carousel: {
    animation: {
      duration: 400,
      pad: 'small',
    },
    icons: {
      color:"blue",

    },
    disabled: {
      icons: {
        color:"grey"
      },
    },
  },
};

const Projects = ({ controls, ...rest }) => {
  return (
    <Box pad="small" gap="large">
      <h1>Some things I have built</h1>
      <Carousel theme={carouselTheme} controls={controls} {...rest}>
        <Box gap="medium">
          A tribute to my love for Parks and Recreation, a character Gif
          generator. Choose between Leslie, Ron, Anne and other main characters
          and generate a gif from the show.
          <Image
            src="https://deeps-personal-website.s3.us-east-2.amazonaws.com/Parks+and+Rec+Gif.gif"
            alt="parks and ref gif"
            height="large"
            fit="contain"
          />
        </Box>

        <Box gap="medium">
          Recreating a cafe experience, Cafe Code Brew allows its users to
          select a cafe ambience, music, view real cafes near you and see
          ratings and address and order food. Use the onsite button to message
          your friends and invite them to your cafe experience.
          <Image
            src="https://deeps-personal-website.s3.us-east-2.amazonaws.com/Code+Brew+Gif.gif"
            alt=" cafe code brew gif"
            height="medium"
            width="large"
            fit="contain"
          />
        </Box>

        <Box gap="medium">
          Star Hopper, a fun e-commerce website that sells all inclusive
          starship tickets to intergalatic stars.
          <Image
            src="https://deeps-personal-website.s3.us-east-2.amazonaws.com/StarHopper.gif"
            alt=" Star Hopper gif"
            fit="contain"
          />
        </Box>

        <Box gap="medium">
          Scrapplr is a progressive web application that allows you to document
          your trip on the go. Include photos, text, and Google panoramic views
          and track your trip with Google Map pinpoints.
          <Image
            src="https://deeps-personal-website.s3.us-east-2.amazonaws.com/Scrapplr.gif"
            alt="Scrapplr gif"
            fit="contain"
          />
        </Box>

        {/* <Button>Github</Button>
        <Button>Demo</Button> */}
      </Carousel>
    </Box>
  );
};

export default Projects;
