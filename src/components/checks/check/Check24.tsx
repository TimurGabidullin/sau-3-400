import React, {memo, useEffect} from 'react';
import TableSize2x5 from "../../common/table/TableSize2x5";
import Typography from "@mui/material/Typography";
import UniversalTabWithTable from "../../../HOC/UniversalTabWithTable";

const Fade = require("react-reveal/Fade")


type CheckPropsType = {}

const Check24 = (props: CheckPropsType) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Fade bottom cascade>
            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> На пульте ПК-31-01 переключатель ИСКЛЮЧ ПОСАДКА установите в положение &#xC9;, ИСКЛЮЧ УСП - в
                    положение "4".</p>
                <p> На пульте ПР-173-02 переключатель режимов установите в положение НАВИГ.</p>
                <p> В соответствии с руководством по эксплуатации изделия А-821 (А-826) задайте крен</p>
                <p> &#611;<span>зад</span>=(15±0,5)° вправо (влево).</p>
                <p> На пульте ПС-172-02 нажмите кнопку-лампочку КРЕН &#8544;, на пульте ПР-173-02 кнопку-лампочку ГОРИЗ.
                    Лампочки этих кнопок горят. Штурвалы должны повернуться по часовой стрелке (против часовой
                    стрелки).</p>
                <p>Измерьте с помощью пульта ППН-149 значения напряжений между контактами 26 и 11 соединителя Ш35 на
                    блоках ВБК-51-01 во всех каналах САУ, оно должно быть ±(4,4±0,2)В.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 0)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Установите значение заданного крена из А-821 &#611;<span>зад</span>=0°.</p>
                <p> На пульте ПС-172-02 нажмите кнопку КРЕН ОТКЛ.</p>
                <p> Установите от А-821 (А-826) заданный крен &#611;<span>зад</span>=(15±0,5)° влево и произведите
                    поедыдущую проверку.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 1)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Включите в соответствии с руководством по эксплуатации систему КУРС МП-70 в режиме СП-50 (ILS).</p>
                <p> Установите соответствующую режиму частоту КРМ.</p>
                <p> Нажмите и удерживайте на ПУР №&#8544; левую кнопку ТЕСТ-КОНТРОЛЯ.</p>
                <p> Установите от А-821 признак ВКЛЮЧЕНИЯ ЗАХОДА.</p>
                <p> Штурвалы и индекс команд на ПКП<span>лев</span> и ПКП<span>прав</span> должны повернуться против
                    часовой стрелки, бленкер К на ПКП<span>лев</span>, ПКП<span>прав</span> должен быть убран. Табло КУРС
                    на среднем пульте летчиков должно гореть.</p>
                <p> Отпустите кнопку тест-контроля на ПУР №&#8544;. Лампочка ГОРИЗ и табло КУРС не горят.</p>
                <p> На пульте ПС-172-02 нажмите кнопку КРЕН ОТКЛ.</p>
            </Typography>
        </Fade>
    );
}

export default memo(Check24);