import React, {memo, useEffect} from 'react';
import TableSize2x5 from "../../common/table/TableSize2x5";
import Typography from "@mui/material/Typography";
import UniversalTabWithTable from "../../../HOC/UniversalTabWithTable";

const Fade = require("react-reveal/Fade")


type CheckPropsType = {}


const Check29 = (props: CheckPropsType) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Fade bottom cascade>
            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Отключите АЗК САУ ЛЕВ на ЦРУ 200/115В ЛЕВОЕ, АЗК САУ ПРАВ на ЦРУ 200/115В ПРАВОЕ.</p>
                <p> На пульте ПК-31-01 установите переключатель ИСКЛЮЧ ПОСАДКА установите в положение Eк, переключатель
                    ОТКЛ ВЫЧИСЛ - ВКЛ и закройте колпачком.</p>
                <p> Установите на датчиках ДГУ2, ДГУ3, ДГУ4 ручки арретиров в положение АРРЕТИР-0, на датчике ДГУ1 в
                    положение ВКЛ.</p>
                <p> На пульте ПС-172-02 нажмите кнопку-лампочку КУРС &#8544;(КУРС &#8545;).</p>
                <p>Подключите пульт ППН-149 к контактам 21 и 11 контрольного соединителя Ш36 блока ВБК-51-01 канала
                    &#8544;(&#8545;,&#8546;,&#8547; при проверке соответствующих каналов). </p>
                <p> Напряжение, измеряемое вольтметром ИП&#8544; пульта ППН-149, должно находиться в пределах от 20 до 30В.</p>
                <p> Медленно поворачивайте поворотный стол с датчиками ДГУ по часовой стрелке (если смотреть
                со стороны арретира) до момента уменьшения напряжения от 20-30 до 0-3В. Лампочка КУРС 1А (1Б, 2А, 2Б -
                при проверке соответствующих каналов) на пульте ПК-31-01 горит.</p>
                <p> Произведите отсчет значения угла канала ДГУ по шкале поворотного стола КПА-5.</p>
                <p> Угол наклона ДГУ должен быть (2,9±1,1)°.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 0)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Поворотный стол с датчиками ДГУ установите по шкале на отметку 0°. Нажмите на кнопку-лампочку
                    КУРС 1А (1Б, 2А, 2Б) на ПК-31-01, погасите ее.</p>
                <p> Произведите проверку по этой же методике, наклоняя ДГУ против часовой стрелки, если смотреть со
                    стороны арретира</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 1)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
            <p> Установите ручку арретира на датчиках ДГУ1(2,3,4 - при проверке соответствующих каналов) в положение
                    АРРЕТ-0.</p>
                <p> Устанавливая последовательно ручки арретиров на датчиках ДГУ2, ДГУ3, ДГУ4 в положение ВКЛ
                    произведите проверку по этой же методике каналов &#8545;,&#8546;,&#8547;.</p>
                <p> На пульте ПС-172-02 нажмите кнопку-лампочку КУРС ОТКЛ. Ручки арретиров на всех датчиках ДГУ
                    установите в положение ВКЛ.</p>
            </Typography>
        </Fade>
    );
}

export default memo(Check29);
