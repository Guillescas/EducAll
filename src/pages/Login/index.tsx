import React from "react";
import { Form } from "@unform/web";

import { Container, Background, Content, IntroCard, LoginCard } from "./styles";

import upOnBooks from "../../assets/teaching-white.svg";

const Login: React.FC = () => {
  return (
    <Container>
      <Background>
        <IntroCard>
          <h1>Sua plataforma de estudos</h1>
          <p>
            Pensamos nas suas dificuldades. Pensamos no seu aprendizado.
            Pensamos em você!
          </p>
          <img src={upOnBooks} alt="Professor" />
        </IntroCard>
      </Background>

      <Content>
        <LoginCard>
          <Form onSubmit={() => {}}>
            <h1>Login</h1>
          </Form>
        </LoginCard>
      </Content>
    </Container>
  );
};

export default Login;
