import React from 'react';
import { Box,Card, Anchor } from 'grommet';

const Projects = () => {
  return(
    <Box>
      <h1>Some things I have built</h1>
      <Card pad="large">
        A tribute to my love for Parks and Recreation, a character Gif generator. Choose between Leslie, Ron, Anne and other main characters and generate a gif from the show.
        <img src="https://deeps-personal-website.s3.us-east-2.amazonaws.com/Parks+and+Rec+Gif.gif" alt="parks and ref gif"></img>

        </Card>
        <Card pad="large">
        Recreating a cafe experience, Cafe Code Brew allows its users to select a cafe ambience, music, view real cafes near you and see ratings and address and order food. Use the onsite button to message your friends and invite them to your cafe experience.
        <img src="https://deeps-personal-website.s3.us-east-2.amazonaws.com/Code+Brew+Gif.gif" alt=" cafe code brew gif"></img>
        </Card>
        <Card pad="large">
        Star Hopper, a fun e-commerce website that sells all inclusive starship tickets to intergalatic stars.
        <img src="https://deeps-personal-website.s3.us-east-2.amazonaws.com/StarHopper.gif" alt=" Star Hopper gif"></img>
        </Card>
        <Card pad="large">
      Scrapplr is a progressive web application that allows you to document your trip on the go. Include photos, text, and Google panoramic views and track your trip with Google Map pinpoints.
      <img src="https://deeps-personal-website.s3.us-east-2.amazonaws.com/Scrapplr.gif" alt="Scrapplr gif"></img>

      </Card>
    </Box>
  )
}

export default Projects