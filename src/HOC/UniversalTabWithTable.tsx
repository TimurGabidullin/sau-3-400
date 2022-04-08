import React from 'react'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SettingsIcon from "@mui/icons-material/Settings";


export  const UniversalTabWithTable=(Table:React.FC,indexOfTable=0)=>{





   let TabWithTable=(props:any)=>{
      const [selectTab, setSelectTab] = React.useState('table');
      const handleChange = (event: React.SyntheticEvent, newValue: string) => {
          setSelectTab(newValue);
      };



      console.log(props)

      return (
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

                  {selectTab === 'table' ? <Table {...props } indexOfTable={indexOfTable} /> : 'info'}
              </Box>
          </Container>
      )
  }
    return TabWithTable
}

export default UniversalTabWithTable;