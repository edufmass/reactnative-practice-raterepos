import React from "react";
import { View } from "react-native";
import StyledText from "./StyledText";

const parseThousands = value => {
    return (value > 1000)
        ? `${Math.round(value/100)/10}k`
        : String(value);
}
const RepositoryItemStats = (props) => {
    return (
        <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
            <View>
                <StyledText textAlign='center' fontWeight='bold'>Stars</StyledText>
                <StyledText textAlign='center'>{parseThousands(props.stargazersCount)}</StyledText>
            </View>
            <View>
                <StyledText textAlign='center' fontWeight='bold'>Forks</StyledText>
                <StyledText textAlign='center'>{parseThousands(props.forksCount)}</StyledText>
            </View>
            <View>
                <StyledText textAlign='center' fontWeight='bold'>Reviews</StyledText>
                <StyledText textAlign='center'>{props.reviewCount}</StyledText>
            </View>
            <View>
                <StyledText textAlign='center' fontWeight='bold'>Rating</StyledText>
                <StyledText textAlign='center'>{props.ratingAverage}</StyledText>
            </View>
        </View>
    );
}

export default RepositoryItemStats;