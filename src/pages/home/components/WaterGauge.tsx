import React from 'react';
import { Box } from '@mui/system';
import { makeStyles } from 'tss-react/mui';
import GaugeChart from 'react-gauge-chart';

type Props = {
    percentage: number;
};

const useStyles = makeStyles()(() => ({
    wrapper: {
        width:'100%',
        height: '100%',
    },
}));

function WaterGauge({ percentage }: Props) {
    const { classes } = useStyles();

    return (
        <Box className={classes.wrapper}>
            <GaugeChart id="gauge-chart"
                nrOfLevels={1}
                colors={['#5BE12C']}
                percent={percentage / 100}
                hideText
                cornerRadius={1}
            />
        </Box>
    );
}

export default WaterGauge;
