import React, {memo, useEffect} from 'react';
import TableSize2x5 from "../../common/table/TableSize2x5";
import Typography from "@mui/material/Typography";
import UniversalTabWithTable from "../../../HOC/UniversalTabWithTable";

const Fade = require("react-reveal/Fade")


type CheckPropsType = {}

const Check25 = (props: CheckPropsType) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Fade bottom cascade>
            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                ВНИМАНИЕ!!! ЦЕНТРОВКУ ВЫЧИСЛИТЕЛЕЙ И УСИЛИТЕЛЕЙ СЕРВОПРИВОДА КАНАЛА КУРС ПРОИЗВОДИТЕ ТОЛЬКО ПО ЗАМЕЧАНИЯМ
                ЭКИПАЖА, А ТАКЖЕ ПРИ ЗАМЕНЕ ВЫЧИСЛИТЕЛЯ ВБК-51-01 (СУББЛОКОВ ВН-77, УС27-3), ДАТЧИКОВ ДГУ.
                <p> На датчиках пеперечной перегрузки ДГУ установите ручки арретиров в положение ВКЛ.</p>
                <p> На пульте ПК-31-01 переключатель ИСКЛЮЧ ПОСАДКА установите в положение &#xC9;, ИСКЛЮЧ УСП - в
                    положение "4".</p>
                <p> Отключите АЗК САУ ЛЕВ на ЦРУ 200/115В и АЗК САУ ПРАВ на ЦРУ 200/115В ПРАВОЕ.</p>
                <p> На пульте ПС-172-02 нажмите кнопку-лампочку КУРС &#8544; (КУРС &#8545;).</p>
                <p>Измерьте с помощью  вольтметра ИП&#8544; пульта ППН-149 значения напряжений между контактами 31 и 11
                    соединителя Ш35 на блоках ВБК-51-01 во всех каналах САУ, оно должно быть ±0,95В.</p>
                <p> На пульте ПС-172-02 нажмите кнопку-лампочку КУРС ОТКЛ.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 0)(props)}

        </Fade>
    );
}

export default memo(Check25);
