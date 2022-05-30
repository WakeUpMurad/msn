import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import { Routes, Route } from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Error from "./components/Error";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
            <Routes>
                <Route path='/'>
                    <Route path='profile'
                           element={<Profile store={props.store}/>}
                    />
                    <Route path='dialogs/*'
                           element={<DialogsContainer store={props.store}/>}
                    />
                    <Route path='news' element={<News/>} />
                    <Route path='music' element={<Music/>} />
                    <Route path='settings' element={<Settings/>} />
                    <Route path='*' element={<Error/>} />
                </Route>
            </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;
