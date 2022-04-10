import React from "react";
import {CheckType} from "../../../redux/checksReducer";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {useParams} from "react-router-dom";


export default function Info(props: any) {

    const params = useParams()
    const checks = useSelector((state: AppStateType) => state.checks[params.header ? params.header : 'head1'])
    const settingsInfo = checks.filter((ch: CheckType) => ch.idCheck === params.page)[0].settingsInfo[props.indexOfTable]


    return (
        <div>

            {settingsInfo}
        </div>

    );
}