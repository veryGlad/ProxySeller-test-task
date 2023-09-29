import React, {useEffect, useState} from 'react';
import ContentCard from "../ContentCard";
import {useParams} from "react-router-dom";
import {Box} from "@mui/material";
import axios from "../../axios/axios";


const PostsPage = () => {

    let {id} = useParams()

    const [albums, setAlbums] = useState([])

    useEffect(() => {
        axios.get(`/albums?userId=${id}`).then((resp) => setAlbums(resp.data))
    }, [id])


    return (
        <Box width={"100%"} display={"flex"} justifyContent={"center"}>
            <Box width={"100%"} maxWidth={"1200px"} marginTop={5}>
                User albums
                {albums.map((album) => {
                    return <Box marginTop={3} key={album.id}>
                        <ContentCard title={`Album name: ${album.title}`}/>
                    </Box>
                })}
            </Box>
        </Box>
    );
};

export default PostsPage;