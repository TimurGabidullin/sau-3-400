import React from 'react';
import TableSize2x5 from "../../common/table/TableSize2x5";
import Typography from "@mui/material/Typography";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {useParams} from "react-router-dom";
import {CheckType} from "../../../redux/checksReducer";
import UniversalTabWithTable from "../../../HOC/UniversalTabWithTable";


type CheckPropsType = {

}

const Check2 = (props: CheckPropsType) => {
    const params = useParams();
    const checks = useSelector((state: AppStateType) => state.checks[params.header ? params.header : 'head1'])
    const headerOfCheck = checks.filter((ch: CheckType) => ch.idCheck === params.page)[0].title

    return (
        <div className="Check">
            <Typography sx={{paddingLeft: '20px'}} variant="h6" component="h6">
                {headerOfCheck}
            </Typography>

            <Typography sx={{paddingLeft: '20px'}} variant="body1" component='p'>
                <p> На пульте ПК-31-01 переключатель ИСКЛЮЧ ПОСАДКА установите в положение    &#xC9;, ИСКЛЮЧ УСП
                    установите в положение "4".</p>
                <p> На пульте ПР-173-02 переключатель режимов установите в положение ЗАХОД.</p>
                <p> Включите, согласно руководству по эксплуатации аппаратуру КУРС МП-70.</p>
                <p> На имитаторе МИМ-70 установите переключатель ОТКЛОНЕНИЕ в положение вправо/вверх (влево/вниз) и 2Т.
                    Установите на МИМ-70 соответствующую режиму частоту КРМ.</p>
                <p> На пульте ПС-72-02, нажмите кнопку-лампочку КРЕН, включите имитатор МИМ-70-I(II), нажмите
                    кнопку-лампочку ГОРИЗ на пульте ПР-173-02.</p>
                <p> Измерьте и запишите значение напряжения постоянного тока между контактами 23 и 11 контрольного
                    соединителя Ш35 блоков ВБК-51-01 во всех каналах САУ U<span>23</span>I(II,III,IV)</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 0)(props)}

            <Typography sx={{paddingLeft: '20px'}} variant="body1" component='p'>
                <p> Измерьте с помощью вольтметра ИПI пульта ППН-149 значение напряжения
                    между контактами 24 и 11 контрольного соединителя Ш35 ВБК-51-01
                    во всех каналах САУ - U<span>24</span>I(II,III,IV).</p>
                <p> Проверьте, что:</p>
                <p> U<span>24</span>I(II,III,IV)/U<span>23</span>I(II,III,IV)=2,25&#xB1;0,05</p>
                <p> Установите на имитаторе МИМ-70 переключатели ОТКЛОНЕНИЕ в положение "0".</p>
                <p> На пульте ПС-172-02 нажмите кнопку КРЕН ОТКЛ.</p>

            </Typography>

            {UniversalTabWithTable(TableSize2x5, 1)(props)}


        </div>
    );
}

export default Check2;
