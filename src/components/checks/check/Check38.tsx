import React, {memo, useEffect} from 'react';
import TableSize2x5 from "../../common/table/TableSize2x5";
import Typography from "@mui/material/Typography";
import UniversalTabWithTable from "../../../HOC/UniversalTabWithTable";

const Fade = require("react-reveal/Fade")


type CheckPropsType = {}


const Check38 = (props: CheckPropsType) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Fade bottom cascade>
            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> На пульте ПК-31-01 переключатель ИСКЛЮЧ ПОСАДКА в положение &#xC9;<span>г</span>, ИСКЛЮЧ УСП - в
                    положение "4"</p>
                <p> На пульте ПР-173-02 переключатель режимов работы установите в положение ЗАХОД.</p>
                <p> Установите на имитаторах МИМ-70, убедитесь, что горят лампочки Г1, К1, Г2, К2 на пультах ПУР системы
                    КУРС-МП-70.</p>
                <p> В соответствии с производственной инструкцией (РЭ) на изд. А-034 установите от КПА-034
                    (&#8544;,&#8545;) H<span>рв</span>=0-1 м.</p>
                <p> Измерьте с помощью вольтметра ИП&#8544; пульта ППН-149 значения напряжения постоянного тока между
                    контактами 38 и 11 контрольного соединителя Ш35 блока ВПК-52-01 во всех каналах САУ.</p>
                <p> Значение напряжения должно быть не более ±0,1В.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 0)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Измерьте с помощью вольтметра ИП&#8544; пульта ППН-149 значения напряжения постоянного тока между
                    контактами 41 и 11 контрольного соединителя Ш35 блока ВПК-52-01 во всех каналах САУ.</p>
                <p> Значение напряжения должно быть не более ±0,1В.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 1)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Измерьте с помощью вольтметра ИП&#8544; пульта ППН-149 значения напряжения постоянного тока между
                    контактами 42 и 11 контрольного соединителя Ш35 блока ВПК-52-01 во всех каналах САУ.</p>
                <p> Значение напряжения должно быть не более ±0,1В.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 2)(props)}

        </Fade>
    );
}

export default memo(Check38);
