import React, {useEffect, useState} from "react";
import './App.css';
import {AuthContext} from "./context";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HeaderContainer from "./components/Header/HeaderContainer";
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";

const App = (props) => {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setLoading(false);
    }, [])

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth, isLoading}}>
                <BrowserRouter>
                    <div className="app-wrapper">
                        <HeaderContainer />
                        <Navbar />
                        <div className="app-wrapper-content">
                            <AppRouter />
                        </div>
                        <Footer />
                    </div>
                </BrowserRouter>
        </AuthContext.Provider>

  );
}

export default App;
