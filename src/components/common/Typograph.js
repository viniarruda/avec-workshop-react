import styled from "styled-components";
import theme from "../theme/default";

export const Title = styled.h1`
  color: ${theme.typograph.title.color};
  font-size: ${theme.typograph.title.fontSize};
  font-weight: ${theme.typograph.title.fontWeight};
`;

export const Subtitle = styled.h2`
  color: ${theme.typograph.subtitle.color};
  font-size: ${theme.typograph.subtitle.fontSize};
  font-weight: ${theme.typograph.subtitle.fontWeight};
`;

export const Text = styled.p`
  color: ${theme.typograph.text.color},
  font-size: ${theme.typograph.text.fontSize};
  font-weight: ${theme.typograph.text.fontWeight};
`;
