import React from 'react';
import pdf from '../data/resume.pdf';
import { Nodes, Linkedin, Github, Medium, DocumentPdf } from 'grommet-icons';
import { Anchor, Box, Footer, Text } from 'grommet';

const Media = () => (
  <Box direction="row" gap="medium" justify="center">
    <Anchor
      a11yTitle="Connect with me on LinkedIn"
      href="https://www.linkedin.com/in/deepprajapati/"
      icon={<Linkedin />}
    />
    <Anchor
      a11yTitle="Checkout my work on Github"
      href="https://www.github.com/dprajapati4"
      icon={<Github />}
    />
    <Anchor
      a11yTitle="Follow me on Medium"
      href="https://dprajap2.medium.com/"
      icon={<Medium />}
    />
    <Anchor
      a11yTitle="See my resume"
      href={pdf}
      download="Prajapati_Deep_Resume.pdf"
      icon={<DocumentPdf />}
    />
  </Box>
);

const Connect = () => {
  return (
    <div className="footer">
    <Footer
    // background="#49434d"
    pad="small"  elevation="large" gap="large">
      <Box align="center" direction="column" gap="xsmall">
        <Nodes size="medium" />
        <Text alignSelf="center" size="small">
          Connect With Me
        </Text>
      </Box>
      <Media />
    </Footer>
    </div>
  );
};

export default Connect;
