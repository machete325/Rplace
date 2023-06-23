import React from 'react';
import {
    Box,
    Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';
import CloudIcon from '@mui/icons-material/Cloud';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { CardIndicator } from './CardIndicator';

const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 20,
    borderRadius: 10,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: '#494F56',
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 10,
        backgroundColor: '#63B83F',
    },
}));

const useStyles = makeStyles()(() => ({
    cloud:{
        height:'100%',
        width:'100%',
        color:'white',
        display:'flex',
        justifyContent:'end',
    },
    container:{
        height:'100%',
        width:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
    },
    progressContainer:{
        display:'flex',
        alignItems:'center',
    },
}));

interface Props {
    value:number;
}

export const GHGReduction = ({ value }:Props) => {

    const { classes } = useStyles();

    return (
        <CardIndicator>
            <Box className={classes.container}>
                <Typography
                    sx={{ textWrap: 'nowrap' }}
                    variant='h2'
                >
                    GHG Reduction
                </Typography>

                <Box className={classes.progressContainer}>
                    <Box sx={{ width: '100%', mr: 1 }}>
                        <BorderLinearProgress
                            variant="determinate"
                            value={value}
                        />
                    </Box>
                    <Typography variant='h2'>{value}%</Typography>
                </Box>
            </Box>
            <Box className={classes.cloud}>
                <CloudIcon/>
            </Box>
        </CardIndicator>
    );
};
