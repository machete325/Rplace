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

type Props = {
    data: any;
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
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                name: 'COD levels',
                type: 'line',
                data: [1700, 1750, 1900, 1900, 2100, 2000, 1900],
            },
            {
                name: 'TSS levels',
                type: 'line',
                data: [1200, 1240, 1400, 1350, 1500, 1800, 1620],
            },
            {
                name: 'Forecast',
                type: 'line',
                data: [0, 0, 0, 0, 0, 0, 0, 1900, 2100, 2050, 1950, 1900],
            },
            {
                name: 'COD Output',
                type: 'line',
                data: [125, 150, 140, 220, 340, 230, 200],
            },
        ],
    };

    // const initChart = () => {
    //     option.series[0] = { ...option.series[0], data: [{ value: percentage }] };
    // };

    useEffect(() => {
    // initChart();

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
        <Paper
            elevation={0}
            style={{ padding: '35px 35px 45px 25px', borderRadius:'16px' }}
        >
            <Box sx={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <Typography
                    sx={{ marginLeft:'10px' }}
                    variant='h2'
                >
                    {'analysis & statistics'}
                </Typography>

                <IconButton>
                    <MoreHorizIcon sx={{ color:'#fff' }}/>
                </IconButton>
            </Box>
            <Box ref={chartRef}
                className={classes.wrapper}
            />
        </Paper>
    );
};
