import React, { useState } from 'react';
import {
    AppBar,
    Box,
    IconButton,
    InputAdornment,
    TextField,
    Toolbar,
    Typography,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import AccountCircle from '@mui/icons-material/AccountCircle';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const useStyles = makeStyles()(({ palette, spacing }) => ({
    wrapper: {
        borderRadius: 4,
        marginBottom: spacing(1.5),
    },
    appBar: {
        boxShadow: 'none',
        background: palette.common.white,
        color: palette.text.primary,
    },
    search: {
        flexGrow: 1,
        maxWidth: '350px',
        '& .MuiInputBase-root': {
            height: '40px',
        },
    },
}));

export const Header = () => {
    const { classes, cx } = useStyles();
    const [search, setSearch] = useState<string>('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <Box className={cx(classes.wrapper)}>
            <AppBar
                position='static'
                className={classes.appBar}
            >
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box>
                        <Typography>DevIT test</Typography>
                    </Box>

                    <TextField
                        className={classes.search}
                        variant="outlined"
                        label='search'
                        value={search}
                        onChange={handleSearch}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><SearchOutlinedIcon/></InputAdornment>,
                        }}
                    />

                    <IconButton
                        size='large'
                        edge='end'
                        color='inherit'
                    >
                        <AccountCircle/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
