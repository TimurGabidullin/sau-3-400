import React, {memo, useEffect} from 'react';
import TableSize2x5 from "../../common/table/TableSize2x5";
import Typography from "@mui/material/Typography";
import UniversalTabWithTable from "../../../HOC/UniversalTabWithTable";

const Fade = require("react-reveal/Fade")


type CheckPropsType = {}

const Check34 = (props: CheckPropsType) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Fade bottom cascade>
            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> На пульте ПК-31-01 переключатель ИСКЛЮЧ УСП установите в положение "4".</p>
                <p> На пульте ПС-172-02 нажмите кнопку-лампочку ТАНГАЖ. </p>
                <p> Измерьте напряжение постоянного тока U<span>0</span>&#8544;,&#8545;,&#8546;,&#8547;
                    между контактами 19 и 11 контрольного соединителя Ш35 блока ВПК-52-01 во всех каналах САУ.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 0)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Выпустите внутренние закрылки на (40±1)° по указателю закрылков в соответствии с ТУ. </p>
                <p> Измерьте с помощью пульта ППН-149 значение напряжения между контактами 19 и 11 контрольного
                    соединителя Ш35 блока ВПК-52-01 во всех каналах САУ -
                    U<span>закр</span>&#8544;,&#8545;,&#8546;,&#8547;.</p>
                <p> Проверьте, что: </p>
                <p> U<span>закр</span> - U<span>0</span>&#8544;,&#8545;,&#8546;,&#8547; = (1,9±0,3)В.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 1)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Измерьте с помощью пульта ППН-149 значение напряжения между контактами 21 и 11 контрольного
                    соединителя Ш35 блока ВПК-52-01 во всех каналах САУ, оно должно быть минус (3,8±0,6)В.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 2)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Выпустите внешние закрылки на (40±1)° по указателю закрылков в соответствии с ТУ. </p>
                <p> Измерьте с помощью пульта ППН-149 значение напряжения между контактами 21 и 11 контрольного
                    соединителя Ш35 блока ВПК-52-01 во всех каналах САУ, оно должно быть минус (7,6±0,6)В.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 3)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Установите внутренние и внешние закрылки в исходное положение.</p>
                <p> На пульте ПС-172-02 нажмите кнопку-лампочку ТАНГАЖ ОТКЛ.</p>
            </Typography>
        </Fade>
    );
}

export default memo(Check34);
