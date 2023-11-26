import React from "react";
import { Image, Platform, StyleSheet, View } from "react-native";
import StyledText from "./StyledText";
import theme from "../theme";

const RepositoryItemHeader = ({ownerAvatarUrl, fullName, description, language}) => (
    <View style={styles.containerHeader}>
        <View style={styles.containerImage}>
            <Image style={styles.image} source={{uri: ownerAvatarUrl}} />
        </View>
        <View style={styles.containerText}>
            <StyledText fontWeight='bold' >{fullName}</StyledText>
            <StyledText color='secondary'>{description}</StyledText>
            <StyledText style={styles.language}>{language}</StyledText>
        </View>
    </View>
);

export default RepositoryItemHeader;

const styles = StyleSheet.create({
    containerHeader: {
        flexDirection: 'row',
        paddingBottom: 2
    },
    containerImage: {
        flex: 0,
        paddingRight: 10
    },
    containerText: {
        flex: 1,
        paddingLeft: 10
    },
    language: {
        padding: 4,
        marginVertical: 4, // marginTop: 4, marginBottom: 4,
        color: theme.colors.white,
        //backgroundColor: theme.colors.primary,
        //backgroundColor: Platform.OS === 'android' ? 'red' : '#09f',
        backgroundColor: Platform.select({
           android: theme.colors.primary,
           ios: 'orange',
           default: '#09f'
        }),
        alignSelf: 'flex-start',
        borderRadius: 4,
        overflow: 'hidden'
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    }
});