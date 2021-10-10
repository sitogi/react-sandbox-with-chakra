import React from 'react';
import { Global } from '@emotion/react';
import { globalStyle } from 'style';
import { Button, VStack } from '@chakra-ui/react';
import { ChildRerenderDemo } from 'components/ChildRerenderDemo';
import { Redirect, Route, Switch, useHistory } from 'react-router';
import { VerticalResizable } from 'components/VerticalResizable';
import { FlexDemo } from 'components/FlexDemo';
import { BeforeWithFlex } from 'components/BeforeWithFlex';
import { MemorizeDemo } from 'components/MemorizeDemo';
import { MarkdownEditorDemo } from 'components/MarkdownEditorDemo';
import { OriginalSelectBoxDemo } from 'components/OriginalSelectBoxDemo';
import { DemoFlex } from 'components/common/DemoFlex';

const PATH_VERTICAL_RESIZEABLE = '/vertical-resizable';
const PATH_BEFORE_WITH_FLEX = '/before-with-flex';
const PATH_FLEX = '/flex';
const PATH_MEMO = '/memo';
const PATH_CHILD_RENDER = '/child-render';
const PATH_MARKDOWN = '/markdown';
const PATH_SELECT_BOX = '/select-box';

const HeaderButtons = (): JSX.Element => {
  const history = useHistory();

  return (
    <DemoFlex h="10%" w="80%" bg="green.100">
      <Button colorScheme="blue" onClick={() => history.push(PATH_MARKDOWN)}>
        Markdown
      </Button>
      <Button colorScheme="blue" onClick={() => history.push(PATH_VERTICAL_RESIZEABLE)}>
        Vertical Resizable
      </Button>
      <Button colorScheme="blue" onClick={() => history.push(PATH_FLEX)}>
        Flex
      </Button>
      <Button colorScheme="blue" onClick={() => history.push(PATH_BEFORE_WITH_FLEX)}>
        Before * Flex
      </Button>
      <Button colorScheme="blue" onClick={() => history.push(PATH_MEMO)}>
        Memo
      </Button>
      <Button colorScheme="blue" onClick={() => history.push(PATH_CHILD_RENDER)}>
        Child Render
      </Button>
      <Button colorScheme="blue" onClick={() => history.push(PATH_SELECT_BOX)}>
        Select Box
      </Button>
    </DemoFlex>
  );
};
const MainContainer = (): JSX.Element => {
  return (
    <DemoFlex h="80%" w="80%" bg="green.100">
      <Switch>
        <Route exact path={PATH_MARKDOWN} component={MarkdownEditorDemo} />
        <Route exact path={PATH_VERTICAL_RESIZEABLE} component={VerticalResizable} />
        <Route exact path={PATH_FLEX} component={FlexDemo} />
        <Route exact path={PATH_BEFORE_WITH_FLEX} component={BeforeWithFlex} />
        <Route exact path={PATH_MEMO} component={MemorizeDemo} />
        <Route exact path={PATH_CHILD_RENDER} component={ChildRerenderDemo} />
        <Route exact path={PATH_SELECT_BOX} component={OriginalSelectBoxDemo} />
        <Redirect to={PATH_MARKDOWN} />
      </Switch>
    </DemoFlex>
  );
};

const App = (): JSX.Element => (
  <>
    <Global styles={globalStyle} />
    <VStack justify="center" h="100vh" w="100vw" gridGap="40px">
      <HeaderButtons />
      <MainContainer />
    </VStack>
  </>
);

export default App;
