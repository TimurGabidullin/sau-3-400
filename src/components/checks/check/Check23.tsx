import React, {memo, useEffect} from 'react';
import TableSize2x5 from "../../common/table/TableSize2x5";
import Typography from "@mui/material/Typography";
import UniversalTabWithTable from "../../../HOC/UniversalTabWithTable";

const Fade = require("react-reveal/Fade")


type CheckPropsType = {}

const Check23 = (props: CheckPropsType) => {
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
                    угла курса на отметку "0".</p>
                <p> На пульте ПУР-5 системы А-826 переключатель курсов установите в положение ЗК, на счетчике заданного
                    курса установите угол курса на отметку "0", нажмите на 5-7с кнопку согласования. </p>
                <p> На пульте ПС-172-02 нажмите кнопку-лампочку КРЕН, на пульте ПР-173-02 - кнопку-лампочку ГОРИЗ. На
                    приборных досках летчиков должны гореть табло КУРС.</p>
                <p> В соответствии с ТУ выпустите закрылки в посадочное положение.</p>
                <p> В соответствии с производственной инструкцией на изд. А-034 задайте от КПА-034 H<span>рв</span>=160-180м.</p>
                <p> Установите переключатели ОТКЛОНЕНИЕ на имитаторах МИМ-70 в положения "вправо/вверх" ("влево/вниз") и КР.</p>
                <p> Измерьте с помощью пульта ППН-149 значение напряжения постоянного тока между контактами 1(2) и 11
                    контрольного соединителя Ш37 блока ВБК-51-01 во всех каналах, значение напряжения должно быть минус
                    3-5В. Убедитесь, что на приборных досках летчиков не горят табло "&#8660;"</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 0)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Установите переключатели ОТКЛОНЕНИЕ на МИМ-70 в положения "вправо/вверх" ("влево/вниз") и 1Т и
                    произведите измерения, указанные в предыдущем пункте; значение напряжения должно быть минус 0-0,3В.
                    Убедитесь, что на приборных досках летчиков не горят табло "&#8660;"</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 1)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
            <p> Произведите проверку настоящей технологической карты для положения переключателей ОТКЛОНЕНИЕ на МИМ-70 и
                контактов контрольных соединителей, указанных в скобках.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 2)(props)}
            {UniversalTabWithTable(TableSize2x5, 3)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> На пульте ПС-172-02 нажмите кнопку КРЕН ОТКЛ.</p>
            </Typography>


            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>

            </Typography>

            {UniversalTabWithTable(TableSize2x5, 1)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>

            </Typography>
        </Fade>
    );
}

export default memo(Check23);
