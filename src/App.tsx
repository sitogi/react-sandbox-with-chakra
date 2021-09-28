// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Global } from '@emotion/react';
import { globalStyle } from 'style';
import { Flex } from '@chakra-ui/react';
import { OriginalSelectBoxDemo } from 'components/OriginalSelectBoxDemo';

const App = (): JSX.Element => (
  <>
    <Global styles={globalStyle} />
    <Flex align="center" justify="center" h="100vh" w="100vw">
      <OriginalSelectBoxDemo />
    </Flex>
  </>
);

export default App;
