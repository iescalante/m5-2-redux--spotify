import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchArtistProfile } from "../../helpers/api-helpers";

const ArtistRoute = () => {
  const accessToken = useSelector((state) => state.auth.token);
  const artistId = useParams();
  const currentArtist = useSelector((state) => state.currentArtist);

  React.useEffect(() => {
    if (!accessToken) {
      return;
    }
    fetchArtistProfile(accessToken, artistId);
  }, [accessToken]);

  React.useEffect(() => {
    if (!currentArtist) {
      return;
    }

    fetch(`https://api.spotify.com/v1/artists/${artistId}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [currentArtist]);

  return accessToken;
};

export default ArtistRoute;
