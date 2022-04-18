import React, {useCallback} from 'react'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SettingsIcon from "@mui/icons-material/Settings";
import Info from "../components/common/info/Info";


export const UniversalTabWithTable = (Table: React.FC, indexOfTable = 0) => {


    const [selectTab, setSelectTab] = React.useState('table');
    const handleChange = useCallback((event: React.SyntheticEvent, newValue: string) => {

        setSelectTab(newValue)
    }, []);


    const TabWithTable = (props: any) => {
        // const [selectTab, setSelectTab] = React.useState('table');
        console.log('TabWithTableProps', props)

        return (
            <Container maxWidth={"sm"}>
                <Box sx={{
                    maxWidth: '100%',
                    backgroundColor: '#f5f5f5',
                    borderRadius: '5px',
                    // border: '2px solid #1976d2'
                    border: '1px solid #9c27b0',
                    minHeight:'216px',
                    margin:'5px 0'
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
                    {selectTab === 'table'
                        ? <Table {...props} indexOfTable={indexOfTable}/>
                        : <Info {...props} indexOfTable={indexOfTable}/>}
                </Box>
            </Container>
        )
    }
    return TabWithTable
}

export default UniversalTabWithTable;