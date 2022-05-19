import React, {memo, useEffect} from 'react';
import TableSize2x5 from "../../common/table/TableSize2x5";
import Typography from "@mui/material/Typography";
import UniversalTabWithTable from "../../../HOC/UniversalTabWithTable";

const Fade = require("react-reveal/Fade")


type CheckPropsType = {}


const Check28 = (props: CheckPropsType) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Fade bottom cascade>
            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> На пульте ПК-31-01 установите переключатель ИСКЛЮЧ ПОСАДКА в положение "2".</p>
                <p> По шкале поворотного стола КПА-5 установите угол наклона датчиков ДГУ (2,9±0,1)° по(против) часовой
                    стрелке (если смотреть со стороны арретира), что соответствует приращению перегрузки
                    &#x394;n<span>z</span>=±(0,49±0,2).</p>
                <p> Переместите левую педаль вперед до механического упора и нажмите на пульт ПС-172-03 кнопку
                    КУРС &#8544;.
                    Переместите правую педаль вперед до момента "Схватывания" управления РМ и отпустите - правая педаль
                    должна продолжать перемещение вперед.</p>
                <p> Измерьте время прохождения рулем направления участка (10±0,5)° слева направо (справа налево) через
                    нулевое положение.</p>
                <p> Время, измеренное секундомером, должно быть (6,7±1,3)с.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 0)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> На пульте ПС-172-02 нажмите кнопку-лампочку КУРС ОТКЛ. Установите поворотный стол с ДГУ в нулевое
                    положение.</p>
                <p> Произведите предыдущую проверку, наклоняя поворотный стол с ДГУ по часовой стрелке, перемещая вперед
                    до механического упора правую педаль, а до момента "Схватывания" левую педаль.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 1)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> На пульте ПК-31-01 установите переключатель ИСКЛЮЧ УСП в положение "0". Произведите проверку по
                    вышеизложенной методике.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 2)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> На пульте ПС-172-02 нажмите кнопку-лампочку КУРС &#8545; и произведите эту же проверку.</p>
            </Typography>


        </Fade>
    );
}

export default memo(Check28);
