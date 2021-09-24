import { Box, Flex, Text } from '@chakra-ui/react';

export const FlexDemo = () => {
  return (
    <Flex w="90%" h="500px" gridGap="10px">
      <Box bg="green.300" flex="1 1 auto" minW="0" rounded="md">
        <Box h="100%" w="100%">
          <Box w="100%" h="calc(100% - 60px)" overflow="auto" bg="green.300" rounded="md">
            <Box w="1500px" h="1500px" mt="200px" p="10px">
              main 領域をはみ出してしまう 1500 * 1500 の canvas
            </Box>
          </Box>
          <Flex w="100%" h="60px" bg="gray.600" justify="center" align="center" rounded="md">
            <Text color="gray.50">
              通話メニュー
            </Text>
          </Flex>
        </Box>
      </Box>
      <Flex bg="yellow.300" flex="0 0 300px" p="10px" justify="center" align="center" rounded="md">
        メンバー一覧 (flex: 0 0 300px;)
      </Flex>
      <Flex bg="red.300" flex="0 0 300px" p="10px" justify="center" align="center" rounded="md">
        チャット (flex: 0 0 300px;)
      </Flex>
    </Flex>
  );
};
