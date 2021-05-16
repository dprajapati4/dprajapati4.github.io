import React from 'react'
import {Card,Box, Image} from "grommet"


const Contact = () => {
  return(
    <Card>
      <Box direction="row" border >
        <Image
        src= {`${process.env.PUBLIC_URL}/assets/photo.png}`}/>



      </Box>
    </Card>
  )

}

export default Contact