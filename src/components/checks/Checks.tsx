import React from 'react';
import {useParams} from "react-router-dom";
import Paginator from "../common/paginator/paginator.";
import Check1 from "./check/Check1";
import Check2 from './check/Check2';
import Check3 from './check/Check3';
import Check4 from './check/Check4';
import Stepper from "../common/stepper/Stepper";
import Container from "@mui/material/Container";



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
            {params.check==="check1"&& <Check1 />}

            {params.check==="check2"&&<Check2 />}

            {params.check==="check3"&&<Check3 />}

            {params.check==="check4"&&<Check4 />}

            <Paginator paginatorPageNumber={props.paginatorPageNumber} LinkToCheck={props.LinkToCheck}/>
            <Stepper paginatorPageNumber={props.paginatorPageNumber} LinkToCheck={props.LinkToCheck}/>

        </div>
    );
}

export default Checks;