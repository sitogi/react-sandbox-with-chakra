import { css } from '@emotion/react';
import { Box, Flex } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

const divider = css`
  margin-top: 10px;
  margin-bottom: 10px;
  height: 3px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: black;
  cursor: ns-resize;
  user-select: none;
`;

export const VerticalResizable = () => {
  const isMousePressedRef = useRef(false);
  const dividerRef = useRef<HTMLDivElement>(null);
  const [upH, setUpH] = useState(300);

  useEffect(() => {
    const mouseUpListener = () => {
      isMousePressedRef.current = false;
    };
    const mouseMoveListener = (event: MouseEvent) => {
      if (isMousePressedRef.current) {
        if (dividerRef.current) {
          if (event.y < 300) {
            setUpH(300);
          } else if (event.y  > 1000) {
            setUpH(1000);
          } else {
            setUpH(event.y);
          }
        }
      }
    };

    document.addEventListener('mouseup', mouseUpListener);
    document.addEventListener('mousemove', mouseMoveListener);

    return () => {
      document.removeEventListener('mouseup', mouseUpListener);
      document.removeEventListener('mousemove', mouseMoveListener);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Flex w="300px" h="100vh" bg="gray.200" p="10px" direction="column">
      <Box h={`${upH}px`}>
        Aside
      </Box>
      <Box ref={dividerRef} css={divider} onMouseDown={() => {
        isMousePressedRef.current = true;
      }} />
      <Box css={css`height: 100vh - ${upH}`}>
        Main
      </Box>
    </Flex>
  );
};
