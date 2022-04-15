import React from "react";
import {CheckType} from "../../../redux/checksReducer";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {useParams} from "react-router-dom";
import Typography from "@mui/material/Typography";
import {ParamsType} from "../../home/Home";


export default function Info(props: any) {

    const params:ParamsType = useParams()
    const checks = useSelector((state: AppStateType) => state.checks[params.header ? params.header : 'head1'])


    return (



        <Typography sx={{paddingLeft: '20px'}} variant="body1" component='p'>
            Регулируйте регулировочными винтами резисторов R4 на субблоках ВГМ 103-1 (X14-место установки) блоков
            ВБК-51-01
        </Typography>

    );
}