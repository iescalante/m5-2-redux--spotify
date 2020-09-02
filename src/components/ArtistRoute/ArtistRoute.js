import React from "react";
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

  return (
    <>
      <pre>Hello</pre>
    </>
  );
};

export default ArtistRoute;
