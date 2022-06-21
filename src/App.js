import React, {useEffect, useState, useContext} from "react";
import './App.css';
import {AuthContext} from "./context";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {initializeApp} from "./redux/reducers/app-reducer";
import Loader from "./components/UI/Loader/Loader";


const App = (props) => {

    const [isAuth, setIsAuth] = useState(useContext(AuthContext));
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        props.initializeApp();
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setLoading(false);
    }, [isAuth])

    if(!props.initialized){
        return <Loader />
    }

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading,
        }}>
            <BrowserRouter>
                <div className="app-wrapper">
                    <Header />
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

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

export default connect(mapStateToProps, {initializeApp})(App);
