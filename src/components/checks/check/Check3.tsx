import React from 'react';
import TableSize2x5 from "../../common/table/TableSize2x5";
import Typography from "@mui/material/Typography";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {useParams} from "react-router-dom";
import {CheckType} from "../../../redux/checksReducer";
import UniversalTabWithTable from "../../../HOC/UniversalTabWithTable";


type CheckPropsType = {}

const Check3 = (props: CheckPropsType) => {
    const params = useParams();
    const checks = useSelector((state: AppStateType) => state.checks[params.header ? params.header : 'head1'])
    const headerOfCheck = checks.filter((ch: CheckType) => ch.idCheck === params.page)[0].title

    return (
        <div className="Check">
            <Typography sx={{paddingLeft: '20px'}} variant="h6" component="h6">
                {headerOfCheck}
            </Typography>

            <Typography sx={{paddingLeft: '20px'}} variant="body1" component='p'>
                <p> Плавно вращая ручки датчиков ТАНГАЖ на имитаторах ИМБ-5 по (против) часовой стрелке и не допуская
                    расхождения между ними более, чем на 1&#176;, установите значение угла тангажа:
                    V<span>к(п)</span>I(II,III)=(7&#xB1;0,05)&#176; на кабрирование (на пикирование).</p>
                <p> Измерьте с помощью пульта ППН-149 значение напряжения U<span>Vк(п)</span>I(II,III,IV) между
                    контактами 26 и 11 контрольного соединителя Ш35 на блоках ВПК-52-01 в I, II, III каналах САУ.</p>
                <p> Проверьте, что отношения:</p>
                <p> U<span>Vк(п)</span>I/V<span>к(п)</span>, U<span>Vк(п)</span>II/V<span>к(п)</span>,
                    U<span>Vк(п)</span>III/V<span>к(п)</span> равны +(0,5&#xB1;0,05)В/град&#176;</p>
            </Typography>


            {UniversalTabWithTable(TableSize2x5, 0)(props)}


            <Typography sx={{paddingLeft: '20px'}} variant="body1" component='p'>
                <p> Измерьте с помощью пульта ППН-149 значение напряжения остоянного тока U<span>&#x394;Vк(п)</span>I(II,III,IV)
                    между контактами 20 и 11 контрольного соединителя Ш35 ВБК-51-01
                    во всех каналах САУ.</p>
                <p> Проверьте, что:</p>
                <p>(U<span>&#x394;Vк(п)</span>I-U<span>&#x394;V0</span>I)/V<span>к(п)=-(0,5&#xB1;0,05)В/град&#176;,</span>
                </p>
                <p>(U<span>&#x394;Vк(п)</span>II-U<span>&#x394;V0</span>II)/V<span>к(п)=-(0,5&#xB1;0,05)В/град&#176;,</span>
                </p>
                <p>(U<span>&#x394;Vк(п)</span>III-U<span>&#x394;V0</span>III)/V<span>к(п)=-(0,5&#xB1;0,05)В/град&#176;,</span>
                </p>
                <p>(U<span>&#x394;Vк(п)</span>IV-U<span>&#x394;V0</span>IV)/V<span>к(п)=-(0,5&#xB1;0,05)В/град&#176;.</span>
                </p>
            </Typography>
            {UniversalTabWithTable(TableSize2x5, 1)(props)}
            <Typography sx={{paddingLeft: '20px'}} variant="body1" component='p'>
                <p>Выполните проверки, изменив направление вращение ручек датчиков ТАНГАЖ. </p>
                <p>Установите значение угла тангажа на датчиках ТАНГАЖ имитаторов ИМБ-5 в перделах &#xB1;0.05&#176;. </p>
            </Typography>


        </div>
    );
}

export default Check3;
