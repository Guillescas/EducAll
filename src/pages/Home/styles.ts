import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 24px auto;
`;

export const SearchBar = styled.div`
  display: flex;
  margin: 0;

  button {
    outline: 0;
    border: 2px solid #f0f0f5;
    background-color: #fff;
    border-radius: 8px;

    width: 164px;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  transition: 0.2s;
  cursor: pointer;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  img {
    width: 48px;
    border-radius: 50%;
    object-fit: cover;
  }

  p {
    margin-left: 16px;
  }

  &:hover {
    transform: translateX(10px);
  }
`;
