import React from "react";
import { StyleSheet, View } from "react-native";
import StyledText from "./StyledText";
import RepositoryItemStats from "./RepositoryItemStats";

const RepositoryItem = (props) => (
    <View
        key={props.id}
        style={styles.container}
    >
        <StyledText fontSize='subheading' fontWeight='bold' >{props.fullName}</StyledText>
        <StyledText>{props.description}</StyledText>
        <StyledText>{props.language}</StyledText>
        <RepositoryItemStats {...props} />
    </View>
);

export default RepositoryItem;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 5,
        paddingBottom: 5
    }
});