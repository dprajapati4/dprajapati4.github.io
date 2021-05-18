import React, { useReducer, useEffect } from 'react';

import { Box, Diagram, Grommet, grommet, Stack, Text } from 'grommet';
import {
  Diamond,
  PersonalComputer,
  Certificate,
  Test,
  Inherit,
} from 'grommet-icons';
import { deepMerge } from 'grommet/utils';

const customTheme = deepMerge({
  diagram: {
    extend: `@keyframes
  example {
    to {
      stroke-dashoffset: 0;
    }
  }
  path {
    stroke-dasharray: 500;
    stroke-dashoffset: 500;
    animation: example 3s linear forwards;
  }`,
  },
});

const connection = (fromTarget, toTarget, { ...rest } = {}) => ({
  fromTarget,
  toTarget,
  anchor: 'vertical',
  color: 'accent-4',
  thickness: 'xsmall',
  round: true,
  type: 'curved',
  ...rest,
});

const ItemContainer = ({ carat, color, cut, align, id, name, textSize }) => (
  <Box
    align={align || 'center'}
    alignSelf="center"
    direction="row"
    gap="medium"
    key={id}
  >
    <PersonalComputer id={1} size="large" color="neutral-3" />
    <Test id={2} />
    <Certificate id={3}/>
    <Inherit id={4} />
  </Box>
);

const Container = ({ node, index }) => (
  <ItemContainer
    // carat={node.carat}
    // color={node.color}
    // cut={node.cut}
    id={index}
    // key={node.name}
    // name={node.name}
    textSize="small"
  />
);

const Animated = () => {
  const reducer = (draw) => !draw;

  const [draw, toogleDraw] = useReducer(reducer, true);

  useEffect(() => {
    const timer = setInterval(() => {
      toogleDraw();
    }, 2000);
    return () => clearInterval(timer);
  }, [toogleDraw]);

  const connections = [];

  if (draw) {
    connections.push(connection('2', '1', { anchor: 'horizontal' }));
    connections.push(connection('3', '1', { anchor: 'center' }));
    connections.push(connection('4', '1', { anchor: 'horizontal'  }));
  }

  return (
    <Grommet theme={customTheme}>
      <Box align="center">
        <Box pad="xsmall">
          <Stack>
            <Box>
              <Box alignSelf="center" margin={{ bottom: 'large' }}>
              <Box direction="row" gap="xlarge">
                  {/* {[2, 3, 4].map((id) => ( */}
                    <Container key={1} node={'hello2'} index={1} />
                  {/* ))} */}
                </Box>

                <Box
                  id="4"
                  width="xsmall"
                  margin={{ bottom: 'large', top: 'xlarge' }}
                />

                <Box pad="small" />


                <Container node={'hello1'} index={4} />



              </Box>
            </Box>
            <Diagram connections={connections} />
          </Stack>
        </Box>
      </Box>
    </Grommet>
  );
};

export default Animated;
