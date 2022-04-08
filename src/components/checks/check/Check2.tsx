import React from 'react';
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TableSize2x5 from "../../common/table/TableSize2x5";
import Box from '@mui/material/Box';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SettingsIcon from '@mui/icons-material/Settings';
import styles from './Check.module.css';
import UniversalTabWithTable from "../../../HOC/UniversalTabWithTable";
















function Check2(props:any) {

    const [selectTab, setSelectTab] = React.useState('table');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setSelectTab(newValue);
    };

    return (
        <div className="Check">


            <p>
                На пульте ПК-31-01 переключатель ИСКЛЮЧ ПОСАДКА установите в положение 	&#xC9;, ИСКЛЮЧ УСП установите
                в положение "4".
                На пульте ПР-173-02 переключатель ежимов установите в положение ЗАХОД.
                Включите, согласно руководству по эксплуатации аппаратуру КУРС МП-70.
                На имитаторе МИМ-70 установите переключатель ОТКЛОНЕНИЕ в положение вправо/вверх (влево/вниз) и 2Т.
                Установите на МИМ-70 соответствующую режиму частоту КРМ.
                На пульте ПС-72-02, нажмите кнопку-лампочку КРЕН, включите имитатор МИМ-70-I(II), нажмите
                кнопку-лампочку ГОРИЗ на пульте ПР-173-02.

            </p>


            {UniversalTabWithTable(TableSize2x5)(props)}








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
