import React, {memo, useEffect} from 'react';
import TableSize2x5 from "../../common/table/TableSize2x5";
import Typography from "@mui/material/Typography";
import UniversalTabWithTable from "../../../HOC/UniversalTabWithTable";

const Fade = require("react-reveal/Fade")


type CheckPropsType = {}

const Check22 = (props: CheckPropsType) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Fade bottom cascade>
            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> На пульте ПК-31-01 переключатель ИСКЛЮЧ ПОСАДКА установите в положение &#xC9;, ИСКЛЮЧ УСП - в
                    положение "4".</p>
                <p> На пульте ПР-173-02 переключатель режимов установите в положение ЗАХОД.</p>
                <p> В соответствии с ТУ выпустите закрылки в посадочное положение.</p>
                <p> В соответствии с руководством по эксплуатации на А-034 задайте от КПА-034 H<span>рв</span>=160-180м.</p>
                <p> На пульте ПС-172-02 нажмите кнопку-лампочку КРЕН, на пульте ПР-173-02 кнопку-лампочку ЗК.</p>
                <p> Ручкой КУРС на пульте ПУ-165-01 установите индекс ЗК на ПНП<span>лев</span> так, чтобы заданный курс
                    был на угол (90±10)° правее текущего курса.</p>
                <p> Измерьте с помощью вольметра ИП&#8544; пульта ППН-149 значение напряжения постоянного тока между
                    контактами 24 и 11 контрольного соединителя Ш35 блока ВБК-51-01 во всех каналах САУ, значение
                    напряжения должно быть минус (1,6±0,2)В.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 0)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Ручкой КУРС установите индекс ЗК на ПНП так, чтобы заданный курс был на угол (90±10)° левее
                    текущего и измерьте значение напряжения постоянного тока между контактами 24 и 11 контрольного
                    соединителя Ш35 блока ВБК-51-01 во всех каналах САУ, которое должно быть (1,6±0,2)В. </p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 1)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
            <p> Ручку КУРС на пульте ПУ-165-01 установите в нулевое положение, уберите закрылки; отключите КПА РВ.</p>
            </Typography>
        </Fade>
    );
}

export default memo(Check22);
