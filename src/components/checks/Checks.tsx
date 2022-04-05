import React from 'react';
import {useParams} from "react-router-dom";
import Paginator from "../ui-components/paginator/paginator.";
import Check1 from "./check/Check1";
import Check2 from './check/Check2';



type ChecksPropsType = {
    paginatorPageNumber:number
    LinkToCheck: (url: string,prPageNum:number) => void
}

function Checks(props:ChecksPropsType) {
    const params = useParams();
    // console.log(params)

    return (
        <div>
            <Paginator paginatorPageNumber={props.paginatorPageNumber} LinkToCheck={props.LinkToCheck}/>
            {params.page==="check1"&&<Check1/>}
            {params.page==="check2"&&<Check2/>}

        </div>
    );
}

export default Checks;