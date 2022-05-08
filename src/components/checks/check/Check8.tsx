import React, {memo, useCallback, useEffect} from 'react';

import IconButton from '@mui/material/IconButton';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import TableSize2x5 from "../../common/table/TableSize2x5";
import Typography from "@mui/material/Typography";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {useParams} from "react-router-dom";
import {CheckType} from "../../../redux/checksReducer";
import UniversalTabWithTable from "../../../HOC/UniversalTabWithTable";
import styles from "./Check.module.css";
import AlertDialog from "../../common/alertDialog/AlertDialog";

const Fade = require("react-reveal/Fade")


type CheckPropsType = {}

const Check8 = (props: CheckPropsType) => {
    const [openDialogAlert, setOpenDialogAlert] = React.useState(false);
    const params = useParams();

    // @ts-ignore
    const checks = useSelector((state: AppStateType) => state.checks[params.header ? params.header : 'head1'])
    const headerOfCheck = checks.filter((ch: CheckType) => ch.idCheck === params.check)[0].title

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <Fade bottom cascade>
            <div className={styles.checkContainer}>

                <Typography sx={{padding: '0 20px'}} variant="h6" component="h6">
                    {headerOfCheck}<IconButton color="secondary" aria-label="add an alarm">
                    <InfoOutlinedIcon onClick={() => setOpenDialogAlert(true)}/>
                </IconButton>
                </Typography>

                <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                    <p> На пульте ПР-173-02 переключатель режимов установите в положение ЗАХОД.
                        Вращением кремальеры установки начального тангажа на приборах ПКП<span>лев</span>,
                        ПКП<span>прав</span>
                        совместите линию авиагоризонта с символом самолета.</p>
                    <p> Включите имитатор МИМ-70-&#8544;(&#8545;). Установите на имитаторе МИМ-70 частоту,
                        соответствующую
                        режиму.
                        Установите на имитаторе МИМ-70-&#8544;(&#8545;) переключатели ОТКЛОНЕНИЕ в положение "0", на
                        СК<span>лев</span>, СК<span>прав</span>, КУРС, равный текущему по ПНП<span>лев</span>.
                        Бленкер К на ПКП<span>лев</span> (ПКП<span>прав</span>) должен убраться, командный индекс должен
                        совместиться с символом самолета.</p>
                    <p> Задайте с помощью имитаторов ИМБ-5 текущее значение правого (затем левого) крена, равное
                        (15±0,1)°.
                        Индекс команд на ПКП<span>лев</span>, ПКП<span>прав</span> должен повернуться против (по)
                        часовой
                        стрелки.</p>
                    <p> Измерьте с помощью вольтметра ИП&#8544; пульта ППН-149 значение напряжения постоянного тока
                        между
                        контактам 27 и 11 контрольного соединителя Ш37 блока ВБК-51-01 Ш35 канала &#8544;(&#8546;).
                        Значение напряжения должно быть (5±0,5)В.</p>
                    <p> На пульте ПК-31-01 переключатель ОТКЛ ВЫЧИСЛ установите в положение "&#8545; КЭ" и нажмите на
                        кнопку-лампочку КРЕН 1А.</p>
                    <p> Значение напряжения постоянного тока между контактами 27 и 11 должно быть (5±0,5)В.</p>
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
                    <p> Установите значение текщего крена на отметку "0°".</p>
                </Typography>


                <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>

                    <p> П Р И М Е Ч А Н И Е . &#8544; и &#8546; каналы основные работаюл на ПКП<span>прав</span> и
                        ПКП<span>лев</span> соответствено.
                        &#8547; и &#8545; резервные</p>
                </Typography>


                {UniversalTabWithTable(TableSize2x5, 0)(props)}
                {UniversalTabWithTable(TableSize2x5, 1)(props)}


                <AlertDialog openDialogAlert={openDialogAlert}
                             setOpenDialogAlert={setOpenDialogAlert}
                             headerText="ПОДГОТОВКА К ПРОВЕРКЕ"
                             mainText="Выберите проверку"

                />

            </div>
        </Fade>
    );
}

export default memo(Check8);
