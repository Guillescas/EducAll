import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  width: 100%;

  border: 2px solid #f0f0f5;
  color: #3a3a3a;

  display: flex;
  align-items: center;

  transition: color 0.2s, border 0.2s;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    border: 0;
    border-radius: 8px;
    flex: 1;
    height: 32px;
  }

  svg {
    margin-right: 16px;
  }
`;
