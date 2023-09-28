import React, {useState} from 'react';
import {Box, Button, Grid, TextField} from "@mui/material";
import UserCard from "../UserCard";
import axios from "../../axios/axios";

let users = await axios.get("/users")
let usArr = users.data

const MainPage = () => {
    const [searchValue, setSearchValue] = useState("")
    const updateSearchValue = ((value) => {
        setSearchValue(value.target.value)
    })
    console.log(searchValue)

    return (
        <div>
            <Box width={"100%"} display={"flex"} flexDirection={"column"} alignItems={"center"}
                 justifyContent={"flex-start"}>
                <Box width={"100%"} maxWidth={"1200px"}>
                    <Box width={"100%"} height={"55px"} marginTop={2} marginBottom={4} display={"flex"}
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
                    <Grid container spacing={{ xs: 2, md: 10 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {usArr.map((user) => {
                        return <Grid item xs={4}>
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