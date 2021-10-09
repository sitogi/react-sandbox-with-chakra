import React from 'react';
import { BoxProps, Flex } from '@chakra-ui/react';

type Props = BoxProps & { children: React.ReactNode };

export const DemoFlex = ({ children, ...props }: Props): JSX.Element => {
  return (
    <Flex rounded="md" p="20px" gridGap="20px" {...props}>
      {children}
    </Flex>
  );
};
