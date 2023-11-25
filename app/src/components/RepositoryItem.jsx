import React from "react";
import { Image, StyleSheet, View } from "react-native";
import StyledText from "./StyledText";
import RepositoryItemStats from "./RepositoryItemStats";
import theme from "../theme";
import RepositoryItemHeader from "./RepositoryItemHeader";

const RepositoryItem = (props) => (
    <View
        key={props.id}
        style={styles.container}
    >
        <RepositoryItemHeader {...props} />
        <RepositoryItemStats {...props} />
    </View>
);

export default RepositoryItem;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingVertical: 5, // paddingTop: 5, paddingBottom: 5
    }
});