import { Box } from '@chakra-ui/react';

export const ZIndex = () => {
  return (
    <Box zIndex={3000} h="500px" w="700px" bg="gray.300" rounded="md" position="relative">
      <Box zIndex={3} bg="blue.100" position="absolute" top={50} left={50} p="100px">
        <Box zIndex={530000} bg="blue.200" p="30px" rounded="md">私のz-indexは53万です</Box>
      </Box>
      <Box zIndex={3} bg="yellow.100" position="absolute" top={300} left={300} p="100px">
        <Box zIndex={5} bg="yellow.200" p="30px" rounded="md">z-indexたったの5</Box>
      </Box>
    </Box>
  );
};
