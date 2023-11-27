import {useEffect, useState} from "react";
import { useQuery } from "@apollo/client";
 import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
    const { data = {}, loading, refetch } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network'
    });
    const { repositories = null } = data;

    /*const [repositories, setRepositories] = useState(null)

    const fetchRepositories = async () => {
        const response = await globalThis.fetch('http://192.168.100.13:5000/api/repositories');
        const json = await response.json();
        setRepositories(json);
    };

    useEffect(() => {
        fetchRepositories();
    }, []);*/

    const repositoriesNode = repositories
        ? repositories.edges.map(edge => edge.node)
        : [];

    return { loading, repositories: repositoriesNode, refetch }
}

export default useRepositories;