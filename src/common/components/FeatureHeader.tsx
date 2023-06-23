import React, { useState } from 'react';
import {
    Box,
    Button,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles()(() => ({
    topContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    datePickerContainer: {
        display: 'flex',
        alignItems: 'center',
        columnGap: 12,
    },
    filterButton: {
        height: 40,
    },
    inputContainer:{
        display: 'flex',
        alignItems: 'center',
    },
}));

interface Props {
    title: string;
    addBtnTitle: string;
    onCreate: VoidFunction;
}

export const FeatureHeader = (props: Props) => {
    const { title, addBtnTitle, onCreate } = props;
    const [valueSearch, setValueSearch] = useState('');
    const { classes } = useStyles();

    return (
        <Box className={classes.topContainer}>
            <Box className={classes.container}>
                <Typography variant="h1">{title}</Typography>
            </Box>

            <Box className={classes.inputContainer}>
                <TextField
                    placeholder="Search here ..."
                    type="text"
                    variant="outlined"
                    size="small"
                    onChange={(e) => setValueSearch(e.target.value)}
                    sx={{ border: 'none', '& fieldset': { border: 'none' } }}
                    value={valueSearch}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon fontSize="medium"
                                    sx={{ color: '#63B83F' }}
                                />
                            </InputAdornment>
                        ),

                        endAdornment: valueSearch && (
                            <IconButton aria-label="toggle password visibility"
                                onClick={() => setValueSearch('')}
                            >
                                <CancelRoundedIcon fontSize="small"
                                    sx={{ color: '#fff' }}
                                />
                            </IconButton>
                        ),
                    }}
                />

                <Button onClick={onCreate}
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ width:'140px', marginLeft: '24px' }}
                >
                    {addBtnTitle}
                </Button>
            </Box>

        </Box>
    );
};
