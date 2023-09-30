import React, {useCallback, useEffect, useState} from 'react';
import {Box, Grid, NativeSelect, TextField} from "@mui/material";
import UserCard from "../UserCard";
import axios from "../../axios/axios";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

const sortOptions = {
    ASC: "A-Z",
    DESC: "Z-A"
}

const MainPage = () => {
    const [searchValue, setSearchValue] = useState("")
    const [sorting, setSorting] = React.useState(sortOptions.ASC);
    const [users, setUsers] = useState([])
    const [usersToDisplay, setUsersToDisplay] = useState([])

    const updateSearchValue = ((value) => {
        setSearchValue(value.target.value)
    })

    useEffect(() => {
        axios.get(`/users`).then((resp) => setUsers(resp.data))
    }, [])

    const handleChange = (event) => {
        setSorting(event.target.value);
    };

    const getSortedUsers = useCallback((users) => {
        if (sorting === sortOptions.ASC) {
            return users.sort((a, b) => a.name > b.name ? 1 : -1)
        } else {
            return users.sort((a, b) => a.name < b.name ? 1 : -1)
        }
    }, [sorting])

    useEffect(() => {
        const sortedUsers = getSortedUsers(users)
        setUsersToDisplay(sortedUsers.filter((user) => user.name.toLowerCase().includes(searchValue.toLowerCase())))
    }, [searchValue, users, sorting, getSortedUsers])


    return (
        <div>
            <Box width={"100%"} display={"flex"} flexDirection={"column"} alignItems={"center"}
                 justifyContent={"flex-start"}>
                <Box width={"100%"} maxWidth={"1200px"}>
                    <Box width={"100%"} height={"55px"} marginTop={2} marginBottom={1} display={"flex"}
                         justifyContent={"space-between"}>
                            <TextField
                                fullWidth
                                required
                                id="outlined-required"
                                label="Search user"
                                onChange={updateSearchValue}
                            />
                    </Box>
                    <Box width={"100%"} display={"flex"} justifyContent={"flex-start"} marginBottom={4}>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                    Sort
                                </InputLabel>
                                <NativeSelect
                                    value={sorting}
                                    inputProps={{
                                        name: 'sort',
                                        id: 'uncontrolled-native',
                                    }}
                                    onChange={handleChange}
                                >
                                    <option value={sortOptions.ASC}>{sortOptions.ASC}</option>
                                    <option value={sortOptions.DESC}>{sortOptions.DESC}</option>
                                </NativeSelect>
                            </FormControl>
                        </Box>
                    </Box>

                    <Grid container spacing={{xs: 2, md: 10}} columns={{xs: 4, sm: 8, md: 12}}>
                        {usersToDisplay.map((user) => {
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