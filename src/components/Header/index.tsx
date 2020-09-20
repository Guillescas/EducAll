import React from "react";
import { FiBell, FiChevronDown } from "react-icons/fi";

import { ContainerMargin, Container } from "./styles";

const Header: React.FC = () => {
  return (
    <ContainerMargin>
      <Container>
        <h1>EducAll</h1>

        <div>
          <FiBell size={18} />
          <img
            src="https://avatars2.githubusercontent.com/u/59893752?s=460&u=c07c8eb71ce76c97bbe756e511597bcb506af578&v=4"
            alt="Imagem do usuário"
          />
          <FiChevronDown size={22} />
        </div>
      </Container>
    </ContainerMargin>
  );
};

export default Header;
