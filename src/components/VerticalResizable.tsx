import { css } from '@emotion/react';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

const divider = css`
  margin: 20px 10px;
  height: 30px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: darkgray;
  cursor: ns-resize;
  user-select: none;
  touch-action: none;
`;

export const VerticalResizable = () => {
  const isMousePressedRef = useRef(false);
  const dividerRef = useRef<HTMLDivElement>(null);
  const [upH, setUpH] = useState(300);
  const [starredDisplayed, setStarredDisplayed] = useState(true);

  useEffect(() => {
    const mouseUpListener = () => {
      isMousePressedRef.current = false;
    };
    const mouseMoveListener = (event: MouseEvent) => {
      if (isMousePressedRef.current) {
        if (dividerRef.current) {
          setUpH(event.y - 255);
        }
      }
    };
    const touchMoveListener = (event: TouchEvent) => {
      if (isMousePressedRef.current) {
        if (dividerRef.current) {
          setUpH(event.changedTouches[0].pageY - 255);
        }
      }
    };

    document.addEventListener('mouseup', mouseUpListener);
    document.addEventListener('mousemove', mouseMoveListener);
    document.addEventListener('touchmove', touchMoveListener);
    document.addEventListener('touchend', mouseUpListener);

    return () => {
      document.removeEventListener('mouseup', mouseUpListener);
      document.removeEventListener('mousemove', mouseMoveListener);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box w="300px" h="100vh" bg="gray.200" p="10px">
      <Box h={`150px`} borderBottom="solid 1px" mb="10px">
        <Flex fontSize="24px" h="40px">
          <Box>Crossing Boards</Box>
        </Flex>
        <div>Full-text</div>
        <div>Starred</div>
        <div>Recently</div>
      </Box>
      <Box>
        <Flex fontSize="24px" h="40px">
          <Box>Starred Boards</Box>
          <Spacer />
          <Box onClick={() => setStarredDisplayed(!starredDisplayed)}>x</Box>
        </Flex>
        <Box h={starredDisplayed ? `${upH}px` : '0px'} overflowY="auto">
          {starredDisplayed && Array.from(Array(50).keys()).map(value => <div key={value}>{`starred ${value}`}</div>)}
        </Box>
      </Box>
      <Box ref={dividerRef} css={divider} onMouseDown={() => {
        isMousePressedRef.current = true;
      }} onTouchStart={() =>{
        isMousePressedRef.current = true;
      }}

      />
      <Box>
        <Flex fontSize="24px" h="40px">
          <Box>Boards</Box>
        </Flex>
        <Box css={css`height: calc(100vh - 200px - ${starredDisplayed ? upH : 35}px);
          overflow-y: auto`}>
          {Array.from(Array(30).keys()).map(value => <div key={value}>{`TreeItem ${value}`}</div>)}
        </Box>
      </Box>
    </Box>
  );
};
