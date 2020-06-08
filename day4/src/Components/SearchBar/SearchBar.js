import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function SearchBar({listOfUsers, selectedValue, handleUserChange}) {
    const classes = useStyles();

    const handleChange = (event) => {
        const name = event.target.value;
        handleUserChange(name);
    };

    const UserNameOption = ({username}) => {
        return(
            <option value={username}> {username} </option>
        );
    };
    const defaultStyle = {
        color: 'white'
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Enter Name</InputLabel>
                <Select
                    native
                    value={selectedValue}
                    onChange={handleChange}
                    style={defaultStyle}
                >
                    <option aria-label="None" value="" />
                    {listOfUsers.map(user => <UserNameOption key={user} username={user}/>)}
                </Select>
            </FormControl>
        </div>
    );
}
