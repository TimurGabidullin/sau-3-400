import React, {useCallback} from 'react';
import {useParams} from "react-router-dom";
import Paginator from "../common/paginator/paginator.";
import Check1 from "./check/Check1";
import Check2 from './check/Check2';
import Check3 from './check/Check3';



type ChecksPropsType = {
    paginatorPageNumber:number
    LinkToCheck: (h:string,url: string,prPageNum:number) => void

}




function Checks(props:ChecksPropsType) {
    const params = useParams();



    return (
        <div>
            <Paginator paginatorPageNumber={props.paginatorPageNumber} LinkToCheck={props.LinkToCheck}/>
            {params.page==="check1"&&<Check1 />}

            {params.page==="check2"&&<Check2 />}

            {params.page==="check3"&&<Check3 />}

            <Paginator paginatorPageNumber={props.paginatorPageNumber} LinkToCheck={props.LinkToCheck}/>

        </div>
    );
}

export default Checks;