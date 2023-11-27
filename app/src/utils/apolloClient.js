import ApolloClient from 'apollo-boost';

const createApolloClient = () => {
    return new ApolloClient({
        uri: 'http://192.168.100.13:4000'
    });
}

export default createApolloClient;