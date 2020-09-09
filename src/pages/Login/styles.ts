import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 700px;
`;

export const Background = styled.div`
  img {
    width: 300px;
  }
`;

export const IntroCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 750px;

  h1 {
    margin-top: -120px;
    margin-bottom: 24px;
  }

  p {
    max-width: 450px;
    text-align: center;
  }
`;

export const LoginCard = styled.div`
  width: 380px;
  height: 450px;
  background-color: #3f3d56;
  color: #f0f0f5;
  border-radius: 8px;

  h1 {
    text-align: center;
  }
`;
