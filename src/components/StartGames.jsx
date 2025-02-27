// StartGames.js
import React from 'react';
import styled from 'styled-components';

const StartGames = ({ toggleStart }) => {
  return (
    <Container>
      <button onClick={toggleStart}>Hasan</button>
    </Container>
  );
};

export default StartGames;

const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;
