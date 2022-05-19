import React, {memo, useEffect} from 'react';
import TableSize2x5 from "../../common/table/TableSize2x5";
import Typography from "@mui/material/Typography";
import UniversalTabWithTable from "../../../HOC/UniversalTabWithTable";

const Fade = require("react-reveal/Fade")


type CheckPropsType = {}

const Check33 = (props: CheckPropsType) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Fade bottom cascade>
            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> На пульте ПК-31-01 переключатель ИСКЛЮЧ УСП установите в положение "4".</p>
                <p> На пульте ПС-172-02 нажмите кнопку-лампочку ТАНГАЖ. </p>
                <p> Поворотом рукоятки СПУСК-ПОДЬЕМ на пульте ПУ-165-01 установите между контактами 36 и 19 контрольного
                    соединителя Ш37 блока ВПК-52-01 в &#8544; канале САУ напряжение U<span>вых</span>=+(3±0,1)В. </p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 0)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p>Измерьте напряжение постоянного тока U<span>рв</span>&#8544;,&#8545;,&#8546;,&#8547;
                    между контактами 14 и 11 контрольного соединителя Ш35 блока ВПК-52-01 во всех каналах САУ.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 1)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> На пульте ПС-172-02 нажмите кнопку-лампочку ТАНГАЖ ОТКЛ.</p>
                <p> На пульте ПК-31-01 переключатель ИСКЛЮЧ УСП установите в положение "0". </p>
                <p>Измерьте напряжение постоянного тока U<span>рв</span>&#8544;,&#8545;,&#8546;,&#8547;. Если оно
                    отличается от измеренного в предыдущем пункте, установите его с помощью триммера руля высоты.</p>
                <p>Измерьте напряжение постоянного тока U<span>вых</span>&#8544;,&#8545;,&#8546;,&#8547;
                    между контактами 31 и 11 контрольного соединителя Ш35 блока ВПК-52-01 во всех каналах САУ.</p>
                <p> Проверьте, что: </p>
                <p> U<span>вых</span>-U<span>вых</span>&#8544;,&#8545;,&#8546;,&#8547; не более ±0,3В.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 2)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Повторите проверку, устанавливая напряжения U<span>вых</span>=минус (3±1)В.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 3)(props)}


            {UniversalTabWithTable(TableSize2x5, 4)(props)}


            {UniversalTabWithTable(TableSize2x5, 5)(props)}
            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Установите элероны в нейтральное положение.</p>
            </Typography>
        </Fade>
    );
}

export default memo(Check33);
