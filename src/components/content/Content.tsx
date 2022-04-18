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
            <div className={styles.emptyDiv}></div>
            {header.map((h) => {

                return (
                        <ul className={styles.list}>
                            <Typography sx={{padding:0}} variant="h6" component='h6'>
                            {h.title}
                            </Typography>
                            {
                                checks[h.idHeader]
                                    .map((chsInH: CheckType) => chsInH)
                                    .map((ch: CheckType) => {
                                        return {
                                            title: ch.title,
                                            url: ch.idCheck,
                                            prPageNum: ch.paginatorNumber
                                        }
                                    })
                                    .map((t) => <li onClick={() => {
                                        props.LinkToCheck(h.idHeader,`${t.url}`,t.prPageNum)
                                    }

                                    }>
                                        <NavLink

                                            className={({isActive})=>(isActive?styles.active:styles.inactive)}
                                            to={`/home/checks/${h.idHeader}/${t.url}`}
                                        >
                                            <Typography sx={{paddingLeft: '20px'}} variant="body1" component='p'>
                                                {t.title}
                                            </Typography>
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