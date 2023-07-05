import React, {
    useEffect,
    useRef,
} from 'react';
import * as echarts from 'echarts';
import { Box } from '@mui/system';
import { makeStyles } from 'tss-react/mui';
import { ECharts } from 'echarts';
import {
    IconButton,
    Paper,
    Typography,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

interface Series {
    name: string;
    type: string;
    data: number[];
}

type Props = {
    data: {
        xAxis: {
            type: any;
            boundaryGap: boolean;
            data: number[];
        };
        series: Series[];
    };
};

const useStyles = makeStyles()(() => ({
    wrapper: {
        width: '100%',
        height: '230px',
    },
}));

export const StatisticsChart = ({ data }: Props) => {
    const chartRef = useRef<HTMLDivElement>(null);
    let chart: ECharts | undefined;
    const { classes } = useStyles();

    const option: echarts.EChartOption = {
        textStyle: {
            color: '#fff',
            fontFamily: 'Poppins',
            fontWeight: 400,
        },
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: ['COD levels', 'TSS levels', 'Forecast', 'COD Output'],
            textStyle: {
                color: '#fff',
                fontFamily: 'Poppins',
                fontWeight: 400,
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
        },
        xAxis: {},
        yAxis: {
            type: 'value',
        },
        series: [],
    };

    const initChart = () => {
        option.series = data.series;
        option.xAxis = data.xAxis;
    };

    useEffect(() => {
        initChart();

        window.addEventListener('resize', () => {
            chart?.resize();
        });

        const chartInstance = echarts.init(chartRef.current as HTMLElement);

        chartInstance.setOption(option);

        return () => {
            chartInstance.dispose();
        };
    }, []);

    return (
        <Paper elevation={0}
            style={{ padding: '35px 35px 45px 25px', borderRadius: '16px' }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ marginLeft: '10px' }}
                    variant="h2"
                >
                    {'analysis & statistics'}
                </Typography>

                <IconButton>
                    <MoreHorizIcon sx={{ color: '#fff' }}/>
                </IconButton>
            </Box>
            <Box ref={chartRef}
                className={classes.wrapper}
            />
        </Paper>
    );
};
