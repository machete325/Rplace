import {
    Box,
    Typography,
} from '@mui/material';
import React from 'react';
import WaterGauge from './WaterGauge';
import { makeStyles } from 'tss-react/mui';
import { CardIndicator } from './CardIndicator';

const useStyles = makeStyles()(() => ({
    chart:{
        width:'40%',
        height: '50px',
    },
    container:{
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
    },
    indicator:{
        display:'flex',
    },
}));

export const WaterQuality = () => {

    const { classes } = useStyles();

    return (
        <CardIndicator style={{ justifyContent:'space-between' }}>
            <Box className={classes.container}>
                <Typography variant='h2'>Water Quality</Typography>

                <Box className={classes.indicator}>
                    <Typography variant='h3'>40cm</Typography>
                    <Typography variant='h3'>ph 7.2</Typography>
                </Box>
            </Box>
            <Box className={classes.chart}>
                <WaterGauge percentage={70}/>
            </Box>
        </CardIndicator>
    );
};
