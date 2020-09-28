// Reacto
import React, { useState, useEffect } from 'react';

// Styling
import { Card, Button, ListGroup, Container, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';

// Libraries

// Components
import  { graphQLGithubAPIV4, gitHubRepoPictures } from '../../assets/FetchRequests/GithubFetch'; 
import { pubDatePrep } from '../Blog/TimeToString';

export default function PinnedRepositories(){

    const [pinnedRepos, setPinnedRepos] = useState({});
    const [urlClipboardAlert, setURLClipboardAlert] = useState(false);
    const [sshURLClipboardAlert, setSSHURLClipboardAlert] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await graphQLGithubAPIV4(setPinnedRepos);
            setPinnedRepos(result);
        };
        fetchData();
    }, []);

    console.log(pinnedRepos);

    return (
        <Container className="border rounded-left ml-5 mb-3 mt-5 p-5 border-primary" style={{'maxHeight': 'calc(100vh - 160px)', 'overflowY': 'auto'}}>
        {/* style={{'maxHeight': 'calc(100vh - 160px)', 'overflowY': 'auto'}}*/} 
        {pinnedRepos !== undefined ?
        
        Array.from(pinnedRepos).map((repo, id) => {
                return (
                    
                    <Card key={repo.node.id} className="mb-3 mt-2">
                        <Card.Img variant="top" alt="JonTDean" src={gitHubRepoPictures[repo.node.name]} />
                        <Card.Body>
                            <Card.Title as="h1" className="justify-content-center">{repo.node.name}</Card.Title>
                            <ListGroup>
                                {/* Description */}
                                <ListGroup.Item>
                                    <h5>Description : </h5>
                                    <p>{repo.node.description}</p>
                                </ListGroup.Item>

                                {/* Created At Date */}
                                <ListGroup.Item>
                                    <h5>Released On:  : </h5>
                                    <p>{timeParsal(repo.node.createdAt)}</p>
                                </ListGroup.Item>

                                {/* URL */} {/* SSH URL */}
                                <ListGroup.Item className="container justify-content-center">
                                    {/* Checks for clipboard truthy */}
                                    {urlClipboardAlert ? 
                                        <Alert variant="success">
                                            <Alert.Heading>Copied URL to clipboard!</Alert.Heading>
                                            <hr />
                                            <p>You've copied the link to the clipboard.</p>
                                        </Alert>
                                    :
                                        <></>
                                    }

                                    {/* Checks for clipboard truthy */}
                                    {sshURLClipboardAlert ? 
                                        <Alert variant="success">
                                            <Alert.Heading>Copied SSH to clipboard!</Alert.Heading>
                                            <hr />
                                            <p>You've copied the link to the clipboard.</p>
                                        </Alert>
                                    :
                                        <></>
                                    }

                                    <h5>Copy to clipboard:</h5> 
                                    <div className="d-flex justify-content-around">
                                        <motion.div
                                            className="row btn btn-block btn-primary p-2 w-25 h-75 mt-2" 
                                            onClick={e => copyStringToClipboard(e, repo.node.url, setURLClipboardAlert, urlClipboardAlert)}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            URL
                                            {/* <Button className="row btn-block p-2 w-25 h-75 mt-2" onClick={e => copyStringToClipboard(e, repo.node.url, setURLClipboardAlert, urlClipboardAlert)}>URL</Button> */}
                                        </ motion.div>

                                        <motion.div
                                            className="row btn btn-block btn-primary p-2 w-25 h-75 mt-2" 
                                            onClick={e => copyStringToClipboard(e, repo.node.url, setURLClipboardAlert, urlClipboardAlert)}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            SSH
                                            {/* <Button className="row btn-block p-2 w-25" onClick={e => copyStringToClipboard(e, repo.node.sshUrl, setSSHURLClipboardAlert, sshURLClipboardAlert)}>SSH</Button> */}
                                        </ motion.div>
                                    </div>                                     
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                )
            })
        :
            <> </>
        }
        
        </Container>
    )
}

