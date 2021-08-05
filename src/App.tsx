import React from 'react';
import { Global } from '@emotion/react';
import { globalStyle } from 'style';
import { Box } from '@chakra-ui/react';
import { ResizableSidebar } from 'components/ResizableSidebar';

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <Box display="flex" w="100vw" alignItems="center" flexDirection="column" py="100px">
        <ResizableSidebar />
      </Box>
    </>
  );
}

export default App;
