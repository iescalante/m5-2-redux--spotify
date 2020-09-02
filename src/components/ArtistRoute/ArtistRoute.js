import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchArtistProfile } from "../../helpers/api-helpers";

import {
  requestArtistInfo,
  receiveArtistProfile,
  receiveArtistInfoError,
} from "../../actions";

import { getArtist, getArtistStatus } from "../../reducers/artist-reducer";
import { getAccessToken } from "../../reducers/auth-reducer";

import Header from "./Header";
import Loader from "react-loader-spinner";
import Tag from "./Tag";

const getSpotifyData = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(getAccessToken);
  const { artistId } = useParams();

  React.useEffect(() => {
    if (!accessToken) {
      return;
    }
    dispatch(requestArtistInfo());

    fetchArtistProfile(accessToken, artistId)
      .then((json) => {
        dispatch(receiveArtistProfile(json));
      })
      .catch((err) => {
        console.error(err);
        dispatch(receiveArtistInfoError(err));
      });
  }, [accessToken, artistId]);
};

const ArtistRoute = () => {
  const artist = useSelector(getArtist);
  const artistStatus = useSelector(getArtistStatus);

  getSpotifyData();
  if (artistStatus === "loading") {
    return (
      <DivLoader>
        <Loader
          style={{
            height: "80px",
            width: "80px",
          }}
        />
      </DivLoader>
    );
  }
  if (!artist) {
    return "Error";
  }
  console.log(artist);
  return (
    <>
      <Section>
        <Header
          imgSrc={artist.profile.images[1].url}
          name={artist.profile.name}
          followerTotal={artist.profile.followers.total}
        />
      </Section>
      <Section>
        <Tag genres={artist.profile.genres} />
      </Section>
    </>
  );
};

const Section = styled.section`
  margin-bottom: 64px;
`;

const DivLoader = styled.div`
  display: grid;
  place-content: center;
  margin-top: 50vh;
`;
export default ArtistRoute;
