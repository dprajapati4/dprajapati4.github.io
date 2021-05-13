import React, { useState } from 'react';
import { Box, Anchor, Image, Button, Carousel, ThemeContext, Heading } from 'grommet';
import { Link, Github, Expand, CaretNext, Js,Reactjs,Html5,Css3, Node } from 'grommet-icons';

const techPnR = ["React.js", "Node.js", "Html","CSS", "Giphy API"]


const Projects = ({ controls, ...rest }) => {

  const [Link, setLink] = useState({
    github:"https://github.com/dprajapati4/parks-n-recs-gif-app",
    link:"https://deeps-personal-website.s3.us-east-2.amazonaws.com/Scrapplr.gif",
    website:""
  })

  return (
    <Box pad="small" gap="small">
      <h1>Some things I have built</h1>
      <Carousel controls={controls} {...rest}
      >
        <Box gap="xxsmall" >
          <Heading color="#3D138D"level="4"> Parks and Recreation Gif Generator</Heading>
          A tribute to my love for Parks and Recreation, a character Gif
          generator. Choose between Leslie, Ron, Anne and other main characters
          and generate a gif from the show.
          <Image
            src="https://deeps-personal-website.s3.us-east-2.amazonaws.com/Parks+and+Rec+Gif.gif"
            alt="parks and ref gif"
            height="large"
            fit="contain"
          />
          <Box pad="medium"gap="medium"direction="row">

          {techPnR.map((tech)=>{
            return (
              <Box gap="medium"direction='row'>
                <CaretNext/>
                {tech}
              </Box>
            )
          })}

          </Box>
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
