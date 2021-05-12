import React from 'react';
import { Box,Card, Image } from 'grommet';

const Projects = () => {
  return(
    <Box height="xlarge" width="large" pad="xsmall" >
      <h1>Some things I have built</h1>
      <Card height="large" width="large" pad="medium" border>
        A tribute to my love for Parks and Recreation, a character Gif generator. Choose between Leslie, Ron, Anne and other main characters and generate a gif from the show.
        <Box height="large" width="large" >
        <Image src="https://deeps-personal-website.s3.us-east-2.amazonaws.com/Parks+and+Rec+Gif.gif" alt="parks and ref gif" fit="contain" />
        </Box>
        </Card>

        <Card height="large" width="large" pad="medium" border>
        Recreating a cafe experience, Cafe Code Brew allows its users to select a cafe ambience, music, view real cafes near you and see ratings and address and order food. Use the onsite button to message your friends and invite them to your cafe experience.
        <Box height="large" width="large" >
        <Image src="https://deeps-personal-website.s3.us-east-2.amazonaws.com/Code+Brew+Gif.gif" alt=" cafe code brew gif" fit="contain"/>
        </Box>
        </Card>

        <Card height="large" width="large" pad="medium" border>
        Star Hopper, a fun e-commerce website that sells all inclusive starship tickets to intergalatic stars.
        <Box height="large" width="large" >
        <Image src="https://deeps-personal-website.s3.us-east-2.amazonaws.com/StarHopper.gif" alt=" Star Hopper gif" fit="contain"/>
        </Box>
        </Card>

        <Card height="large" width="large" pad="medium" border>
      Scrapplr is a progressive web application that allows you to document your trip on the go. Include photos, text, and Google panoramic views and track your trip with Google Map pinpoints.
      <Box height="large" width="large" >
      <Image src="https://deeps-personal-website.s3.us-east-2.amazonaws.com/Scrapplr.gif" alt="Scrapplr gif" fit="contain"/>
      </Box>
      </Card>
    </Box>
  )
}

export default Projects