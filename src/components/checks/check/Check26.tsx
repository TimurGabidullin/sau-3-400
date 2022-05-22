import React, {memo, useEffect} from 'react';
import TableSize2x5 from "../../common/table/TableSize2x5";
import Typography from "@mui/material/Typography";
import UniversalTabWithTable from "../../../HOC/UniversalTabWithTable";

const Fade = require("react-reveal/Fade")


type CheckPropsType = {}

const Check26 = (props: CheckPropsType) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Fade bottom cascade>
            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> На пульте ПС-172-02 нажмите кнопку-лампочку КУРС &#8544; (КУРС &#8545;).</p>
                <p> По шкале поворотного стола КПА-5 установите угол наклона датчиков ДГУ (2,9±0,1)° по(против) часовой
                    стрелке (если смотреть со стороны арретира), что соответствует приращению перегрузки
                    &#x394;n<span>z</span>=(0,05±0,002).</p>
                <p>Измерьте с помощью вольтметра ИП&#8544; пульта ППН-149 значения напряжений между контактами 31 и 11
                    соединителя Ш35 на блоках ВБК-51-01 во всех каналах САУ. Оно должно быть (2,5±0,2)В.</p>
            </Typography>

                {UniversalTabWithTable(TableSize2x5, 0)(props)}
                {UniversalTabWithTable(TableSize2x5, 1)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> На пульте ПС-172-02 нажмите кнопку-лампочку КУРС ОТКЛ. Шкалы на поворотном столе КПА-5 установите в
                    нулевое положение.</p>
            </Typography>
        </Fade>
    );
}

export default memo(Check26);
