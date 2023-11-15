import React from "react";
import { Text, View } from "react-native";
import repositories from "../data/repositories";

const RepositoryList = () => {
  return (
      <View>
          {repositories.map( repo => (
              <View key={repo.id}>
                  <Text>id: {repo.id}</Text>
                  <Text>Name: {repo.fullName}</Text>
                  <Text>Descripion: {repo.description}</Text>
                  <Text>Language: {repo.language}</Text>
                  <Text>Stars: {repo.stargazersCount}</Text>
                  <Text>Forks: {repo.forksCount}</Text>
                  <Text>Review: {repo.reviewCount}</Text>
                  <Text>Rating: {repo.ratingAverage}</Text>
              </View>
          ))}
      </View>
  );
}

export default RepositoryList;