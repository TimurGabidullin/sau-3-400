import React from 'react';
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TableSize2x5 from "../../common/table/TableSize2x5";
import Box from '@mui/material/Box';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SettingsIcon from '@mui/icons-material/Settings';
import styles from './Check.module.css';
import Typography from "@mui/material/Typography";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {useParams} from "react-router-dom";
import {CheckType} from "../../../redux/checksReducer";


type CheckPropsType = {
    checkId: string
}

const Check1=(props: CheckPropsType)=> {
    const params = useParams()
    const [selectTab, setSelectTab] = React.useState('table');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setSelectTab(newValue);
    };


    const checks = useSelector((state: AppStateType) => state.checks[params.header ? params.header : 'head1'])
    const headerOfCheck = checks.filter((ch: CheckType) => ch.idTech === params.page)[0].title


    return (
        <div className="Check">
            <Typography sx={{paddingLeft: '20px'}} variant="h6" component="h6">
                {headerOfCheck}
            </Typography>

            <Typography sx={{paddingLeft: '20px'}} variant="body1" component='p'>
                <p> Включите каналы тангажа и крена САУ.</p>
                <p> Измерьте с помощью пульта ППН-149 и запишите значения напряжений постоянного тока
                    U&#x394;V0I(II,III,IV) между контактами 20 и 11 контрольного соединителя Ш35 ВПК-52-01
                    во всех каналах САУ. Значения напряжения должны быть &#xB1;0,25В
                </p>
            </Typography>

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

            <Typography sx={{paddingLeft: '20px'}} variant="body1" component='p'>
                <p> Измерьте с помощью вольтметра ИПI пульта ППН-149 и запишите значения напряжений постоянного тока
                    U&#x394;&#x3A8;0I(II,III,IV) между контактами 24 и 11 контрольного соединителя Ш35 ВБК-52-01
                    во всех каналах САУ. Значения напряжения должны быть &#xB1;0,1В
                </p>
            </Typography>
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

export default Check1;
