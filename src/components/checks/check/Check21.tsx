import React, {memo, useEffect} from 'react';
import TableSize2x5 from "../../common/table/TableSize2x5";
import Typography from "@mui/material/Typography";
import UniversalTabWithTable from "../../../HOC/UniversalTabWithTable";

const Fade = require("react-reveal/Fade")


type CheckPropsType = {}

const Check21 = (props: CheckPropsType) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Fade bottom cascade>
            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> На пульте ПК-31-01 переключатель ИСКЛЮЧ ПОСАДКА установите в положение &#xC9;, ИСКЛЮЧ УСП - в
                    положение "4".</p>
                <p> На пульте ПР-173-02 переключатель режимов установите в положение ЗАХОД.</p>
                <p> Включите имитаторы МИМ-70. Установите на МИМ-70-&#8544;(&#8545;) соответствующую режиму частоту.
                    Переключатель ОТКЛОНЕНИЕ на МИМ-70 установите в положение "0". Убедитесь, что на пультах ПУР системы
                    КУРС МП-70 горят лампочки К1, К2, Г1, Г2.</p>
                <p> На селекторах курса систем КУРС-МП-70 СК<span>лев</span>, СК<span>лев</span> установите значение
                    угла курса на отметку "0". </p>
                <p> На пульте ПУР-5 системы А-826 переключатель курсов установите в положение ЗК, на счетчике заданного
                    курса установите угол курса на отметку "0", нажмите на 5-7с кнопку согласования. </p>
                <p> Установите на СК<span>лев</span> и СК<span>прав</span> заданный курс, равный 19° (341°). При
                    этом индексы ЗК на приборах ПНП<span>лев</span>, ПНП<span>лев</span> повернутся соответственно на
                    (19±1)° вправо (влево).</p>
                <p> На пульте ПС-172-02 нажмите кнопку-лампочку КРЕН, на пульте ПР-173-02 кнопку-лампочку ГОРИЗ.</p>
                <p> Измерьте с помощью вольтметра ИП&#8544; пульта ППН-149 значение напряжения постоянного тока между
                    контактами 24 и 11 контрольного соединителя Ш35 блока ВБК-51-01 каналов &#8544;,&#8545;,&#8546;,&#8547; -
                    U<span>19</span>&#8544;, U<span>19</span>&#8545;, U<span>19</span>&#8546;, U<span>19</span>&#8547;,
                    (U<span>341</span>&#8544;, U<span>341</span>&#8545;, U<span>341</span>&#8546;, U<span>341</span>&#8547;).</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 0)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Измените значение заданного курса на СК<span>лев</span> и СК<span>прав</span> в сторону
                    увеличения на 3° &#936;<span>зад</span>=22° и &#936;<span>зад</span>=338° и измерьте значение
                напряжения между контактами 24 и 11 контрольного соединителя Ш35 блока ВБК-51-01.</p>
                <p> U<span>22</span>&#8544;, U<span>22</span>&#8545;, U<span>22</span>&#8546;, U<span>22</span>&#8547;,
                    (U<span>338</span>&#8544;, U<span>338</span>&#8545;, U<span>338</span>&#8546;, U<span>338</span>&#8547;).</p>
                <p> Проверьте, что</p>
                <p> U<span>22</span>&#8544; - U<span>19</span>&#8544;=минус (0.8±0.15)В.</p>
                <p> U<span>22</span>&#8545; - U<span>19</span>&#8545;=минус (0.8±0.15)В.</p>
                <p> U<span>22</span>&#8546; - U<span>19</span>&#8546;=минус (0.8±0.15)В.</p>
                <p> U<span>22</span>&#8547; - U<span>19</span>&#8547;=минус (0.8±0.15)В.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 1)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Произведите проверку, задавая значения заданного курса 341° и 338°.</p>
                <p> Проверьте, что</p>
                <p> U<span>338</span>&#8544; - U<span>341</span>&#8544; = +(0.8±0.15)В.</p>
                <p> U<span>338</span>&#8545; - U<span>341</span>&#8545; = +(0.8±0.15)В.</p>
                <p> U<span>338</span>&#8546; - U<span>341</span>&#8546; = +(0.8±0.15)В.</p>
                <p> U<span>338</span>&#8547; - U<span>341</span>&#8547; = +(0.8±0.15)В.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 2)(props)}
            {UniversalTabWithTable(TableSize2x5, 3)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Если включена САЗ-2-01, убедитесь, что баранки штурвалов повернуты против часовой стрелки.</p>
                <p> На пульте ПС-172-02 нажмите кномку КРЕН ОТКЛ.</p>
                <p>Установите на СК<span>лев</span>, СК<span>прав</span> курс на отметку "0".</p>
            </Typography>
        </Fade>
    );
}

export default memo(Check21);
