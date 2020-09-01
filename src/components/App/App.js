import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import GlobalStyles from "../GlobalStyles";
import ArtistRoute from "../ArtistRoute";

const DEFAULT_ARTIST_ID = "6rJ1GwtHin2BJbKLuNn9pi";

const App = () => {
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
