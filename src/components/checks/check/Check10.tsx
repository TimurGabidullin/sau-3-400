import React, {memo, useEffect} from 'react';
import TableSize2x5 from "../../common/table/TableSize2x5";
import Typography from "@mui/material/Typography";
import UniversalTabWithTable from "../../../HOC/UniversalTabWithTable";

const Fade = require("react-reveal/Fade")


type CheckPropsType = {}

const Check10 = (props: CheckPropsType) => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <Fade bottom cascade>
            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> На пульте ПР-173-02 переключатель режимов установите в положение ЗАХОД.</p>
                <p> Вращением кремальеры установки начального тангажа на приборах ПКП<span>лев</span>,
                    ПКП<span>прав</span> совместите линию авиагоризонта с символом самолета.</p>
                <p> Включите имитатор МИМ-70-&#8544;(&#8545;). Установите на имитаторе МИМ-70 частоту,
                    соответствующую режиму.</p>
                <p> Установите на имитаторе МИМ-70-&#8544;(&#8545;) переключатели ОТКЛОНЕНИЕ в положение "0", на
                    СК<span>лев</span>, СК<span>прав</span>, КУРС, равный текущему по ПНП<span>лев</span>.</p>
                <p> Бленкер К на ПКП<span>лев</span> (ПКП<span>прав</span>) должен убраться, командный индекс должен
                    совместиться с символом самолета.</p>
                <p> Задайте с помощью имитаторов ИМБ-5 текущее значение правого (затем левого) крена, равное
                    (15±0,1)°.</p>
                <p> Индекс команд на ПКП<span>лев</span>, ПКП<span>прав</span> должен повернуться против (по)
                    часовой стрелки.</p>
                <p> Измерьте с помощью вольтметра ИП&#8544; пульта ППН-149 значение напряжения постоянного тока
                    между контактами 27 и 11 контрольного соединителя Ш37 блока ВБК-51-01 Ш35
                    канала &#8544;(&#8546;).</p>
                <p> Значение напряжения должно быть (5±0,5)В.</p>
                <p> На пульте ПК-31-01 переключатель ОТКЛ ВЫЧИСЛ установите в положение "&#8545; КЭ" и нажмите на
                    кнопку-лампочку КРЕН 1А.</p>
                <p> Значение напряжения постоянного тока между контактами 27 и 11 контрольного соединителя Ш34 должно
                    быть (5±0,5)В.</p>
                <p> На пульте ПК-31-01 установите переключатель ОТКЛ ВЫЧИСЛ в положение ОТКЛ, нажмите горящую кнопку
                    КРЕН 1А, которая не должна гореть.</p>
                <p> Подключите с помощью жгута "902" вольтметр постоянного тока пульта ППН-149 к контактам 27 и 11
                    контрольного соединителя Ш37 блока ВБК-51-01 канала &#8546; и произведите предидущую проверку
                    настоящей карты.</p>
                <p> На пульте ПК-31-01 переключатель ОТКЛ ВЫЧИСЛ установите в положение "&#8545; КЭ" и нажмите на
                    кнопку КРЕН 2А.</p>
                <p> Значение напряжения постоянного тока между контактами 27 и 11 должно быть (5±0,5)В.</p>
                <p> На пульте ПК-31-01 установите переключатель ОТКЛ ВЫЧИСЛ в положение ОТКЛ, нажмите горящую кнопку
                    КРЕН 2А, которая не должна гореть.</p>
                <p> Установите значение текущего крена на отметку "0°".</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 0)(props)}
            {UniversalTabWithTable(TableSize2x5, 1)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> П Р И М Е Ч А Н И Е .</p>
                <p>    &#8544;(&#8547;) канал работает на ПКП<span>прав</span>.</p>
                <p>  &#8546;(&#8545;) канал работает на ПКП<span>лев</span>.</p>
            </Typography>


        </Fade>
    );
}

export default memo(Check10);
