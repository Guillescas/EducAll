import styled from "styled-components";

export const ContainerMargin = styled.div`
  width: 100vw;
  background: #fff;
  padding: 18px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 1200px;
  margin: 0 auto;

  color: #3f3d56;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 48px;
    border-radius: 50%;
    margin-left: 16px;
  }
`;
