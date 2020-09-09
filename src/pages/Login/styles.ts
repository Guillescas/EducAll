import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 700px;
`;

export const Background = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;

  img {
    width: 300px;
  }
`;
