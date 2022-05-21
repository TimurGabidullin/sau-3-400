import React, {memo, useEffect} from 'react';
import TableSize2x5 from "../../common/table/TableSize2x5";
import Typography from "@mui/material/Typography";
import UniversalTabWithTable from "../../../HOC/UniversalTabWithTable";

const Fade = require("react-reveal/Fade")


type CheckPropsType = {}

const Check17 = (props: CheckPropsType) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Fade bottom cascade>
            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> На имитаторах МИМ-70 переключатели ОТКЛОНЕНИЕ установите в положение "вправо/вверх" ("влево/вниз")
                    и 2Т.</p>
                <p> Измерьте с помощью универсального вольтметра и пульта ППН-149 значение напряжения постоянного тока
                    U<span>5-6</span>&#8544;(&#8546;) между контактами 5 и 6 контрольного соединителя Ш35 блока ВБК-51-01
                    &#8544;(&#8546;) канала;</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 0)(props)}


            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Измерьте с помощью пульта ППН-149 значение напряжения постоянного тока
                    U<span>22</span>&#8544;(&#8546;),
                    U<span>22</span>&#8545;(&#8547;) между контактами 22 и 11 контрольного соединителя Ш35 блока
                    ВБК-51-01 в &#8545;(&#8547;) и &#8545;(&#8547;) каналах.</p>
                <p> Проверьте, что масштаб по сигналу Eк, определяемый по формуле </p>
                <p> M<span>Eк</span>=(U<span>22</span>/U<span>5-6</span>)*0,1 [В/°Ек], </p>
                <p> находится в пределах (3,5±0,35)[В/°Ек] в &#8544;(&#8546;) и &#8545;(&#8547;) каналах, принимая во
                    внимание, что U<span>5-6</span>&#8544;(&#8546;)=U<span>5-6</span>&#8545;(&#8547;).</p>
                <p> Произведите проверку для каналов, указанных в скобках.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 1)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Произведите проверку по методике настоящей технологической карты, изменив направление (знак)
                    входного сигнала (указано в скобках).</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 2)(props)}
            {UniversalTabWithTable(TableSize2x5, 3)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> На имитаторах МИМ-70 переключатели ОТКЛОНЕНИЕ установите в положение "вправо/вверх"
                ("влево/вниз")
                и "7".</p>
                <p> Измерьте с помощью универсального вольтметра и пульта ППН-149 значение напряжения постоянного тока
                    U<span>5-6</span> между контактами 5 и 6 контрольного соединителя Ш35 блока ВБК-51-01 каналов
                    &#8544; и &#8546;; убедитесь, что</p>
                <p>U<span>5-6</span>&#8544;(&#8546;)≥+(минус) 0,2В.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 4)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Измерьте с помощью пульта ППН-149 значение напряжения постоянного тока
                    U<span>22</span> между контактами 22 и 11 контрольного соединителя Ш35 блока
                    ВБК-51-01 во всех каналах; оно должно быть +(минус)(7±0,7)В.</p>
                <p> Произведите проверку для каналов, указанных в скобках.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 5)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Произведите проверку по методике настоящей технологической карты, изменив направление (знак)
                    входного сигнала (указано в скобках).</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 6)(props)}
            {UniversalTabWithTable(TableSize2x5, 7)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> На имитаторе МИМ-70 переключатель ОТКЛОНЕНИЕ установите в положение "0".</p>
            </Typography>
        </Fade>
    );
}

export default memo(Check17);
