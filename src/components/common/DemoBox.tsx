import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

export const DemoBox = ({ children, props }: { children: React.ReactNode; props: BoxProps }): JSX.Element => {
  return (
    <Box rounded="md" p="20px" {...props}>
      {children}
    </Box>
  );
};
