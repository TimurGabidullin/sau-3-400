import React from 'react';
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TableSize2x5 from "../../common/table/TableSize2x5";
import Box from '@mui/material/Box';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SettingsIcon from '@mui/icons-material/Settings';
import styles from './Check.module.css';


function Check2() {

    const [selectTab, setSelectTab] = React.useState('table');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setSelectTab(newValue);
    };

    return (
        <div className="Check">
            <Container maxWidth={"sm"}>



                <Box sx={{
                    maxWidth: '100%',
                    backgroundColor: '#f5f5f5',
                    borderRadius: '5px'
                }}>

                    <Tabs
                        sx={{display: {xs: 'none', md: 'flex'}, justifyContent: 'flex-end'}}
                        value={selectTab}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="primary"
                        centered
                        aria-label="secondary tabs example">


                        <Tab value="table" label="Таблица" icon={<FormatListBulletedIcon/>} iconPosition='end'/>
                        <Tab value="info" label="Инфо" icon={<SettingsIcon/>} iconPosition='end'/>

                    </Tabs>

                    {selectTab === 'table' ? <TableSize2x5/> : 'info'}
                </Box>
            </Container>
        </div>
    );
}

export default Check2;
