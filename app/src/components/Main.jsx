import React from "react";
import Constants from 'expo-constants';
import {Text, View} from "react-native";
import {Route, Router, Routes} from "react-router-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";

const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppBar />
            <Routes>
                <Route path='/' element={<RepositoryList />} />
                <Route path='/login' element={<Text>ToDo: Login</Text>} />
            </Routes>
        </View>
    );
}

export default Main;