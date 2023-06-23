import React from 'react';
import { Paper } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

interface Props {
    children: React.ReactNode;
    style?:React.CSSProperties;
}

const useStyles = makeStyles()(() => ({
    wrapper: {
        width:'318px',
        height:'108px',
        padding: '24px 22px 24px 24px',
        display:'flex',
        alignItems:'center',
        borderRadius:'16px',
        boxSizing:'border-box',
    },
}));

export const CardIndicator = ({ children, style }: Props) => {
    const { classes } = useStyles();

    return (
        <Paper
            className={classes.wrapper}
            elevation={0}
            style={style}
        >
            {children}
        </Paper>
    );
};
