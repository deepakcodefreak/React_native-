import { combineReducers } from 'redux';
const initialState = {
    placeName: "",
    places: [],
    placeSelected: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: state.placeName,
                    placeImage: placeImage
                })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter((places) => {
                    return places.key !== state.placeSelected.key;
                })
            };
        case SELECT_PLACE:
            return {
                ...state,
                placeSelected: state.places.find((place) => {
                    return place.key === action.key;

                })
            };
        case DESELECT_PLACE:
            return {
                ...state,
                placeSelected: null
            };
        case CHANGE_TEXT:
            return {
                ...state,
                placeName: action.text

            }
        default:
            return state;
    }
};

const reducers = combineReducers({
    places: reducer
});

export default reducers;