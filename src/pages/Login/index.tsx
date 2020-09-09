import React from "react";

import { Container, Background, Content } from "./styles";

import upOnBooks from "../../assets/teaching-white.svg";

const Login: React.FC = () => {
  return (
    <Container>
      <Background>
        <img src={upOnBooks} alt="Professor" />
      </Background>

      <Content>
        <h1>Login</h1>
      </Content>
    </Container>
  );
};

export default Login;
