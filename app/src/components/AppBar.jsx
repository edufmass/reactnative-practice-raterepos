import React from "react";
import {StyleSheet, View } from "react-native";
import StyledText from "./StyledText";
import Constants from "expo-constants";
import theme from "../theme";

const AppBar = () => {
    return (
        <View style={styles.appBar}>
            <StyledText fontWeight='bold' style={styles.text}>
                Repositories
            </StyledText>
        </View>
    )
}

export default AppBar;

const styles = StyleSheet.create({
    appBar: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10
    },
    text: {
        color: theme.appBar.textPrimary
    }
});
