import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";

const Tag = ({ genres }) => {
  return (
    <>
      <Wrapper>
        <Title>tags</Title>
        <div>
          {genres.map((genre) => {
            return <Genre>{genre}</Genre>;
          })}
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h2`
  padding-bottom: 24px;
`;
const Genre = styled.span`
  flex-direction: space-between;
  background: ${COLORS.greyfade};
  padding: 8px 20px;
  border-radius: 10px;
  margin-right: 30px;
`;
export default Tag;
