import React from 'react';
import {useParams} from "react-router-dom";
import Paginator from "../common/paginator/paginator.";
import Check1 from "./check/Check1";
import Check2 from './check/Check2';



type ChecksPropsType = {
    paginatorPageNumber:number
    LinkToCheck: (h:string,url: string,prPageNum:number) => void
}

function Checks(props:ChecksPropsType) {
    const params = useParams();

    return (
        <div>
            <Paginator paginatorPageNumber={props.paginatorPageNumber} LinkToCheck={props.LinkToCheck}/>
            {params.page==="check1"&&<Check1 checkId={params.page}/>}

            {params.page==="check2"&&'2'}

            <Paginator paginatorPageNumber={props.paginatorPageNumber} LinkToCheck={props.LinkToCheck}/>

        </div>
    );
}

export default Checks;