import React from "react";
import { View } from "react-native";
import { Route, Routes } from "react-router-native";
import AppBar from './AppBar'; // without ext to choose platform
import RepositoryList from "./RepositoryList";
import LoginPage from "../pages/Login";

/*
const AppBar = Platform.select({
    ios: () => require('./IosAppBar.jsx').default,
    default: () => require('./AppBar.jsx').default
})();
*/

const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppBar />
            <Routes>
                <Route path='/' element={<RepositoryList />} />
                <Route path='/login' element={<LoginPage />} />
            </Routes>
        </View>
    );
}

export default Main;