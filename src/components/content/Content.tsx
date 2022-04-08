import React from 'react';
import { Navigate, NavLink, useNavigate} from 'react-router-dom';
import styles from './Content.module.css';
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {CheckType} from "../../redux/checksReducer";
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';


type ContentPropsType = {
    setSelectedTab: (value: number) => void
    LinkToCheck: (h:string,url: string,prPageNum:number) => void

}


function Content(props: ContentPropsType) {

    const header = useSelector((state: AppStateType) => state.header)
    const checks = useSelector((state: AppStateType) => state.checks)


    return (
        <Container>
            {header.map((h) => {

                return (
                        <ul>
                            <Typography sx={{padding:0}} variant="h6" component="h6">
                                {h.title}

                            </Typography>

                            {

                                checks[h.idHeader]
                                    .map((chsInH: CheckType[]) => chsInH)
                                    .map((ch: CheckType) => {
                                        return {
                                            title: ch.title,
                                            url: ch.idCheck,
                                            prPageNum: ch.paginatorNumber
                                        }
                                    })
                                    .map((t: any) => <li onClick={() => {
                                        // props.setSelectedTab(1)};
                                        props.LinkToCheck(h.idHeader,`${t.url}`,t.prPageNum)
                                    }

                                    }>
                                        {/*<NavLink to={`/home/checks/${t.url}`}>*/}
                                        <NavLink to={`/home/checks/${h.idHeader}/${t.url}`}>

                                                {t.title}



                                        </NavLink>

                                    </li>)
                            }
                        </ul>
                    )
                }
            )}

        </Container>

    );
}

export default Content;