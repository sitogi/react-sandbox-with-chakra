import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { Box, Flex } from '@chakra-ui/react';

const divider = css`
  margin-left: 10px;
  margin-right: 10px;
  width: 3px;
  height: 100%;
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: black;
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: black;
  cursor: ew-resize;
  user-select: none;
`;

export const ResizableSidebar = (): JSX.Element => {
  const isMousePressedRef = useRef(false);
  const dividerRef = useRef<HTMLDivElement>(null);
  const [leftW, setLeftW] = useState(200);

  useEffect(() => {
    const mouseUpListener = () => {
      isMousePressedRef.current = false;
    };
    const mouseMoveListener = (event: MouseEvent) => {
      if (isMousePressedRef.current) {
        if (dividerRef.current) {
          if (event.x - 354 < 100) {
            setLeftW(100);
          } else if (event.x - 354 > 400) {
            setLeftW(400);
          } else {
            setLeftW(event.x - 354);
          }
        }
      }
    };

    document.addEventListener('mouseup', mouseUpListener);
    document.addEventListener('mousemove', mouseMoveListener);

    return () => {
      document.removeEventListener('mouseup', mouseUpListener);
      document.removeEventListener('mousemove', mouseMoveListener);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Flex w="1200px" h="720px" bg="gray.200" p="10px">
      <Box w={`${leftW}px`}>Aside</Box>
      <Box
        ref={dividerRef}
        css={divider}
        onMouseDown={() => {
          isMousePressedRef.current = true;
        }}
      />
      <Box w={`${1200 - leftW}px`}>Main</Box>
    </Flex>
  );
};
