import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import GlobalStyles from "../GlobalStyles";
import ArtistRoute from "../ArtistRoute";
import {
  requestAccessToken,
  receiveAccessToken,
  receiveAccessTokenError,
} from "../../actions";

import { useDispatch } from "react-redux";

const DEFAULT_ARTIST_ID = "6rJ1GwtHin2BJbKLuNn9pi";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(requestAccessToken());

    fetch("/spotify_access_token")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        dispatch(receiveAccessToken(json.access_token));
      })
      .catch((err) => {
        console.error(err);
        dispatch(receiveAccessTokenError());
      });
  }, []);

  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route path="/artist/:id">
          <ArtistRoute />
        </Route>
        <Redirect to={`/artist/${DEFAULT_ARTIST_ID}`} />
      </Switch>
    </Router>
  );
};

export default App;
