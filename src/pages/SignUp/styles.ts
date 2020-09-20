import styled from "styled-components";

import { lighten } from "polished";
import background from "../../assets/background-big.svg";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
  justify-content: center;

  background: url(${background}) no-repeat;
  background-size: cover;
`;

export const Presentation = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  /* background: #b6b0f7; */

  h1 {
    margin-bottom: 24px;
    text-align: center;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    max-width: 450px;
    text-align: center;
    margin-bottom: 32px;
  }

  img {
    width: 450px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 700px;

  form {
    width: 420px;

    color: #3f3d56;
    border-radius: 8px;

    h1 {
      margin-bottom: 16px;
      text-align: center;
    }

    input {
      height: 100%;
    }
  }

  a {
    display: flex;
    align-items: center;
    margin-top: 32px;
    color: #3f3d56;
    transition: color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${lighten(0.2, "#3f3d56")};
    }
  }
`;
