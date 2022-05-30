import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import {configureStore, combineReducers} from "@reduxjs/toolkit";

let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
});

let store = configureStore({
    reducer: reducers,
});


export default store;