import {
    styled,
    Switch,
    SwitchProps,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { CardIndicator } from './CardIndicator';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    container: {
        display:'flex',
        justifyContent:'space-between',
    },
}));

const StyledSwitch = styled((props: SwitchProps) => (
    <Switch focusVisibleClassName=".Mui-focusVisible"
        disableRipple
        {...props}
    />
))(({ theme }) => ({
    width: 48,
    height: 24,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(23px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: '#63B83F',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
          theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 20,
        height: 20,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));

interface Props {
    value:boolean;
}

export const SDG = ({ value }:Props) => {
    const { classes } = useStyles();

    return (
        <CardIndicator style={{ flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between' }}>
            <Box>
                <Typography variant='h2'>{'SDG\'s'}</Typography>
            </Box>

            <Box className={classes.container}>
                <img
                    src='/'
                    alt=''
                />

                <img
                    src='/'
                    alt=''
                />

                <img
                    src='/'
                    alt=''
                />

                <StyledSwitch defaultChecked={value}/>
            </Box>
        </CardIndicator>
    );
};
