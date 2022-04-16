import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";



function Report() {

const report =useSelector((state:AppStateType)=>state.report)
    return (
        <div>
            {Object.keys(report).map((key:string)=>{
              return <li>{report[key]}</li>
            })}
        </div>
    );
}

export default Report;