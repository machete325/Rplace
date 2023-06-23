import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { NavLink } from 'react-router-dom';
import AddHomeIcon from '@mui/icons-material/AddHome';

const useStyles = makeStyles()(() => ({
    wrapper: {
        padding: '45px 35px',
        width: 120,
        height: '100%',
        display:'flex',
        flexDirection:'column',
        rowGap: '39px',
        backgroundColor: '#A6A6A6',
    },
    menuItem: {
        display: 'flex',
        justifyContent: 'center',
    },
}));

const menuConfig = [
    { id: 1, imageSrc: '', url: '/home' },
    { id: 2, imageSrc: '', url: '/home' },
    { id: 3, imageSrc: '', url: '/mobile' },
    { id: 4, imageSrc: '', url: '/charts' },
    { id: 5, imageSrc: '', url: '/wifi' },
    { id: 6, imageSrc: '', url: '/bluetooth' },
    { id: 7, imageSrc: '', url: '/settings' },
];

export const Menu = () => {
    const { classes } = useStyles();

    return (
        <Box className={classes.wrapper}>
            {menuConfig.map(({ id, imageSrc, url }) => (
                <Box key={id}>
                    <NavLink
                        to={url}
                        className={classes.menuItem}
                    >
                        {/* <img src={imageSrc}/> */}
                        <AddHomeIcon/>
                    </NavLink>
                </Box>
            ))}
        </Box>
    );
};
