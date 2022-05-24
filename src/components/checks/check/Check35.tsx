import React, {memo, useEffect} from 'react';
import TableSize2x5 from "../../common/table/TableSize2x5";
import Typography from "@mui/material/Typography";
import UniversalTabWithTable from "../../../HOC/UniversalTabWithTable";

const Fade = require("react-reveal/Fade")


type CheckPropsType = {}

const Check35 = (props: CheckPropsType) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Fade bottom cascade>
            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> На пульте ПК-31-01 переключатель ИСКЛЮЧ УСП установите в положение "4".</p>
                <p> В соответствии с производственной инструкцией (РЭ) на ИКВСП-1-7 задайте по указателю высоты
                левого летчика H=(5000±20)м.</p>
                <p> На пульте ПС-172-02 нажмите кнопку-лампочку ТАНГАЖ, на пульте ПР-173-02 кнопку-лампочку ВЫС при
                положении колонок штурвалов, близком к нейтральному.</p>
                <p> Измерьте с помощью пульта ППН-149 значение напряжения между контактами 30 и 11 контрольного
                    соединителя Ш35 блока ВПК-52-01 во всех каналах САУ, оно должно быть не более ±0,05В.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 0)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Задайте ΔH=+(50±5)м [минус(50±5)м] от стабилизируемого значения высоты. Руль высоты должен
                    отклониться
                    вниз (вверх), колонки штурвалов на пикирование (на кабрирование). </p>
                <p> Значение напряжения, измеряемое вольтметром ИП&#8544; пульта ППН-149, должно быть (1,5±0,2)В. </p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 1)(props)}
            {UniversalTabWithTable(TableSize2x5, 2)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Отключите режим стабилизации ΔH незначительным поворотом ручки СПУСК-ПОДЬЕМ</p>
                <p> На пульте ПС-172-02 нажмите кнопку-лампочку ТАНГАЖ ОТКЛ.</p>
            </Typography>


        </Fade>
    );
}

export default memo(Check35);
