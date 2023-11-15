import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RepositoryItem = (props) => (
    <View
        key={props.id}
        style={styles.container}
    >
        <Text style={styles.strong}>Id: {props.id}</Text>
        <Text>Name: {props.fullName}</Text>
        <Text>Description: {props.description}</Text>
        <Text>Language: {props.language}</Text>
        <Text>Stars: {props.stargazersCount}</Text>
        <Text>Forks: {props.forksCount}</Text>
        <Text>Review: {props.reviewCount}</Text>
        <Text>Rating: {props.ratingAverage}</Text>
    </View>
);

export default RepositoryItem;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 5,
        paddingBottom: 5
    },
    strong: {
        color: '#09f',
        fontWeight: 'bold',
        paddingBottom: 5
    }
});