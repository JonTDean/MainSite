// Reacto
import React, { useState, useEffect } from 'react';

// Styling
import { Card, Button, ListGroup } from 'react-bootstrap';

// Libraries

// Components
import  { graphQLGithubAPIV4 } from '../../assets/FetchRequests/GithubFetch';

export default function GithubProfile(props){
    const [username, setUsername] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [repos, setRepos] = useState('');
    const [avatar, setAvatar] = useState('');
    const [pinnedRepos, setPinnedRepos] = useState({});

    useEffect(() => {
        fetch("https://api.github.com/users/JonTDean")
        .then(resp => resp.json())
        .then(data => setData(data))
        .catch(console.log);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const result = await graphQLGithubAPIV4(setPinnedRepos);
            setPinnedRepos(result);
        };
        fetchData();
    }, []);

    const setData = ({
        login, 
        followers, 
        following, 
        public_repos, 
        avatar_url
    }) => {
        setUsername(login);
        setFollowers(followers);
        setFollowing(following);
        setRepos(public_repos);
        setAvatar(avatar_url);
    }

    return(
        <Card className="mt-5 mb-5 h-50">
            <Card.Header>GitHub</Card.Header>
            <Card.Img src={avatar} alt="Picture of Jonathan T. Dean"></Card.Img>
            <Card.Body>
                <Card.Title>{username}</Card.Title>
                <Card.Text>Followers: {followers}</Card.Text>
                <Card.Text>Following: {following}</Card.Text>
                <Card.Text>Repos: {repos}</Card.Text>
                <Button className="btn-block">Go to My GitHub</Button>
            </Card.Body>
        </Card>
    )
}
