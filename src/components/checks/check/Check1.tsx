import React, {useCallback, useEffect} from 'react';
import TableSize2x5 from "../../common/table/TableSize2x5";
import Typography from "@mui/material/Typography";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {useParams} from "react-router-dom";
import {CheckType} from "../../../redux/checksReducer";
import UniversalTabWithTable from "../../../HOC/UniversalTabWithTable";
import styles from "./Check.module.css";
const Fade = require("react-reveal/Fade")

type CheckPropsType = {

}

const Check1=(props: CheckPropsType)=> {
    const params = useParams();

    // @ts-ignore
    const checks = useSelector((state: AppStateType) => state.checks[params.header ? params.header : 'head1'])
    // const checks = useSelector((state: AppStateType) => state.checks[ 'head1'])
    const headerOfCheck = checks.filter((ch: CheckType) => ch.idCheck === params.check)[0].title

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <Fade bottom cascade>
        <div className={styles.checkContainer}>
            <Typography sx={{padding: '0 20px',textIndent:'40px'}} variant="h6" component="h6">
                {headerOfCheck}
            </Typography>

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Включите каналы тангажа и крена САУ.</p>
                <p> Измерьте с помощью пульта ППН-149 и запишите значения напряжений постоянного тока
                    U<span>&#x394;V0</span>&#8544;(&#8545;,&#8546;,&#8547;) между контактами 20 и 11 контрольного
                    соединителя Ш35 ВПК-52-01 во всех каналах САУ. Значения напряжения должны быть ±0,25В.
                </p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5,0)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Измерьте с помощью вольтметра ИПI пульта ППН-149 и запишите значения напряжений постоянного тока
                    U<span>&#x394;&#936;0</span>&#8544;(&#8545;,&#8546;,&#8547;) между контактами 24 и 11 контрольного
                    соединителя Ш35 ВБК-51-01 во всех каналах САУ. Значения напряжения должны быть ±0,1В.
                </p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5,1)(props)}



        </div>
            </Fade >
    );
}

export default Check1;
