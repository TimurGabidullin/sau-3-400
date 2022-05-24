import React, {memo, useEffect} from 'react';
import TableSize2x5 from "../../common/table/TableSize2x5";
import Typography from "@mui/material/Typography";
import UniversalTabWithTable from "../../../HOC/UniversalTabWithTable";

const Fade = require("react-reveal/Fade")


type CheckPropsType = {}

const Check36 = (props: CheckPropsType) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Fade bottom cascade>
            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                {/*<p> На пульте ПК-31-01 переключатель ИСКЛЮЧ УСП установите в положение "4".</p>*/}
                <p> В соответствии с производственной инструкцией (РЭ) на ИКВСП-1-7 задайте по указателю скорости числа М
                    левого летчика V<span>пр</span>=(450±10)км/ч.</p>
                <p> На пульте ПС-172-02 нажмите кнопку-лампочку ТАНГАЖ, на пульте ПР-173-02 кнопку-лампочку СКОР при
                положении колонок штурвалов, близком к нейтральному.</p>
                <p> Измерьте с помощью пульта ППН-149 значение напряжения между контактами 30 и 11 контрольного
                    соединителя Ш35 блока ВПК-52-01 во всех каналах САУ, оно должно быть не более ±0,05В.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 0)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Задайте ΔV<span>пр</span>=+(30±5)м [минус(30±5)м] от стабилизируемого значения V<span>пр</span>.
                    Руль высоты должен отклониться вверх (вниз), колонки штурвалов на на кабрирование (на пикирование). </p>
                <p> Значение напряжения, измеряемое вольтметром ИП&#8544; пульта ППН-149, должно быть (3±0,6)В. </p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 1)(props)}
            {UniversalTabWithTable(TableSize2x5, 2)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> На пульте ПС-172-02 нажмите кнопку-лампочку ТАНГАЖ ОТКЛ.</p>
            </Typography>


        </Fade>
    );
}

export default memo(Check36);
