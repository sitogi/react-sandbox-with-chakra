/* eslint-disable react/require-default-props */
import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

type Props = {
  selectBoxElement: HTMLElement;
  options: { key: string; label: string }[];
  handleOnSelectItem: (key: string) => void;
  maxHeight?: number;
};

export const OriginalSelectBoxOptions = ({
  selectBoxElement,
  options,
  handleOnSelectItem,
  maxHeight,
}: Props): JSX.Element => {
  return (
    <Box
      rounded="md"
      border="solid 1px"
      bg="gray.200"
      justify="center"
      align="center"
      position="absolute"
      top="42px"
      left="0"
      zIndex="2"
      w={selectBoxElement.clientWidth}
      overflowY="auto"
      maxHeight={maxHeight}
    >
      {options.map((option) => (
        <Flex
          key={option.key}
          rounded="md"
          w="100%"
          _hover={{ bg: 'teal.200' }}
          h="40px"
          justify="center"
          align="center"
          onClick={() => handleOnSelectItem(option.key)}
        >
          {option.label}
        </Flex>
      ))}
    </Box>
  );
};
