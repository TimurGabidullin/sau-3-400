import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import Paginator from "../common/paginator/paginator.";
import Check1 from "./check/Check1";
import Check2 from './check/Check2';
import Check3 from './check/Check3';
import Check4 from './check/Check4';
import Check5 from './check/Check5';
import Check6 from './check/Check6';
import Check7 from './check/Check7';
import Check8 from './check/Check8';
import Check9 from './check/Check9';
import Check10 from './check/Check10';
import Check11 from './check/Check11';
import Check12 from './check/Check12';
import Check13 from './check/Check13';
import Check14 from './check/Check14';
import Check15 from './check/Check15';
import Check16 from './check/Check16';
import Check17 from './check/Check17';
import Check18 from './check/Check18';
import Check19 from './check/Check19';
import Check20 from './check/Check20';
import Check21 from './check/Check21';
import Check22 from './check/Check22';
import Check23 from './check/Check23';
// import Check18 from './check/Check18';

import Stepper from "../common/stepper/Stepper";
import UniversalCheckWithParams from "../../HOC/UniversalCheckWithParams";


type ChecksPropsType = {
    paginatorPageNumber: number
    LinkToCheck: (h: string, url: string, prPageNum: number) => void
}

function Checks(props: ChecksPropsType) {
    const params = useParams();

    return (
        <div>
            <Paginator paginatorPageNumber={props.paginatorPageNumber} LinkToCheck={props.LinkToCheck}/>
            <Stepper paginatorPageNumber={props.paginatorPageNumber} LinkToCheck={props.LinkToCheck}/>
            {params.check === "check1" && UniversalCheckWithParams(Check1)()}
            {params.check === "check2" && UniversalCheckWithParams(Check2)()}
            {params.check === "check3" && UniversalCheckWithParams(Check3)()}
            {params.check === "check4" && UniversalCheckWithParams(Check4)()}
            {params.check === "check5" && UniversalCheckWithParams(Check5)()}
            {params.check === "check6" && UniversalCheckWithParams(Check6)()}
            {params.check === "check7" && UniversalCheckWithParams(Check7)()}
            {params.check === "check8" && UniversalCheckWithParams(Check8)()}
            {params.check === "check9" && UniversalCheckWithParams(Check9)()}
            {params.check === "check10" && UniversalCheckWithParams(Check10)()}
            {params.check === "check11" && UniversalCheckWithParams(Check11)()}
            {params.check === "check12" && UniversalCheckWithParams(Check12)()}
            {params.check === "check13" && UniversalCheckWithParams(Check13)()}
            {params.check === "check14" && UniversalCheckWithParams(Check14)()}
            {params.check === "check15" && UniversalCheckWithParams(Check15)()}
            {params.check === "check16" && UniversalCheckWithParams(Check16)()}
            {params.check === "check17" && UniversalCheckWithParams(Check17)()}
            {params.check === "check18" && UniversalCheckWithParams(Check18)()}
            {params.check === "check19" && UniversalCheckWithParams(Check19)()}
            {params.check === "check20" && UniversalCheckWithParams(Check20)()}
            {params.check === "check21" && UniversalCheckWithParams(Check21)()}
            {params.check === "check22" && UniversalCheckWithParams(Check22)()}
            {params.check === "check23" && UniversalCheckWithParams(Check23)()}
            {/*{params.check === "check17" && UniversalCheckWithParams(Check24)()}*/}


            <Paginator paginatorPageNumber={props.paginatorPageNumber} LinkToCheck={props.LinkToCheck}/>
            <Stepper paginatorPageNumber={props.paginatorPageNumber} LinkToCheck={props.LinkToCheck}/>

        </div>
    );
}

export default Checks;