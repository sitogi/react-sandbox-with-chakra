/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

const SampleChild = React.memo(({ title }: { title: string }) => {
  useEffect(() => {
    console.log(`${title} mounted`);

    return () => {
      console.log(`${title} unmounted`);
    };
  }, []);

  return <Text>{title}</Text>;
});

const SampleParent = ({ title, children }: { title: string; children: React.ReactNode }) => {
  useEffect(() => {
    console.log(`${title} mounted`);

    return () => {
      console.log(`${title} mounted`);
    };
  }, []);

  return (
    <Box rounded="md" w="500px" h="300px" p="20px" bg="green.200">
      <Text mb="10px">{title}</Text>
      <Box pl="20px">{children}</Box>
    </Box>
  );
};

const OtherParent = ({ title, children }: { title: string; children: React.ReactNode }) => {
  useEffect(() => {
    console.log(`${title} mounted`);

    return () => {
      console.log(`${title} mounted`);
    };
  }, []);

  return (
    <Box rounded="md" w="500px" h="300px" p="20px" bg="green.200">
      <Text mb="10px">{title}</Text>
      <Box pl="20px">{children}</Box>
    </Box>
  );
};

const CHILDREN = ['child 1', 'child 2', 'child 3'];

export const ChildRerenderDemo = (): JSX.Element => {
  const [count, setCount] = useState(0);
  const [p1Displayed, setP1Displayed] = useState(true);

  return (
    <Box rounded="md" w="80%" h="80%" p="20px" bg="teal.400">
      <Flex gridGap="20px">
        <Button mb="20px" onClick={() => setP1Displayed(!p1Displayed)}>
          Switch Parent
        </Button>
        <Button mb="20px" onClick={() => setCount(count + 1)}>
          Count Up
        </Button>
      </Flex>
      {p1Displayed ? (
        <SampleParent title={`parent 1 count: ${count}`}>
          {CHILDREN.map((child) => (
            <SampleChild key={child} title={child} />
          ))}
        </SampleParent>
      ) : (
        <OtherParent title={`parent other count: ${count}`}>
          {CHILDREN.map((child) => (
            <SampleChild key={child} title={`p2 ${child}`} />
          ))}
        </OtherParent>
      )}
    </Box>
  );
};
