import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Content from "../content/Content";
import Report from "../report/Report";
import styles from "./Home.module.css";
import Checks from "../checks/Checks";
import {useNavigate, useParams} from 'react-router-dom'
import {memo, useCallback, useEffect} from "react";
import AlertDialog from "../common/alertDialog/AlertDialog";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {loginAppAC} from "../../redux/appReducer";
import {saveContinueChecksDataAC, saveNewDataAC} from "../../redux/checksReducer";
import {loadChecksState, loadReportState} from "../../utils/localStorage";
import {saveContinueReportDataAC} from "../../redux/reportReducer";
import { useSnackbar } from 'notistack';

const Fade = require("react-reveal/Fade")
const Flip = require("react-reveal/Flip")
const Pulse = require("react-reveal/Pulse")


export type ParamsType = {
    check?: string
    header?: string
}


const Home = () => {

    console.log("Home render")

    //----------------Hooks----------------------------------------------------

    const params: ParamsType = useParams();
    const dispatch = useDispatch()
    const [headerUrl, setHeaderUrl] = React.useState(params.header ? params.header : 'head1');
    const [checkUrl, setCheckUrl] = React.useState(params.check ? params.check : 'check1');

    const [paginatorPageNumber, setPaginatorPageNumber] = React.useState(1);


    const LinkToCheck = (h: string, p: string, prPageNum: number) => {
        setHeaderUrl(h)
        setCheckUrl(p)
        setPaginatorPageNumber(prPageNum)
        setCheckUrl(p)
        setSelectedTab(1)
    }


    const tabNameToIndex = {
        "content": 0,
        "checks": 1,
        "report": 2,
        "": 3,

    }

    const indexToTabName = {
        0: "content",
        1: `checks/${headerUrl}/${checkUrl}`,
        2: "report",
        3: ""

    }

    // // @ts-ignore
    // const [selectedTab, setSelectedTab] = React.useState(tabNameToIndex[params.page] > 2
    //     ? 1
    //     // @ts-ignore
    //     : tabNameToIndex[params.check]);


    // @ts-ignore
    const [selectedTab, setSelectedTab] = React.useState(tabNameToIndex[params.page ? params.page : '']);
    const navigate = useNavigate();


    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
    };

    useEffect(() => {

            // @ts-ignore
            navigate(`/home/${indexToTabName[selectedTab]}`)
        }, [
            selectedTab,
            checkUrl,
            headerUrl
        ]
    )

    const pages = ['Содержание', "Проверки", 'Отчет'];
    const settings = ['RA82043','RA82044','RA82045','RA82046','RA82047','RA82048' ];

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [openDialogAlert, setOpenDialogAlert] = React.useState(false);
    const [avatar, setAvatar] = React.useState('');
    const numberOfPlane = useSelector((state: AppStateType) => state.app.numberOfPlane)


    const isLogin = useSelector((state: AppStateType) => state.app.isLogin)

    const handleOpenNavMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }, []);


    const handleCloseNavMenu = useCallback(() => {
        setAnchorElNav(null);
    }, []);

    const handleOpenUserMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    }, []);

    const handleCloseUserMenu = useCallback(() => {
        setAnchorElUser(null)
    }, [])

    const handleOnClickUserMenu = (setting:string) => {
        dispatch(loginAppAC(setting))
        handleCloseUserMenu()
        setOpenDialogAlert(true)
    }

    const handleClickContinueBtn = () => {

        setSelectedTab(0)
        setAvatar(numberOfPlane)
        setOpenDialogAlert(false)
        debugger
        dispatch(saveContinueChecksDataAC(loadChecksState(numberOfPlane)))
        dispatch(saveContinueReportDataAC(loadReportState(numberOfPlane)))
    };


    const handleClickNewCheckBtn = () => {
        setOpenDialogAlert(false)
        setAvatar(numberOfPlane)
        setSelectedTab(0)
        dispatch(saveNewDataAC(numberOfPlane))


    };


    return (
        <div>
            <AppBar position="sticky">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
                        >
                            <Flip> Volga-Dnepr</Flip>
                        </Typography>


                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                                disabled={!avatar}
                            >
                                <MenuIcon/>
                            </IconButton>

                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: {xs: 'block', md: 'none'},
                                }}
                            >
                                {pages.map((page,index) => (
                                    <MenuItem key={page} onClick={()=>{
                                        debugger
                                        setSelectedTab(index)
                                        handleCloseNavMenu()
                                    }}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}
                        >
                            <Flip> Volga-Dnepr </Flip>
                        </Typography>


                        {/*Содержание и отчет на большом экране*/}

                        <Tabs
                            sx={{flexGrow: 2, display: {xs: 'none', md: 'flex'}, width: "100px",}}
                            value={selectedTab}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            textColor="inherit"
                            variant="fullWidth"
                            aria-label="full width tabs example"

                        >


                            <Tab
                                sx={{padding: "26px", maxWidth: "120px",}}
                                label={<Fade right>Содержание</Fade>}
                                disabled={!isLogin}
                            />


                            <Tab
                                sx={{padding: "26px", maxWidth: "120px"}}
                                label={<Fade right>Проверки</Fade>}
                                disabled={!isLogin}
                            />


                            <Tab
                                sx={{padding: "26px", minWidth: "120px", maxWidth: "120px"}}
                                label={<Fade right>Отчёт</Fade>}
                                disabled={!isLogin}
                            />

                        </Tabs>


                        {/**/}

                        <Box sx={{flexGrow: 0}}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                    {/*<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>*/}
                                    <Pulse count={5}>

                                        {/*<div>{avatar ? avatar.slice(5) : 'RA'}</div>*/}
                                        {/*<Avatar children={avatar ? avatar.slice(5) : 'RA'}/>*/}

                                        <Avatar
                                            sx={{ backgroundColor: '#F0F1F3',color:'#1976d2' }}
                                            // alt="Remy Sharp"
                                            // src="/broken-image.jpg"
                                        >
                                           {avatar.length===7 ? avatar.slice(5) : 'RA'}
                                        </Avatar>
                                    </Pulse>
                                </IconButton>
                            </Tooltip>
                            <Fade left>
                                <Menu
                                    sx={{mt: '45px'}}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted

                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={()=>handleOnClickUserMenu(setting)}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>

                            </Fade>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <div className={styles.main}>

                {selectedTab === 0 && <Content setSelectedTab={setSelectedTab} LinkToCheck={LinkToCheck}/>}
                {selectedTab === 1 && <Checks
                    paginatorPageNumber={paginatorPageNumber}
                    LinkToCheck={LinkToCheck}/>}
                {selectedTab === 2 && <Report/>}
            </div>

            <AlertDialog openDialogAlert={openDialogAlert}
                         setOpenDialogAlert={setOpenDialogAlert}
                         handleAlertBtn1Click={handleClickNewCheckBtn}
                         handleAlertBtn2Click={handleClickContinueBtn}
                         headerText="Выберите проверку"
                         mainText='При нажатии на кнопку "НОВАЯ ПРОВЕРКА" результаты проверок выбранного самолета удаляются
                         и проверка начинается заново.'
                         btnText1="Новая проверка"
                         btnText2="Продолжить проверку"
            />


        </div>
    );
}

export default memo(Home);