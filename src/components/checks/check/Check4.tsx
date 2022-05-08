import React, {memo, useEffect} from 'react';
import TableSize2x5 from "../../common/table/TableSize2x5";
import Typography from "@mui/material/Typography";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {useParams} from "react-router-dom";
import {CheckType} from "../../../redux/checksReducer";
import UniversalTabWithTable from "../../../HOC/UniversalTabWithTable";
import styles from "./Check.module.css";
import {ParamsType} from "../../home/Home";
const Fade = require("react-reveal/Fade")


type CheckPropsType = {}

const Check4 = (props: CheckPropsType) => {

    const params: ParamsType = useParams();
    const checks = useSelector((state: AppStateType) => state.checks[params.header ? params.header : 'head1'])
    const headerOfCheck = checks.filter((ch: CheckType) => ch.idCheck === params.check)[0].title
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Fade bottom cascade>
            <div className={styles.checkContainer}>
                <Typography sx={{padding: '0 20px', textIndent: '40px'}} variant="h6" component="h6">
                    {headerOfCheck}
                </Typography>

                <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                    <p> Соедините БДГ-1 с соответствующим соединителем фидера обьекта с помощью переходного жгута
                        "БДГ".</p>
                    <p> Установите БДГ-1 на кронштейн и закрепите кронштейн на поворотную платформу МПУ-1 в положение,
                    соответствующее имитации угловой скорости тангажа. </p>
                    <p> Скорость вращения платформы установите равной (3±0,1)°/c. </p>
                    <p> На пульте ПК-31-01 переключатель ИСКЛЮЧ УСП установите в положение "4".</p>
                    <p> На пульте ПС-72-02, нажмите кнопку-лампочку ТАНГАЖ.</p>
                    <p> Подсоедините пульт ППН-149 с помощью контрольного соединителя к контанктам 31 и 11 Ш35 блока
                    ВПК-52-01 канала &#8544;.</p>
                    <p> Ручкой СПУСК-ПОДЬЕМ установите по вольтметру ИП1 пульта ППН-149 значения напряжения
                    постоянного тока не более ±0,02В.</p>
                    <p> Задайте на МПУ-1 скорость вращения  &#969;<span>z</span>=(3±0,1)° на пикирование (затем на кабрирование)
                        и мзмерьте с помощью пульта ППН-149 значение напряжения постоянного тока между контактам 31 и 11
                        Ш35, которые должны быть минус (0,5±0,1)В на пикирование и +(0,5±0,1)В при задаче на МПУ-1 на
                        кабрирование.</p>
                </Typography>

                    {UniversalTabWithTable(TableSize2x5, 0)(props)}
                    {UniversalTabWithTable(TableSize2x5, 1)(props)}

                <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                    <p> Остановите вращение платформы МПУ-1, отсоедините переходной жгут "БДГ" от БДГ-1 и снимите последний
                        с платформы МПУ-1.</p>
                    <p> Установите поочередно БДГ-2, БДГ-3, БДГ-4 на поворотную платформу МПУ-1, произведите соответствующие
                        проверки в каналах &#8545;,&#8546;,&#8547;.</p>
                </Typography>

                <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                    <p> П Р И М Е Ч А Н И Е . При проверке кнопки-лампочки ТАНГАЖ 1А(1Б,2A,2Б) на ПК-31-01 могут гореть. </p>
                </Typography>

                <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                    <p> На пульте ПС-172-02 нажмите кнопку-лампочку ТАНГАЖ ОТКЛ.</p>
                </Typography>

            </div>
        </Fade>
    );
}

export default memo(Check4);
