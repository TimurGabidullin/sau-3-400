import React, {memo, useEffect} from 'react';
import TableSize2x5 from "../../common/table/TableSize2x5";
import Typography from "@mui/material/Typography";
import UniversalTabWithTable from "../../../HOC/UniversalTabWithTable";

const Fade = require("react-reveal/Fade")


type CheckPropsType = {}

const Check39 = (props: CheckPropsType) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Fade bottom cascade>
            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> На имитаторах МИМ-70 переключатели ОТКЛОНЕНИЕ установите в положение "влево/вниз" ("вправо/вверх") и 2Т.</p>
                <p> Измерьте с помощью универсального вольтметра и пульта ППН-149 значение напряжения постоянного тока
                    U<span>5-6</span>&#8544;(&#8546;) между контактами 5 и 6 контрольного соединителя Ш35 блока
                    ВБК-51-01 &#8544;(&#8546;) канала.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 0)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Измерьте с помощью пульта ППН-149 значение напряжения постоянного тока U<span>38</span>&#8544;(&#8546;),
                    U<span>38</span>&#8545;(&#8547;) между контактами 38 и 11 контрольного соединителя Ш35 блока
                    ВБК-51-01 в &#8544;(&#8546;) и &#8545;(&#8547;) каналах.</p>
                <p> Проверьте, что масштаб по сигналу Eг, определяемый по формуле:</p>
                <p> M<span>Eг</span>=(U<span>38</span>/U<span>5-6</span>)*0,36 [В/°Ег], </p>
                <p> находится в пределах (16±1,6)[В/°Ек] в &#8544;(&#8546;) и &#8545;(&#8547;) каналах, принимая во
                    внимание, что U<span>5-6</span>&#8544;(&#8546;)=U<span>5-6</span>&#8545;(&#8547;).</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 1)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
            <p> Произведите проверку для каналов, указанных в скобках, и для входного сигнала, указанного в скобках.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 2)(props)}
            {UniversalTabWithTable(TableSize2x5, 3)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> В соответствии с производственной инструкцией (РЭ) на изд. А-034 задайте от КПА-034
                    H<span>рв</span>=50-60м.</p>
                <p> Измерьте с помощью вольтметра ИП&#8544; пульта ППН-149 значение напряжения постоянного тока
                    U<span>5-6</span> между контактами 39 и 40 контрольного соединителя Ш35 блока ВПК-52-01 канала
                    &#8544;(&#8545;,&#8546;,&#8547;) - U<span>вх</span>&#8544;(U<span>вх</span>&#8545;,U<span>вх</span>&#8546;,
                    U<span>вх</span>&#8547;).</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 4)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
            <p> Измерьте с помощью вольтметра ИП&#8544; пульта ППН-149 значение напряжения постоянного тока
                    U<span>5-6</span> между контактами 41 и 11 контрольного соединителя Ш35 блока ВПК-52-01 канала
                    &#8544;(&#8545;,&#8546;,&#8547;) - U<span>41</span>&#8544;(U<span>41</span>&#8545;,
                    U<span>41</span>&#8546;, U<span>41</span>&#8547;).</p>
                <p> Проверьте, что:</p>
                <p> U<span>41</span>&#8544;(&#8545;,&#8546;&#8547;)/U<span>вх</span>&#8544;(&#8545;,&#8546;&#8547;)= 0.4±0,02.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 5)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
            <p> Измерьте с помощью вольтметра ИП&#8544; пульта ППН-149 значение напряжения постоянного тока
                    U<span>5-6</span> между контактами 42 и 11 контрольного соединителя Ш35 блока ВПК-52-01 канала
                    &#8544;(&#8545;,&#8546;,&#8547;) -
                    U<span>42</span>&#8544;(U<span>42</span>&#8545;,U<span>42</span>&#8546;,
                    U<span>42</span>&#8547;).</p>
                <p> Проверьте, что:</p>
                <p> U<span>42</span>&#8544;(&#8545;,&#8546;&#8547;)/U<span>вх</span>&#8544;(&#8545;,&#8546;&#8547;)= 1±0,05.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 6)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
            <p> Установите на имитаторах МИМ-70 переключатели ОТКЛОНЕНИЕ в положение "0".</p>
                <p> Установите от КПА-034(&#8544;&#8545;) H<span>рв</span>=0-1м.</p>
            </Typography>

        </Fade>
    );
}

export default memo(Check39);
