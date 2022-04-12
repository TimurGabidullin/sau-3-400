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
                <p> Измерьте с помощью вольтметра ИПI пульта ППН-149 значение напряжения
                    между контактами 24 и 11 контрольного соединителя Ш35 ВБК-51-01
                    во всех каналах САУ - U<span>24</span>I(II,III,IV).</p>
                <p> Проверьте, что:</p>
                <p> U<span>24</span>I(II,III,IV)/U<span>23</span>I(II,III,IV)=2,25&#xB1;0,05</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 1)(props)}

            <Typography sx={{paddingLeft: '20px'}} variant="body1" component='p'>
                <p> Установите на имитаторе МИМ-70 переключатели ОТКЛОНЕНИЕ в положение "0".</p>
                <p> На пульте ПС-172-02 нажмите кнопку КРЕН ОТКЛ.</p>
            </Typography>
        </div>
    );
}

export default Check3;
