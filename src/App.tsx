import React from 'react';
import { Global } from '@emotion/react';
import { globalStyle } from 'style';
import { Box } from '@chakra-ui/react';
import { VerticalResizable } from 'components/VerticalResizable';

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <Box display="flex" w="100vw" alignItems="center" flexDirection="column">
        <VerticalResizable />
      </Box>
    </>
  );
}

export default App;
