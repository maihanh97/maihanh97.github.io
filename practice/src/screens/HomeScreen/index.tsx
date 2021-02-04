import * as React from 'react';
import styles from './HomeScreen.style';
import {Container, Header, Content, Accordion} from 'native-base';

const HomeScreen = () => {
  const dataArray = [
    {title: 'First Element', content: 'Lorem ipsum dolor sit amet'},
    {title: 'Second Element', content: 'Lorem ipsum dolor sit amet'},
    {title: 'Third Element', content: 'Lorem ipsum dolor sit amet'},
  ];
  return (
    <Container>
      <Header />
      <Content padder>
        <Accordion dataArray={dataArray} expanded={0} />
      </Content>
    </Container>
  );
};

export default HomeScreen;
