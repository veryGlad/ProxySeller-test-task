import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Box} from "@mui/material";
import {Link} from "react-router-dom";

export default function UserCard({userId, userName}) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    Name: {userName}
                </Typography>
            </CardContent>
            <CardActions>
                <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
                    <Button size="small" ><Link to={`/posts/${userId}`}>Posts</Link></Button>
                    <Button size="small"><Link to={`/albums/${userId}`}>Albums</Link></Button>
                </Box>
            </CardActions>
        </Card>
    );
}