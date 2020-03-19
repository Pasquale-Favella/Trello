import React from "react";
import styled from "styled-components";

const Thumbnail = styled.div`
  height: 120px;
  width: 280px;
  background: #f7f5ed;
  padding: 10px;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 2px 4px grey;
  &:hover {
    background: #bfbeba;
  }
`;

const Title = styled.h4`
  color: #262626;
  text-decoration: none;
`;

const BoardThumbnail = ({ title }) => {
  console.log(title);
  if (title === "myboard") title = "Lista";
  return (
    <Thumbnail>
      <Title>{title}</Title>
    </Thumbnail>
  );
};

export default BoardThumbnail;