async function copyStringToClipboard(e, string, setClip, clipboard){
    e.preventDefault();

    if (!navigator.clipboard) {
        // Clipboard API not available
        return
    }

    try {
        await navigator.clipboard.writeText(string)
        setClip(!clipboard);
        return setTimeout(() => setClip(clipboard), 2000);
    } catch (err) {
        console.error('Failed to copy!', err)
    }
}

function timeParsal(time){
    let ymd = time.split("T")[0];
    let hms = time.split("T")[1].split("Z")[0]    
    let new_time = `${ymd} ${hms}`
   
    return pubDatePrep(new_time);
}

// OG
// return (
//     <Container className="border rounded-left ml-5 mb-3 mt-5 p-5 border-primary" style={{'maxHeight': 'calc(100vh - 160px)', 'overflowY': 'auto'}}>
//     {/* style={{'maxHeight': 'calc(100vh - 160px)', 'overflowY': 'auto'}}*/} 
//         {Array.from(pinnedRepos).map((repo, id) => {
//             return (
//                 <Card key={repo.node.id} className="mb-3 mt-2">
//                     <Card.Img variant="top" alt="JonTDean" src={gitHubRepoPictures[repo.node.name]} />
//                     <Card.Body>
//                         <Card.Title as="h1" className="justify-content-center">{repo.node.name}</Card.Title>
//                         <ListGroup>
//                             {/* Description */}
//                             <ListGroup.Item>
//                                 <h5>Description : </h5>
//                                 <p>{repo.node.description}</p>
//                             </ListGroup.Item>

//                             {/* Created At Date */}
//                             <ListGroup.Item>
//                                 <h5>Released On:  : </h5>
//                                 <p>{timeParsal(repo.node.createdAt)}</p>
//                             </ListGroup.Item>

//                             {/* URL */} {/* SSH URL */}
//                             <ListGroup.Item className="container justify-content-center">
//                                 {/* Checks for clipboard truthy */}
//                                 {urlClipboardAlert ? 
//                                     <Alert variant="success">
//                                         <Alert.Heading>Copied URL to clipboard!</Alert.Heading>
//                                         <hr />
//                                         <p>You've copied the link to the clipboard.</p>
//                                     </Alert>
//                                 :
//                                     <></>
//                                 }

//                                 {/* Checks for clipboard truthy */}
//                                 {sshURLClipboardAlert ? 
//                                     <Alert variant="success">
//                                         <Alert.Heading>Copied SSH to clipboard!</Alert.Heading>
//                                         <hr />
//                                         <p>You've copied the link to the clipboard.</p>
//                                     </Alert>
//                                 :
//                                     <></>
//                                 }

//                                 <h5>Copy to clipboard:</h5> 
//                                 <div className="d-flex justify-content-around">
//                                     <motion.div
//                                         className="row btn btn-block btn-primary p-2 w-25 h-75 mt-2" 
//                                         onClick={e => copyStringToClipboard(e, repo.node.url, setURLClipboardAlert, urlClipboardAlert)}
//                                         whileHover={{ scale: 1.1 }}
//                                         whileTap={{ scale: 0.95 }}
//                                     >
//                                         URL
//                                         {/* <Button className="row btn-block p-2 w-25 h-75 mt-2" onClick={e => copyStringToClipboard(e, repo.node.url, setURLClipboardAlert, urlClipboardAlert)}>URL</Button> */}
//                                     </ motion.div>

//                                     <motion.div
//                                         className="row btn btn-block btn-primary p-2 w-25 h-75 mt-2" 
//                                         onClick={e => copyStringToClipboard(e, repo.node.url, setURLClipboardAlert, urlClipboardAlert)}
//                                         whileHover={{ scale: 1.1 }}
//                                         whileTap={{ scale: 0.95 }}
//                                     >
//                                         SSH
//                                         {/* <Button className="row btn-block p-2 w-25" onClick={e => copyStringToClipboard(e, repo.node.sshUrl, setSSHURLClipboardAlert, sshURLClipboardAlert)}>SSH</Button> */}
//                                     </ motion.div>
//                                 </div>                                     
//                             </ListGroup.Item>
//                         </ListGroup>
//                     </Card.Body>
//                 </Card>
//             )
//         })}
//     </Container>
// )