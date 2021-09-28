/* eslint-disable react/require-default-props */
// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { OriginalSelectBox } from 'components/OriginalSelectBoxDemo/OriginalSelectBox';

const OPTIONS = Array.from(Array(50).keys()).map((key) => ({ key: `key${key}`, label: `label${key}` }));

export const OriginalSelectBoxDemo = (): JSX.Element => {
  const [selected, setSelected] = useState(OPTIONS[0].key);

  return (
    <Box py="10px" px="30px" h="300px" bg="green.200" overflow="auto">
      <Box mb="50px">overflow auto なもーだる</Box>
      <Box w="200px">
        <OriginalSelectBox
          selectedKey={selected}
          options={OPTIONS}
          handleOnSelectItem={(key) => setSelected(key)}
          maxHeight={200}
        />
      </Box>
    </Box>
  );
};
