import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { CardIndicator } from './CardIndicator';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    container: {
        width:'100%',
        display:'flex',
        justifyContent:'space-between',
    },
}));

export const CarbonCredits = () => {
    const { classes } = useStyles();

    return (
        <CardIndicator style={{ flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between' }}>
            <Box>
                <Typography variant='h2'>carbon credits 2023</Typography>
            </Box>

            <Box className={classes.container}>
                <Box>
                    <Typography
                        variant='h3'
                        sx={{ fontWeight:400 }}
                    >
                    6642
                    </Typography>

                    <Typography
                        variant='h3'
                        sx={{ fontWeight:400 }}
                    >
                    Ton
                    </Typography>
                </Box>

                <Typography
                    variant='h2'
                    sx={{ fontSize:'17.5px' }}
                >
                    182,000
                </Typography>
            </Box>
        </CardIndicator>
    );
};
