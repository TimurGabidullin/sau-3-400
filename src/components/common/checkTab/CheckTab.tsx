import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Table from '../table/Table';


export default function ColorTabs() {
    const [value, setValue] = React.useState('table');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ maxWidth: '100%' }}>
            <Tabs
                sx={{ display: {xs: 'none', md: 'flex'}}}
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="primary"
                aria-label="secondary tabs example"
            >
                <Tab value="table" label="Item One" />
                <Tab value="info" label="Item Two" />
            </Tabs>

            {value==='table'?<Table/>:'info'}


        </Box>
    );
}