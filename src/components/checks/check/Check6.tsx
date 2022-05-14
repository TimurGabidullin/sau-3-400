import React, {memo, useEffect} from 'react';
import TableSize2x5 from "../../common/table/TableSize2x5";
import Typography from "@mui/material/Typography";
import UniversalTabWithTable from "../../../HOC/UniversalTabWithTable";
const Fade = require("react-reveal/Fade")


type CheckPropsType = {}

const Check6 = (props: CheckPropsType) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Fade bottom cascade>
                <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                    <p> Установите кронштейн с БДГ-1 на поворотную платформу МПУ-1 в положение,
                    соответствующее имитации угловой скорости курса &#969;<span>x</span> и соедините БДГ-1 с
                        соответствующим соединителем фидера обьекта с помощью переходного жгута "БДГ".</p>
                    <p> На пульте ПК-31-01 переключатель ИСКЛЮЧ УСП установите в положение "4".</p>
                    <p> Подсоедините пульт ППН-149 с помощью контрольного соединителя к контанктам 19 и 11 Ш37 блока
                        ВПК-52-01 канала &#8544;.</p>
                    <p> На пульте ПС-72-02, нажмите кнопку-лампочку КРЕН.</p>
                    <p> Задайте на МПУ-1 скорость вращения  &#969;<span>x</span>=(3±0,1)°/c соответствующую кренению
                        самолета влево (вправо).
                        Измерьте с помощью пульта ППН-149 значение напряжения постоянного тока между контактам 19 и 11
                        контрольного соединителя Ш35 блока ВБК-51-01 канала &#8544;.
                        Значение напряжения должны быть минус (1,8±0,3)В при кренении влево и +(1,8±0,3)В - при кренении
                        вправо.</p>
                </Typography>

                    {UniversalTabWithTable(TableSize2x5, 0)(props)}
                    {UniversalTabWithTable(TableSize2x5, 1)(props)}

                <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                    <p> Остановите вращение платформы МПУ-1, отсоедините переходной жгут "БДГ" от БДГ-1 и снимите с
                        платформы МПУ-1, БДГ-1.</p>
                    <p> Устанавливая поочередно БДГ-2, БДГ-3, БДГ-4 на поворотную платформу МПУ-1, произведите проверку
                        в каналах &#8545;,&#8546;,&#8547;.</p>
                </Typography>

                <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                    <p> П Р И М Е Ч А Н И Е . При проверке кнопки-лампочки КРЕН 1А(1Б,2A,2Б) могут гореть.</p>
                    {/*<p> П Р И М Е Ч А Н И Е . При проверке кнопки-лампочки КРЕН 1А(1Б,2A,2Б) и КРЕН 1А(1Б,2A,2Б)*/}
                    {/*    могут гореть.</p>*/}
                </Typography>
        </Fade>
    );
}

export default memo(Check6);
