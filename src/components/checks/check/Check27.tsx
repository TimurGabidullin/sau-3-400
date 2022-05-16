import React, {memo, useEffect} from 'react';
import TableSize2x5 from "../../common/table/TableSize2x5";
import Typography from "@mui/material/Typography";
import UniversalTabWithTable from "../../../HOC/UniversalTabWithTable";

const Fade = require("react-reveal/Fade")


type CheckPropsType = {}

const Check27 = (props: CheckPropsType) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Fade bottom cascade>
            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Включите АЗК САУ ЛЕВ на ЦРУ 200/115В и АЗК САУ ПРАВ на ЦРУ 200/115В ПРАВОЕ.</p>
                <p> На пульте ПК-31-01 установите переключатель ИСКЛЮЧ ПОСАДКА в положение "2". На пульте ПС-172-02
                    нажмите кнопку-лампочку КУРС &#8544;. Педали (руль направления) не должны перемещаться. Допускается
                    медленное перемещение руля направления (педалей), компенсируемое наклоном ДГУ на угол ±0,5° по шкале
                    поворотного стола КПА-5.</p>
                <p> Введите в таблицу "0" при отсутствии перемещения педали и "1" при наличии.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 0)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> На пульте ПК-31-01 установите переключатель ИСКЛЮЧ ПОСАДКА в положение "1".</p>
                <p> Руль направления (педали) не должен перемещаться (допускается медленное перемещение руля
                    направления, компенсируемое наклоном ДГУ на угол ±0,5° по шкале поворотного стола КПА-5).</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 1)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> На пульте ПС-172-02 нажмите кнопку-лампочку КУРС ОТКЛ.</p>
                <p> Шкалы на поворотном столе КПА-5 установите в нулевое положение.</p>
                <p> Нажмите кнопку-лампочку КУРС &#8544; на пульте ПС-172-02 и произведите проверку по выше указанной
                    методике настоящей технологической карты.</p>
            </Typography>

        </Fade>
    );
}

export default memo(Check27);
