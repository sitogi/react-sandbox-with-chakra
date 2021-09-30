import React from 'react';
import { BoxProps, Flex } from '@chakra-ui/react';

export const DemoFlex = ({ children, props }: { children: React.ReactNode; props: BoxProps }): JSX.Element => {
  return (
    <Flex rounded="md" p="20px" gridGap="20px" {...props}>
      {children}
    </Flex>
  );
};
