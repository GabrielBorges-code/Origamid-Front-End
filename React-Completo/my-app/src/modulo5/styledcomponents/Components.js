import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2rem;
  color: tomato;
`;

export const Button = styled.button`
  padding: 16px;
  cursor: pointer;
  background: ${({ active }) => (active ? "blueviolet" : "red")};
  color: greenyellow;
  border-radius: 8px;
`;

export const Price = styled.p`
  background-color: hsl(${Math.random() * 360}, 100%, 50%);
  color: ${({ color }) => color};
`;
