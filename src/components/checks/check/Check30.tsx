import React, {memo, useEffect} from 'react';
import TableSize2x5 from "../../common/table/TableSize2x5";
import Typography from "@mui/material/Typography";
import UniversalTabWithTable from "../../../HOC/UniversalTabWithTable";

const Fade = require("react-reveal/Fade")


type CheckPropsType = {}


const Check30 = (props: CheckPropsType) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Fade bottom cascade>
            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Включите АЗК САУ ЛЕВ на ЦРУ 200/115В ЛЕВОЕ, АЗК САУ ПРАВ на ЦРУ 200/115В ПРАВОЕ.</p>
                <p> На пульте ПК-31-01 установите переключатель ИСКЛЮЧ ПОСАДКА установите в положение Eк.</p>
                <p> Убедитесь, что шкалы поворотного столя КПА-5 с установленными датчиками ДГУ находятся в нулевом
                    положении, ручки арретиров на датчиках ДГУ в положении ВКЛ.</p>
                <p> На пульте ПС-172-02 нажмите кнопку-лампочку КУРС &#8544; (КУРС &#8545;), педали (руль направления)
                    не должны перемещаться. Допускается медленное перемещение руля направления (педалей), компенсируемое
                    наклоном ДГУ на угол ±0,5° по шкале поворотного стола КПА-5.</p>
                <p> Убедитесь, что значение напряжения по вольтметру постоянного тока ИП&#8544; на ППН-149 между
                    контактами 29 и 11 контрольного соединителя Ш36 блоков ВБК-51-01 каналов &#8544;,&#8545; находится в
                    пределах ±0,2В.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 0)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Нажмите на пульте ПС-172-02 кнопку-лампочку КУРС &#8545; и произведите проверку по этой же
                    методике.</p>
            </Typography>
        </Fade>
    );
}

export default memo(Check30);
