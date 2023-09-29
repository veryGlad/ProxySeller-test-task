import React, {useEffect, useState} from 'react';
import ContentCard from "../ContentCard";
import {useParams} from "react-router-dom";
import {Box} from "@mui/material";
import axios from "../../axios/axios";

const PostsPage = () => {
    let {id} = useParams()

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get(`/posts?userId=${id}`).then((resp) => setPosts(resp.data))
    }, [id])

    return (
        <Box width={"100%"} display={"flex"} justifyContent={"center"}>
            <Box width={"100%"} maxWidth={"1200px"} marginTop={5}>
                User posts
                {posts.map((post) => {
                    return <Box margin={2} key={post.id}><ContentCard body={post.body} title={post.title}/></Box>
                })}
            </Box>
        </Box>
    );
};

export default PostsPage;