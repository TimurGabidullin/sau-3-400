import React from 'react';
import {Link, Navigate, NavLink, useNavigate} from 'react-router-dom';
import styles from './Content.module.css';
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {CheckType} from "../../redux/checksReducer";


type ContentPropsType={
    setSelectedTab:(value:number)=>void
    LinkToCheck:(url:string)=>void
}


function Content(props:ContentPropsType) {

    const header = useSelector((state: AppStateType) => state.header)
    const checks = useSelector((state: AppStateType) => state.checks)







    return (
        <div>

            Content
            {header.map((h) => {

                    return (
                        <ul>{h.title}
                            {
                                checks[h.idHeader]
                                    .map((chsInH: CheckType[]) => chsInH)
                                    .map((ch: CheckType) => {
                                    return { title:ch.title,url:ch.idTech}
                                    })
                                    .map((t: any) => <li onClick={()=>{
                                        // props.setSelectedTab(1)};
                                        props.LinkToCheck(`${t.url}`)}

                                    }>
                                        <NavLink to={`/home/checks/${t.url}`}>{t.title}</NavLink>

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