import React, {memo, useEffect} from 'react';
import TableSize2x5 from "../../common/table/TableSize2x5";
import Typography from "@mui/material/Typography";
import UniversalTabWithTable from "../../../HOC/UniversalTabWithTable";

const Fade = require("react-reveal/Fade")


type CheckPropsType = {}

const Check8 = (props: CheckPropsType) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Fade bottom cascade>
            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> В соответствии с производственной инструкцией (РЭ) на изд. А-034 задайте от КПА-034
                    (&#8544;,&#8545;) радиовысоту H<span>рв</span>=40-50 м. </p>
                <p> В соответствии с ТУ выпустите закрылки в пасадочное положение.</p>
                <p> Задайте с помощью имитатора ИМБ-5-&#8544;(&#8545;,&#8546;) текущее значение правого крена,
                    равное 2-2,5°.</p>
                <p> Подключите вольтметр ИП&#8544; пульта ППН-149 к контактам 47 и 11 контрольного соединителя Ш36
                    блока ВБК-51-01 канала &#8544;(&#8545;,&#8546;). Значение напряжения, измеряемое вольтметром
                    ИП&#8544; пульта ППН-149, должно находиться в пределах 2,5-4В.</p>
                <p> Медленно увеличивайте значение текущего крена датчиком &#611;<span>тек</span> имитатора
                    ИМБ-5-&#8544;(&#8545;,&#8546;) до момента изменения напряжения по вольтметру ИП&#8544; до
                    значения 0,01-0,3В.</p>
                <p> Произведите отсчет значения текущего угла правого крена, при котором происходит изменение
                    значения напряжения, по шкале ИМБ-5-&#8544;(&#8545;,&#8546;)-&#611;
                    <span>пр</span>&#8544;(&#8545;,&#8546;).</p>
                <p> Угол крена должен быть равен (4±1)°.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 0)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Установите значение текущего левого крена, равное 2-2,5°.</p>
                <p> Подключите вольтметр ИП&#8544; пульта ППН-149 к контактам 23, 11 контрольного соединителя Ш36
                    блока ВБК-51-01 канала &#8544;(&#8545;,&#8546;).</p>
                <p> Значение напряжения, измеряемое вольтметром ИП&#8544; пульта ППН-149, должно находиться в
                    пределах 2,5-4В.</p>
                <p> Медленно увеличивайте значение текущего крена датчиком &#611;<span>тек</span> имитатора
                    ИМБ-5-&#8544;(&#8545;,&#8546;) до момента изменения напряжения по вольтметру ИП&#8544; пульта
                    ППН-149 до значения 0,01-0,3В.</p>
                <p> Произведите отсчет значения текущего угла правого(левого) крена, при котором происходит изменение
                    значения напряжения по шкале ИМБ-5-&#8544;(&#8545;,&#8546;)-&#611;<span>лев</span>.</p>
                <p> Угол крена должен быть равен (4±1)°.</p>
                <p> Установите значение текущего крена на имитаторах ИМБ-5-&#8544; на отметку "0".</p>
                <p> Последовательно подключая пульт ППН-149 с помощью жгута "902" к контрольным соединителям Ш36 блоков
                    ВБК-51-01 каналов &#8545;, &#8546;, произведите проверку по выше указанной методике настоящей
                    технологической карты.</p>
                <p> Отсчет углов &#611;<span>тек</span> производите соответственно по шкалам имитаторах ИМБ-5-&#8545;,
                    ИМБ-5-&#8546;.</p>
                <p> Задайте с помощью имитатора ИМБ-5-&#8544; текущее значение правого (левого) крена, равное (5±0.1)°,
                    с помощью имитатора ИМБ-5-&#8546;- текущее значение правого (левого) крена - 2-2,5°
                    (&#611;<span>тек</span> ИМБ-5-&#8545;-0°).</p>
                <p> Подключите вольтметр ИП&#8544; пульта ППН-149 к контактам 47 и 11 контрольного соединителя Ш36
                    блока ВБК-51-01 канала &#8547;.</p>
                <p> Значение напряжения, измеряемое вольтметром ИП&#8544; пульта ППН-149, должно находиться в
                    пределах 2,5-4В.</p>
                <p> Медленно увеличивайте значение текущего крена датчиком &#611;<span>тек</span> имитатора
                    ИМБ-5-&#8546; до момента изменения напряжения по вольтметру ИП&#8544; пульта ППН-149 до
                    значения 0,01-0,3В.</p>
                <p> Произведите отсчет значения текущего угла правого(левого) крена, при котором происходит изменение
                    значения напряжения по шкале ИМБ-5-&#8546;.</p>
                <p> Угол крена, отсчитываемый по шкале &#611;<span>тек</span>, имитатора ИМБ-5-&#8546; должен быть
                    равен (4±1)°.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 1)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Подключите вольтметр ИП&#8544; пульта ППН-149 к контактам 23 и 11 контрольного соединителя Ш36
                    блока ВБК-51-01 канала &#8547;.</p>
                <p> Значение напряжения, измеряемое вольтметром ИП&#8544; пульта ППН-149, должно находиться в
                    пределах 2,5-4В.</p>
                <p> Произведите эту же проверку, задавая текущее значение левого крена.</p>
                <p> Установите значение текущего крена на имитаторах-0°.</p>
            </Typography>

        </Fade>
    );
}


export default memo(Check8);
