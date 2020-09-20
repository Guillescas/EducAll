import React, { useCallback, useRef } from "react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";
import * as Yup from "yup";

import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";

import getValidationErrors from "../../utils/getValidationErrors";

import { Container, Content, Presentation } from "./styles";

import signup from "../../assets/signup.svg";

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required("Nome obrigatório"),
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um e-mail válido"),
        password: Yup.string().min(6, "A senha deve ter no mínimo 6 dígitos"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Presentation>
        <h1>Faça já o seu cadastro!</h1>
        <p>Pronto para começar a aprender?</p>
        <img src={signup} alt="Professor" />
      </Presentation>

      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Registre-se!</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button>Registrar</Button>
        </Form>

        <Link to={{ pathname: "/" }}>
          <FiArrowLeft />
          Voltar
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;
