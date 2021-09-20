import React, { useState } from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

const SimpleChild = React.memo(() => {
  const [count, setCount] = useState(0);

  return (
    <Box border="solid 1px" rounded="md" p={5} h="300px" w="400px" bg="green.100">
      <Flex align="center" gridGap="20px">
        <Text fontWeight="bold">{`Simple Child: ${count}`}</Text>
        <Button colorScheme="teal" onClick={() => setCount(prevState => prevState + 1)}>Count UP</Button>
        <Button onClick={() => setCount(0)}>Reset</Button>
      </Flex>
    </Box>
  );
});

type User = { name: string; age: number };

const ComplexChild = ({ user }: { user: User }) => {
  return (
    <Box border="solid 1px" rounded="md" p={5} h="300px" w="400px" bg="green.100">
      <Flex direction="column" align="center" gridGap="20px">
        <Text fontWeight="bold">{`${user.name}`}</Text>
        <Text fontWeight="bold">{`Age: ${user.age}`}</Text>
      </Flex>
    </Box>
  );
};

const ContainsArray = ({ users }: { users: User[] }) => {
  return (
    <Box border="solid 1px" rounded="md" p={5} h="300px" w="400px" bg="green.100">
      {users.map(user => (
        <Flex key={user.name} direction="column" align="center" gridGap="20px">
          <Text fontWeight="bold">{`${user.name}`}</Text>
          <Text fontWeight="bold">{`Age: ${user.age}`}</Text>
        </Flex>
      ))}
    </Box>
  );
};

const ContainsArrayWithDefaultMemo = React.memo(ContainsArray);


const DefaultMemorizedComplexChild = React.memo(ComplexChild);

const SecondArgSpecified = React.memo(ComplexChild, (p, n) => p.user.name === n.user.name && p.user.age === n.user.age);

export const MemorizeDemo = () => {
  const [count, setCount] = useState(0);

  return (
    <Flex direction="column" align="center" gridGap="20px" border="solid 1px" rounded="md" p={5} w="1290px" bg="blue.100">
      <Flex align="center" gridGap="20px">
        <Text fontWeight="bold">{`Parent Counter: ${count}`}</Text>
        <Button colorScheme="teal" onClick={() => setCount(prevState => prevState + 1)}>Count UP</Button>
      </Flex>
      <Flex wrap="wrap" gridGap="20px">
        <SimpleChild />
        <ComplexChild user={{ name: 'ComplexChild', age: 5 }} />
        <DefaultMemorizedComplexChild user={{ name: 'Memorized with only first args', age: 5 }} />
        <SecondArgSpecified user={{ name: 'Memorized with two args', age: 5 }} />
        <ContainsArray users={[{ name: 'user1', age: 1 }, { name: 'user2', age: 2 }]} />
        <ContainsArrayWithDefaultMemo users={[{ name: 'user1', age: 1 }, { name: 'user2', age: 2 }]} />
      </Flex>
    </Flex>
  );
};
