import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import { combineReducers, createStore} from "redux";
import UsersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: UsersReducer,
});

let store = createStore(reducers);


export default store;