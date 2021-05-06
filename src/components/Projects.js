import React from 'react';
import { Box,Card } from 'grommet';
const Projects = () => {
  return(
    <Box>
      <h1>Some things I have built</h1>
      <Card pad="large">
        A tribute to my love for Parks and Recreation, a character Gif generator. Choose between Leslie, Ron, Anne and other main characters and generate a one line from the show.

        </Card>
        <Card pad="large">
        Recreating a cafe experience, Cafe Code Brew allows its users to select a cafe ambience, music, view real cafes near you and see ratings and address and order food. Use the onsite button to message your friends and invite them to your cafe experience.
        </Card>
        <Card pad="large">
        An fun e-commerce website that sells all inclusive tickets to intergalatic stars.

        </Card>
        <Card pad="large">
      Scrapplr is a progressive web application that allows you to document your trip on the go. Include photos, text, and Google panoramic views and track your trip with Google Map pinpoints.

      </Card>
    </Box>
  )
}

export default Projects