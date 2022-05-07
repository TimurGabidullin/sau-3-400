import React, {memo} from "react";
import {CheckType} from "../../../redux/checksReducer";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {useParams} from "react-router-dom";
import Typography from "@mui/material/Typography";
import {ParamsType} from "../../home/Home";
import Container from "@mui/material/Container";


const Info = (props: any) => {

    const params: ParamsType = useParams()
    const checks = useSelector((state: AppStateType) => state.checks[params.header ? params.header : 'head1'])
    const check = checks.filter((ch: CheckType) => ch.idCheck === params.check)[0]
    const isHaveSettings = check.isHaveSettings[props.indexOfTable]
    const typeOfSubBlock = check.typesOfSubBlocks[props.indexOfTable]
    const resistor = check.resistors[props.indexOfTable]
    const typeOfBlock = check.typesOfBlocks[props.indexOfTable]

    return (
        isHaveSettings ?
            <Typography sx={{padding: '20px 20px'}} variant="body1" component='p'>
                Регулируйте регулировочными винтами резисторов {resistor} на субблоках {typeOfSubBlock} (X14-место
                установки) блоков {typeOfBlock}
            </Typography>
            : <Typography sx={{padding: '40px 20px', textAlign: 'center'}} variant="body1" component='p'>Вставка не
                регуллируется </Typography>

    );
}


export default memo(Info)