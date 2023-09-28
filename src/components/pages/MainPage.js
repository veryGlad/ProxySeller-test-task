import React, {useEffect, useState} from 'react';
import {Box, Button, Grid, TextField} from "@mui/material";
import UserCard from "../UserCard";
import axios from "../../axios/axios";
import Select from "../Select";

const MainPage = () => {
    const [searchValue, setSearchValue] = useState("")
    const updateSearchValue = ((value) => {
        setSearchValue(value.target.value)
    })

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(`/users`).then((resp) => setUsers(resp.data))
    }, [])


    users.sort((a, b) => a.name > b.name ? 1 : -1);

    return (
        <div>
            <Box width={"100%"} display={"flex"} flexDirection={"column"} alignItems={"center"}
                 justifyContent={"flex-start"}>
                <Box width={"100%"} maxWidth={"1200px"}>
                    <Box width={"100%"} height={"55px"} marginTop={2} marginBottom={1} display={"flex"}
                         justifyContent={"space-between"}>
                        <Box width={"100%"} maxWidth={"1085px"} height={"100%"}>
                            <TextField
                                fullWidth
                                required
                                id="outlined-required"
                                label="Search user"
                                onChange={updateSearchValue}
                            />
                        </Box>
                        <Button variant="contained" size={"large"}>Search</Button>
                    </Box>
                    <Box width={"100%"} display={"flex"} justifyContent={"flex-start"} marginBottom={4} marginLeft={-1}>
                        <Select title={"sort"} value1={"A-Z"} value2={"Z-A"}></Select>
                    </Box>

                    <Grid container spacing={{xs: 2, md: 10}} columns={{xs: 4, sm: 8, md: 12}}>
                        {users.map((user) => {
                            return <Grid item xs={4} key={user.id}>
                                <UserCard userName={user.name} userId={user.id}></UserCard>
                            </Grid>
                        })}
                    </Grid>
                </Box>
            </Box>
        </div>
    );
};

export default MainPage;