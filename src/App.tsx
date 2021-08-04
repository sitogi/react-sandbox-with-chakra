import React from 'react';
import { Global } from '@emotion/react';
import { globalStyle } from 'style';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <Box display="flex" bg="aliceblue" w="100vw" alignItems="center" flexDirection="column" py="100px">
        sample
      </Box>
    </>
  );
}

export default App;
