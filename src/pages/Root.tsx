import React, { useEffect } from 'react';
import { Page } from '../common/components/Page';
import { makeStyles } from 'tss-react/mui';
import { Box } from '@mui/material';
import {
    Outlet,
    useLocation,
    useNavigate,
} from 'react-router-dom';

import { LoadingIndicatorBig } from '../common/components/LoadingIndicatorBig';
import { Menu } from '../common/components/Menu';

const useStyles = makeStyles()(() => ({
    content: {
        padding:45,
        flex: 1,
        width: '100%',
    },
}));

export const Root = () => {
    const { classes } = useStyles();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === '/') {
            navigate('/home');
        }
    }, []);

    return (
        <LoadingIndicatorBig>
            <Page>
                <Box
                    display='flex'
                    flex={1}
                >
                    <Box>
                        <Menu/>
                    </Box>

                    <Box className={classes.content}>
                        <Outlet/>
                    </Box>
                </Box>
            </Page>
        </LoadingIndicatorBig>
    );
};
