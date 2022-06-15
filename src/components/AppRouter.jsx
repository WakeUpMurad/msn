import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Loader from "./UI/Loader/Loader";
import Profile from "./pages/Profile/Profile";
import Dialogs from "./pages/Dialogs/Dialogs";
import Users from "./pages/Users/Users";
import Login from "./pages/Login/Login";
import News from "./pages/News/News";
import Music from "./pages/Music/Music";
import Settings from "./pages/Settings/Settings";
import Error from "./Error";
import {AuthContext} from "../context";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)
    if (isLoading) {
        return <Loader />
    }

    return (
        isAuth
            ?
            <Routes>
                <Route path='profile/*' element={<Profile />}/>
                <Route path='dialogs/*' element={<Dialogs />}/>
                <Route path='users/*' element={<Users />}/>
                <Route path='login' element={<Login />}/>
                <Route path='news' element={<News/>} />
                <Route path='music' element={<Music/>} />
                <Route path='settings' element={<Settings/>} />
                <Route path='*' element={<Error/>} />
            </Routes>
            :
            <Routes>
                <Route element={<Login />} path='/login' exact='true' />
                <Route element={<Navigate to="/login" replace />} path='*' />
            </Routes>
    )
}

export default AppRouter;