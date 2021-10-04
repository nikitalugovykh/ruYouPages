import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';

const Wrapper = styled.div`
  width: 1354px;
  height: calc(100vh - 86px);
  min-height: 730px;
  margin: 43px auto;
  background-color: #000;
  border-radius: 28px;
  font-family: Gotham Pro;
  padding: 40px 51px;
`

const App = (props) => {
  return (
    <Wrapper>
      <Header/>
    </Wrapper>
  )
}

export default App