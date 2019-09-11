import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../../components/theme/default";

import { Title } from "../../../components/common/Typograph";
import Button from "../../../components/common/Button";

const Card = styled.li`
  flex: 1;
  min-width: 200px;
  height: auto;
  background: ${theme.colors.default};
  box-shadow: 0 10px 12px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 5px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const CardDescription = styled.div`
  padding: 0 10px 20px;
`;

const MovieCard = ({ id, title, image }) => (
  <Card>
    <CardImage src={`https://image.tmdb.org/t/p/w500/${image}`} />
    <CardDescription>
      <Title>{title}</Title>
      <Link to={`/details/${id}`}>
        <Button outline>Detalhes</Button>
      </Link>
    </CardDescription>
  </Card>
);

export default MovieCard;
