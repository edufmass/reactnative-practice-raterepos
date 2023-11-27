import {useEffect, useState} from "react";

const useRepositories = () => {
    const [repositories, setRepositories] = useState(null)

    const fetchRepositories = async () => {
        const response = await globalThis.fetch('http://192.168.100.13:5000/api/repositories');
        const json = await response.json();
        setRepositories(json);
    };

    useEffect(() => {
        fetchRepositories();
    }, []);

    const repositoriesNode = repositories
        ? repositories.edges.map(edge => edge.node)
        : [];

    return {repositories: repositoriesNode}
}

export default useRepositories;