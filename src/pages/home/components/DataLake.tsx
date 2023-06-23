import {
    IconButton,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { CardIndicator } from './CardIndicator';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

export const DataLake = () => {
    return (
        <CardIndicator style={{ marginTop: '24px', height: '210px', width: '100%', alignItems:'flex-start' }}>
            <Box sx={{ display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center' }}>
                <Typography variant="h2">Data Lake</Typography>

                <Box>
                    <IconButton>
                        <MoreHorizIcon sx={{ color:'#fff' }}/>
                    </IconButton>

                    <IconButton>
                        <FilterAltOutlinedIcon sx={{ color:'#fff' }}/>
                    </IconButton>
                </Box>
            </Box>
            <Box>
                <img src="/"
                    alt=""
                />

                <img src="/"
                    alt=""
                />
            </Box>
        </CardIndicator>
    );
};
