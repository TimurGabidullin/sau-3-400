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


import Check8 from './check/Check4';
import Stepper from "../common/stepper/Stepper";
import Container from "@mui/material/Container";
import UniversalCheckWithParams from "../../HOC/UniversalCheckWithParams";



type ChecksPropsType = {
    paginatorPageNumber:number
    LinkToCheck: (h:string,url: string,prPageNum:number) => void
}

function Checks(props:ChecksPropsType) {
    const params = useParams();

    return (
        <div>
            <Paginator paginatorPageNumber={props.paginatorPageNumber} LinkToCheck={props.LinkToCheck}/>
            <Stepper paginatorPageNumber={props.paginatorPageNumber} LinkToCheck={props.LinkToCheck}/>
            {params.check==="check1"&& UniversalCheckWithParams(Check1)()}
            {params.check==="check2"&& UniversalCheckWithParams(Check2)()}
            {params.check==="check3"&& UniversalCheckWithParams(Check3)()}
            {params.check==="check4"&& UniversalCheckWithParams(Check4)()}
            {params.check==="check5"&& UniversalCheckWithParams(Check5)()}
            {params.check==="check6"&& UniversalCheckWithParams(Check6)()}
            {params.check==="check7"&& UniversalCheckWithParams(Check7)()}



            <Paginator paginatorPageNumber={props.paginatorPageNumber} LinkToCheck={props.LinkToCheck}/>
            <Stepper paginatorPageNumber={props.paginatorPageNumber} LinkToCheck={props.LinkToCheck}/>

        </div>
    );
}

export default Checks;