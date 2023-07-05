import React from 'react';
import {
    Box,
    Typography,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { LoadingIndicatorBig } from '../../common/components/LoadingIndicatorBig';
import { FeatureHeader } from '../../common/components/FeatureHeader';
import { WaterQuality } from './components/WaterQuality';
import { GHGReduction } from './components/GHGReduction';
import { CarbonCredits } from './components/CarbonCredits';
import { SDG } from './components/SDG';
import { StatisticsChart } from './components/StatisticsChart';
import { DataLake } from './components/DataLake';
import config from '../../config.json';

const useStyles = makeStyles()(({ spacing }) => ({
    wrapper: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: spacing(0, 0, 2),
    },
    container: {
        columnGap: '24px',
        marginTop: '50px',
        display: 'flex',
    },
    mainContainer: {
        width: '60%',
    },
    secondaryContainer: {
        width: '40%',
    },
    videoContainer: {
        borderRadius: '8px',
    },
    video: {
        width: '100%',
        height: '250px',
        borderRadius: '8px',
    },
    stageContainer: {
        marginTop: '50px',
        paddingRight: '20px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    indicatorContainer: {
        marginTop: '24px',
        display: 'flex',
        flexWrap: 'wrap',
        columnGap: '14px',
        rowGap: '14px',
    },
}));

const stageConfig = [
    {
        name: 'Area 1',
        isActive: false,
    },
    {
        name: 'Area 2',
        isActive: false,
    },
    {
        name: 'Area 3',
        isActive: false,
    },
    {
        name: 'Area 4',
        isActive: false,
    },
    {
        name: 'All',
        isActive: true,
    },
];

export const HomePage = () => {
    const { classes } = useStyles();
    // eslint-disable-next-line camelcase
    const { SDG: sdgValue, cardbonCredits, waterQualityGauge, chart } = config.home;

    return (
        <Box className={classes.wrapper}>
            <LoadingIndicatorBig>
                <FeatureHeader title={config.title}
                    addBtnTitle="Add post"
                    onCreate={() => console.log('ok')}
                />

                <Box className={classes.container}>
                    <Box className={classes.mainContainer}>
                        <Box className={classes.videoContainer}>
                            <img src="/images/video.png"
                                alt="live-video"
                                className={classes.video}
                            />
                        </Box>

                        <Box className={classes.stageContainer}>
                            {stageConfig.map(({ name, isActive }) => (
                                <Typography key={name}
                                    variant="caption"
                                    sx={{ color: isActive ? '#fff' : undefined }}
                                >
                                    {name}
                                </Typography>
                            ))}
                        </Box>

                        <Box className={classes.indicatorContainer}>
                            <WaterQuality
                                ph={waterQualityGauge.ph}
                                height={waterQualityGauge.height}
                                gauge={waterQualityGauge.gauge}
                            />
                            <GHGReduction value={config.home.GHG_reduction.value}/>
                            <CarbonCredits weight={cardbonCredits.weight}
                                price={cardbonCredits.price}
                            />
                            <SDG value={sdgValue}/>
                        </Box>
                    </Box>
                    <Box className={classes.secondaryContainer}>
                        <StatisticsChart data={chart.data}/>
                        <DataLake/>
                    </Box>
                </Box>
            </LoadingIndicatorBig>
        </Box>
    );
};
