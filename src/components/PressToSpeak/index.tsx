import React from "react";

import { FiMic } from "react-icons/fi";

import { Container } from "./styles";

const PressToSpeak: React.FC = () => {
  return (
    <Container style={{ marginTop: 0 }}>
      <FiMic size={20} />
    </Container>
  );
};

export default PressToSpeak;
