import React from 'react';
import TopBar from './Components/TopBar';
import Header from './Components/Header';
import Content from './Components/Content/Content';
import styled from 'styled-components';


const Apps = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  color: #333;
  font-family: "PT Sans", sans-serif;
`;

const App = () => {
  return (
    <Apps>
      <TopBar />
      <Header />
      <Content />
    </Apps>
  );
}

export default App;
