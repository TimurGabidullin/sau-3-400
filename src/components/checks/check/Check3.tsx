import React from 'react';
import TableSize2x5 from "../../common/table/TableSize2x5";
import Typography from "@mui/material/Typography";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {useParams} from "react-router-dom";
import {CheckType} from "../../../redux/checksReducer";
import UniversalTabWithTable from "../../../HOC/UniversalTabWithTable";
import styles from "./Check.module.css";


type CheckPropsType = {}

const Check3 = (props: CheckPropsType) => {
    const params = useParams();
    const checks = useSelector((state: AppStateType) => state.checks[params.header ? params.header : 'head1'])
    const headerOfCheck = checks.filter((ch: CheckType) => ch.idCheck === params.page)[0].title

    return (
        <div className={styles.g}>
            <Typography sx={{paddingLeft: '20px'}} variant="h6" component="h6">
                {headerOfCheck}
            </Typography>

            <Typography sx={{paddingLeft: '20px'}} variant="body1" component='p'>
                <p> Плавно вращая ручки датчиков ТАНГАЖ на имитаторах ИМБ-5 по (против) часовой стрелке и не допуская
                    расхождения между ними более, чем на 1°, установите значение угла тангажа:
                    V<span>к(п)</span>&#8544;(&#8545;,&#8546;)=(7±0,05)° на кабрирование (на пикирование).</p>
                <p> Измерьте с помощью пульта ППН-149 значение напряжения U<span>Vк(п)</span>&#8544;(&#8545;,&#8546;,&#8547;) между
                    контактами 26 и 11 контрольного соединителя Ш35 на блоках ВПК-52-01 в &#8544;, &#8545;, &#8546; каналах САУ.</p>
                <p> Проверьте, что отношения:</p>
                <p> U<span>Vк(п)</span>&#8544;/V<span>к(п)</span>, U<span>Vк(п)</span>&#8545;/V<span>к(п)</span>,
                    U<span>Vк(п)</span>&#8546;/V<span>к(п)</span> равны +(0,5±0,05)В/°</p>
            </Typography>


            {UniversalTabWithTable(TableSize2x5, 0)(props)}

            <Typography sx={{paddingLeft: '20px'}} variant="body1" component='p'>
                <p>Произведите проверку, изменив направление задания тангажа.</p>
            </Typography>




            <Typography sx={{paddingLeft: '20px'}} variant="body1" component='p'>
                <p> Измерьте с помощью пульта ППН-149 значение напряжения остоянного тока U<span>&#x394;Vк(п)</span>&#8544;(&#8545;,&#8546;,&#8547;)
                    между контактами 20 и 11 контрольного соединителя Ш35 ВПК-52-01
                    во всех каналах САУ.</p>
                <p> Проверьте, что:</p>
                <p>(U<span>&#x394;Vк(п)</span>&#8544;-U<span>&#x394;V0</span>&#8544;)/V<span>к(п)</span>&#8544;=-(0,5±0,05)В/°,</p>
                <p>(U<span>&#x394;Vк(п)</span>&#8545;-U<span>&#x394;V0</span>&#8545;)/V<span>к(п)</span>&#8545;=-(0,5±0,05)В/°,</p>
                <p>(U<span>&#x394;Vк(п)</span>&#8546;-U<span>&#x394;V0</span>&#8546;)/V<span>к(п)</span>&#8546;=-(0,5±0,05)В/°,</p>
                <p>(U<span>&#x394;Vк(п)</span>&#8547;-U<span>&#x394;V0</span>&#8547;)/V<span>к(п)</span>&#8547;=-(0,5±0,05)В/°.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 1)(props)}

            <Typography sx={{paddingLeft: '20px'}} variant="body1" component='p'>
                <p>Произведите проверку, изменив направление задания тангажа.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 2)(props)}
            {UniversalTabWithTable(TableSize2x5, 3)(props)}

            <Typography sx={{paddingLeft: '20px'}} variant="body1" component='p'>
                <p>Установите значение угла тангажа на датчиках ТАНГАЖ имитаторов ИМБ-5 в перделах ±0.05°. </p>
            </Typography>

            <Typography sx={{paddingLeft: '20px'}} variant="body1" component='p'>
                <p>Плавно вращая ручки датчиков КРЕН имитаторов ИМБ-5 по (против) часовой стрелке и не допуская
                    расхождения между ними и не допуская расхождения мезду ними более, чем на 1°, установите
                    значение угла крена:</p>
                <p>&#611;<span>п(л)</span>&#8544;(&#8545;,&#8546;)=(7±0,05)° вправо (влево).</p>

                <p>Измерьте с помощью пульта ППН-149 значения напряжений U<span>&#611;п(л)</span>&#8544;(&#8545;,&#8546;)
                    между контактами 26 и 11 соединителя Ш35 на блоках ВБК-51-01. на &#8544;, &#8545; и &#8546; каналах.
                    Проверьте, что отношения</p>
                <p> U<span>&#611;п(л)</span>&#8544;/&#611;<span>п(л)</span>&#8544;,
                    U<span>&#611;п(л)</span>&#8545;/&#611;<span>п(л)</span>&#8545;,
                    U<span>&#611;п(л)</span>&#8546;/&#611;<span>п(л)</span>&#8546; равны -(0,27±0,03)В/°.
                </p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 4)(props)}

            <Typography sx={{paddingLeft: '20px'}} variant="body1" component='p'>
                <p>Произведите проверку, изменив направление задания крена.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 5)(props)}

            <Typography sx={{paddingLeft: '20px'}} variant="body1" component='p'>
                <p>Плавно вращая ручки датчиков КРЕН на ИМБ-5 и не допуская расхождения между ними более, чем на 1°,
                    установите значение угла крена в пределах ±0,05°.</p>
            </Typography>

            <Typography sx={{paddingLeft: '20px'}} variant="body1" component='p'>
            <p>Плавно вращая ручки датчиков &#936;<span>гмк</span> имитаторов ИМБ-5 по (против) часовой стрелке и не допуская
                    расхождения между ними более, чем на 1°, установите значение угла курса:</p>
                <p>&#936;<span>п(л)</span>&#8544;(&#8545;,&#8546;)=(7±0,05)° вправо (влево).</p>

                <p>Измерьте с помощью пульта ППН-149 значение напряжений U<span>&#x394;&#936;п(л)</span>&#8544;(&#8545;,&#8546;,&#8547;)
                   между контактам 24 и 11 контрольного соединителя Ш35 ВБК-51-01 во всех каналах САУ.
                    Проверьте , что</p>
                <p>(U<span>&#x394;&#936;п(л)</span>&#8544;-U<span>&#x394;&#x3A8;0</span>&#8544;/&#936;<span>к(п)</span>&#8544;=-(0,32±0,03)В/°</p>
                <p>(U<span>&#x394;&#936;п(л)</span>&#8545;-U<span>&#x394;&#x3A8;0</span>&#8545;/&#936;<span>к(п)</span>&#8545;=-(0,32±0,03)В/°</p>
                <p>(U<span>&#x394;&#936;п(л)</span>&#8546;-U<span>&#x394;&#x3A8;0</span>&#8546;/&#936;<span>к(п)</span>&#8546;=-(0,32±0,03)В/°</p>
                <p>(U<span>&#x394;&#936;п(л)</span>&#8547;-U<span>&#x394;&#x3A8;0</span>&#8547;/&#936;<span>к(п)</span>&#8547;=-(0,32±0,03)В/°</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 6)(props)}

            <Typography sx={{paddingLeft: '20px'}} variant="body1" component='p'>
                <p>Произведите проверку, изменив направление задачи угла курса.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 7)(props)}

            <Typography sx={{paddingLeft: '20px'}} variant="body1" component='p'>
            <p>Плавно вращая ручки датчиков &#936;<span>гмк</span> имитаторов ИМБ-5 и не допуская расхождения между
                ними более, чем на 1°, установите значчение угла курса в пределах ±0,05°. </p>
            </Typography>
        </div>
    );
}

export default Check3;
