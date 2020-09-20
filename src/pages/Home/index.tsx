import React from "react";
import { FiSearch, FiChevronRight } from "react-icons/fi";

import Header from "../../components/Header";
import Input from "../../components/Input";
import PressToSpeak from "../../components/PressToSpeak";
import LeftMenu from "../../components/LeftMenu";

import { Container, SearchBar, Item } from "./styles";

const Home: React.FC = () => {
  return (
    <>
      <Header />

      <Container>
        <SearchBar>
          <Input
            name="search"
            icon={FiSearch}
            placeholder="Pesquise por um assunto ou uma matéria..."
          />
          <PressToSpeak />
          <button type="button">Pesquisar</button>
        </SearchBar>
      </Container>

      <Container>
        <LeftMenu>
          <Item>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Pi-symbol.svg/1058px-Pi-symbol.svg.png"
                alt="Imagem do pí"
              />
              <p>Matemática</p>
            </div>
            <FiChevronRight />
          </Item>
        </LeftMenu>
      </Container>
    </>
  );
};

export default Home;
