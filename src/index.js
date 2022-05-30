import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
        <Provider store={store}>
            <React.StrictMode>
                <BrowserRouter>
                    <App store={store}/>
                </BrowserRouter>
            </React.StrictMode>
        </Provider>
    );
}

rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
});
