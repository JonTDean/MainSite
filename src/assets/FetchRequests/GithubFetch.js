// Github Fetch Request, Needs to specifically target REPO URL
// While Nice I'd prefer if I could directly target my Pinned Repos which 
// Github has an exposed API request for that via GraphQL

// export function gitHubFetchRequest(url, user, path, pagination = false, pageAmount = 1, per_page = 5){
//     if(pagination){
//         return fetch(`${url}/${user}/${path}?page=${pageAmount}&per_page=${per_page}`,{
//             credentials: 'include',
//             method: 'GET',
//             headers: { 'Content-Type' : 'application/json' },
//         })           
//             .then(resp => resp.json())
//             .then(console.log)
//             .catch(error => console.error(error));
//     }else{
//         return fetch(`${url}/${user}/${path}`)
//             .then(resp => resp.json())
//             .then(console.log)
//             .catch(error => console.error(error));
//     }
// }

export async function graphQLGithubAPIV4(){
    return fetch('https://api.github.com/graphql',{
        method: 'POST',
        headers: new Headers({
            "Authorization": `bearer ${process.env.REACT_APP_GITHUB_REPO_KEY_V2}`,
            "Content-Type" : "application/json"
        }),
        body: JSON.stringify({
            query: queryRequest
        })
    })
    .then(resp => resp.json())
    .then(data => {
        return data.data.user.pinnedItems.edges;
    })
    .catch(error => console.log(error));
}

const queryRequest = `
    query {
        user(login: "JonTDean") {
            pinnedItems(first: 5, types: [REPOSITORY, GIST]) {
                totalCount
                edges {
                    node {
                    ... on Repository {
                        id
                        name
                        url
                        sshUrl
                        createdAt
                        description
                        }       
                    }
                }
            }
        }
    }
`;

export const gitHubRepoPictures = {
    "MainSite" : require('../../assets/Pictures/MainSite.png'),
    "collectionOfNotes" : require('../../assets/Pictures/collectionOfNotes.png'),
    "JonDeans_RustNotes" : require('../../assets/Pictures/JonDeans_RustNotes.png'),
    "S4_Backend" : require('../../assets/Pictures/S4_Backend.png'),
    "S4_Frontend" : require('../../assets/Pictures/S4_Frontend.png'),
}
