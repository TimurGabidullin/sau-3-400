import React, {useEffect} from 'react';
import {Navigate, NavLink, useNavigate} from 'react-router-dom';
import styles from './Content.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {CheckType} from "../../redux/checksReducer";
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import {setCurrentPageAC} from "../../redux/appReducer";

const Fade = require("react-reveal/Fade")


type ContentPropsType = {
    setSelectedTab: (value: number) => void
    LinkToCheck: (h: string, url: string, prPageNum: number) => void
}

function Content(props: ContentPropsType) {

    console.log("content")

    const header = useSelector((state: AppStateType) => state.header)
    const checks = useSelector((state: AppStateType) => state.checks)
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <Container>
            <div className={styles.emptyDiv}></div>
                {header.map((h) => {

                        return (
                            <ul className={styles.list}>
                                <Fade top cascade>
                                <Typography sx={{padding: 0}} variant="h6" component='h6'>
                                    {h.title}
                                </Typography>
                                </Fade>

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
                                            dispatch(setCurrentPageAC(t.prPageNum))
                                            props.LinkToCheck(h.idHeader, `${t.url}`, t.prPageNum)
                                        }
                                        }>
                                            <NavLink
                                                className={({isActive}) => (isActive ? styles.active : styles.inactive)}
                                                to={`/home/checks/${h.idHeader}/${t.url}`}>
                                                <Fade top cascade>
                                                <Typography sx={{}} variant="body1" component='p'>
                                                   {t.title}
                                                </Typography>
                                                </Fade>

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