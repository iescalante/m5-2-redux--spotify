import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import { shortVersion } from "../../utilities";

const Header = ({ imgSrc, name, followerTotal }) => {
  return (
    <Wrapper>
      <Image size="large" src={imgSrc} />
      <Name>{name}</Name>
      <Followers>
        <FollowerNum>{shortVersion(followerTotal)}</FollowerNum> Followers
      </Followers>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Image = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;
`;
const Name = styled.h2`
  font-size: 78px;
  text-align: center;
  margin-top: -79px;
`;
const Followers = styled.h3`
  margin-top: -50px;
`;
const FollowerNum = styled.span`
  color: ${COLORS.primary};
`;
export default Header;
