import React from "react";
import {ScrollView, StyleSheet, TouchableHighlight, TouchableOpacityBase, View} from "react-native";
import StyledText from "./StyledText";
import Constants from "expo-constants";
import theme from "../theme";
import {Link, useLocation} from "react-router-native";

const AppBarTab = ({children, to}) => {
    const { pathname } = useLocation();
    const active = pathname === to;
    const textStyles = [
        styles.text,
        active && styles.active
    ]
    return (
        <Link to={to} component={TouchableOpacityBase} >
            <StyledText fontWeight='bold' style={textStyles}>
                {children}
            </StyledText>
        </Link>
    )
}

const AppBar = () => {
    return (
        <View style={styles.appBar}>
            <ScrollView horizontal>
                <AppBarTab to='/'>Repositorios</AppBarTab>
                <AppBarTab to='/login'>Log In</AppBarTab>
            </ScrollView>
        </View>
    )
}

export default AppBar;

const styles = StyleSheet.create({
    appBar: {
        flexDirection: 'row',
        backgroundColor: 'red',
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10
    },
    text: {
        color: theme.appBar.textSecondary,
        paddingHorizontal: 10
    },
    active: {
        color: theme.appBar.textPrimary
    }
});
