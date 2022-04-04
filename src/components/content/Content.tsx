import React from 'react';
import {Link, Navigate, NavLink, useNavigate} from 'react-router-dom';
import styles from './Content.module.css';
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {CheckType} from "../../redux/checksReducer";


type ContentPropsType={
    setSelectedTab:(value:number)=>void

}


function Content(props:ContentPropsType) {

    const header = useSelector((state: AppStateType) => state.header)
    const checks = useSelector((state: AppStateType) => state.checks)

    // @ts-ignore
    console.log('ura', checks[header[0].idHeader].map((chInH: CheckType[]) => chInH).map((ch: CheckType) => ch.title))




    return (
        <div>

            Content
            {header.map((h) => {

                    return (
                        <ul>{h.title}
                            {
                                checks[h.idHeader]
                                    .map((chsInH: CheckType[]) => chsInH)
                                    .map((ch: CheckType) => ch.title)
                                    .map((t: string) => <li onClick={()=>props.setSelectedTab(1)} >
                                        <NavLink to={'/home/checks/check1'}>{t}</NavLink>
                                    </li>)
                            }
                        </ul>
                    )
                }
            )}


        </div>
    );
}

export default Content;