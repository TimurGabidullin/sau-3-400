import React, {memo, useEffect} from 'react';
import TableSize2x5 from "../../common/table/TableSize2x5";
import Typography from "@mui/material/Typography";
import UniversalTabWithTable from "../../../HOC/UniversalTabWithTable";

const Fade = require("react-reveal/Fade")


type CheckPropsType = {}


const Check31 = (props: CheckPropsType) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Fade bottom cascade>
            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Отключите АЗК САУ ЛЕВ на ЦРУ 200/115В ЛЕВОЕ.</p>
                <p> На пульте ПК-31-01 установите переключатель ИСКЛЮЧ ПОСАДКА установите в положение  &#xC9;
                    <span>г</span>.</p>
                <p> На пульте ПС-172-01 нажмите кнопку-лампочку КУРС &#8544;(КУРС &#8545;).</p>
                <p> Медленно поворачивайте поворотный стол с датчиками ДГУ по часовой стрелке (если смотреть
                    со стороны арретира) до момента переключения каналов; лампочка КУРС &#8544;(КУРС &#8545;) не горит,
                    загорается КУРС &#8545;(КУРС &#8544;). Произведите отсчет значения угла наклона ДГУ по шкале
                    поворотного стола КПА-5.</p>
                <p> Угол наклона ДГУ должен быть (2,9±1,1)°.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 0)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Нажмите кнопку-лампочку КУРС ОТКЛ на пульте ПС-172-02.</p>
                <p> Произведите проверку указанной выше, наклоняя ДГУ против часовой стрелки, если смотреть со
                    стороны арретира.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 1)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> На пульте ПК-31-01 установите переключатель ИСКЛЮЧ ПОСАДКА установите в положение
                    Е<span>г</span>.</p>
                <p> Произведите проверку по методике настоящей технологической карты.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 2)(props)}
            {UniversalTabWithTable(TableSize2x5, 3)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> На пульте ПС-172-01 нажмите кнопку-лампочку КУРС &#8545; и произведите проверку по методике
                    настоящей технологической карты.</p>
            </Typography>


        </Fade>
    );
}

export default memo(Check31);
