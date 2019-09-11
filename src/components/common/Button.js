import React from "react";
import styled from "styled-components";
import theme from "../theme/default";

const Button = styled.button`
  background: ${props => (props.color ? props.color : theme.colors.primary)};
  color: ${theme.colors.default};
  border: none;
  box-shadow: 0 10px 12px rgba(0, 0, 0, 0.2);
  padding: 10px 30px;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 300;
  line-height: 1.5;
  width: 100%;

  &:hover {
    background-color: ${theme.colors.secondary};
    transition: 0.5s ease;
  }
`;

const OutLineButton = styled.button`
  background: transparent;
  color: ${props => (props.color ? props.color : theme.colors.primary)};
  border: 1px solid
    ${props => (props.color ? props.color : theme.colors.primary)};
  box-shadow: 0 10px 12px rgba(0, 0, 0, 0.2);
  padding: 10px 30px;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 300;
  line-height: 1.5;
  width: 100%;

  &:hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.default};
    transition: 0.5s ease;
  }
`;

const ButtonComponent = ({ outline, children, color, onClick }) => (
  <>
    {outline ? (
      <OutLineButton onClick={onClick} color={color}>
        {children}
      </OutLineButton>
    ) : (
      <Button onClick={onClick} color={color}>
        {children}
      </Button>
    )}
  </>
);
export default ButtonComponent;
