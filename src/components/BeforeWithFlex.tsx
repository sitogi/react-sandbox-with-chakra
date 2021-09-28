// eslint-disable-next-line no-use-before-define
import React from 'react';
import { css } from '@emotion/react';
import { Box, VStack } from '@chakra-ui/react';

// after (before) 疑似要素について学ぶ
export const BeforeWithFlex = (): JSX.Element => {
  return (
    <VStack spacing="10px">
      <Box
        css={css`
          display: flex;
          gap: 10px;

          &::after {
            content: '';
            border: solid 10px;
            background-color: black;
          }
        `}
      >
        Emotion with String Style
      </Box>
      <Box
        css={{
          display: 'flex',
          gap: 10,
          '&::after': {
            content: '""',
            border: 'solid 10px',
            backgroundColor: 'black',
          },
        }}
      >
        Emotion with Object Style
      </Box>
      <Box
        display="flex"
        gridGap="10px"
        _after={{
          content: '""',
          border: 'solid 10px',
          backgroundColor: 'black',
        }}
      >
        Chakra
      </Box>
    </VStack>
  );
};
