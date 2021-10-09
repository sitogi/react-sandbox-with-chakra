import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

type Props = BoxProps & { children: React.ReactNode };

export const DemoBox = ({ children, ...props }: Props): JSX.Element => {
  return (
    <Box rounded="md" p="20px" {...props}>
      {children}
    </Box>
  );
};
