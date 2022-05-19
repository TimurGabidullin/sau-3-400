import React, {memo, useEffect} from 'react';
import TableSize2x5 from "../../common/table/TableSize2x5";
import Typography from "@mui/material/Typography";
import UniversalTabWithTable from "../../../HOC/UniversalTabWithTable";
import {message} from "antd";
const Fade = require("react-reveal/Fade")


export type CheckPropsType = {

    // handleClickVariant: Function

}

const Check1 = (props: CheckPropsType) => {
    console.log(  'check1'  )
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Fade bottom cascade>
            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Включите каналы тангажа и крена САУ.</p>
                <p> Измерьте с помощью пульта ППН-149 и запишите значения напряжений постоянного тока
                    U<span>&#x394;V0</span>&#8544;(&#8545;,&#8546;,&#8547;) между контактами 20 и 11 контрольного
                    соединителя Ш35 ВПК-52-01 во всех каналах САУ. Значения напряжения должны быть ±0,25В.
                </p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 0)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Измерьте с помощью вольтметра ИП&#8544; пульта ППН-149 и запишите значения напряжений постоянного
                    тока U<span>&#x394;&#936;0</span>&#8544;(&#8545;,&#8546;,&#8547;) между контактами 24 и 11 контрольного
                    соединителя Ш35 ВБК-51-01 во всех каналах САУ. Значения напряжения должны быть ±0,1В.
                </p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 1)(props)}

        </Fade>
    );
}

export default memo(Check1);
