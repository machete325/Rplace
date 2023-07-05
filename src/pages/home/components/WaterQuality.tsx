import {
    Box,
    Typography,
} from '@mui/material';
import React from 'react';
import WaterGauge from './WaterGauge';
import { makeStyles } from 'tss-react/mui';
import { CardIndicator } from './CardIndicator';

const useStyles = makeStyles()(() => ({
    chart: {
        width: '40%',
        height: '50px',
    },
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    indicator: {
        display: 'flex',
    },
}));

interface Props {
    ph: number;
    height: number;
    gauge:number;
}

export const WaterQuality = ({ ph, height, gauge }: Props) => {
    const { classes } = useStyles();

    return (
        <CardIndicator style={{ justifyContent: 'space-between' }}>
            <Box className={classes.container}>
                <Typography variant="h2">Water Quality</Typography>

                <Box className={classes.indicator}>
                    <Typography variant="h3">{height}cm</Typography>
                    <Typography variant="h3">{`ph ${ph}`}</Typography>
                </Box>
            </Box>
            <Box className={classes.chart}>
                <WaterGauge percentage={gauge}/>
            </Box>
        </CardIndicator>
    );
};
