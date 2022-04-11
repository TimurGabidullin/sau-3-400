import React from "react";
import {CheckType} from "../../../redux/checksReducer";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {useParams} from "react-router-dom";


export default function Info(props: any) {

    const params = useParams()
    const checks = useSelector((state: AppStateType) => state.checks[params.header ? params.header : 'head1'])



    return (
        <div>
            Регулируйте регулировочными винтами резисторов R4 на субблоках ВГМ 103-1 (X14-место установки) блоков
            ВБК-51-01

        </div>

    );
}