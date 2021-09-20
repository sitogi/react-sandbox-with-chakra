import React from 'react';
import { Global } from '@emotion/react';
import { globalStyle } from 'style';
import { Flex } from '@chakra-ui/react';
import { MemorizeDemo } from 'components/MemorizeDemo';

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <Flex align="center" justify="center" h="100vh" w="100vw">
        <MemorizeDemo />
      </Flex>
    </>
  );
}

export default App;
