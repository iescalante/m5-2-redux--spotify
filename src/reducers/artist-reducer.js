import produce from "immer";

const initialState = {
  currentArtist: null,
  status: "idle",
};

export default function artistReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_ARTIST_INFO": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "RECEIVE_ARTIST_INFO": {
      return produce(state, (draftState) => {
        if (!draftState.currentArtist) {
          draftState.currentArtist = {};
        }

        draftState.currentArtist.id = action.profile.id;
        draftState.currentArtist.profile = action.profile;
      });
    }
    case "RECEIVE_ARTIST_INFO_ERROR": {
      return {
        ...state,
        status: "error",
      };
    }
    default: {
      return state;
    }
  }
}

export const getArtist = (state) => state.artists.currentArtist;
export const getArtistStatus = (state) => state.artists.status;
