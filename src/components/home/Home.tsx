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
import {useEffect} from "react";



const Home = () => {
    const [headerUrl, setHeaderUrl] = React.useState('head1');
    const [checkUrl, setCheckUrl] = React.useState('check1');
    const [paginatorPageNumber, setPaginatorPageNumber] = React.useState(1);


    const LinkToCheck = (h:string,p: string, prPageNum: number) => {
        setHeaderUrl(h)
        setCheckUrl(p)

        setPaginatorPageNumber(prPageNum)
        setCheckUrl(p)

        setSelectedTab(1)
    }

    const params = useParams();
    const tabNameToIndex = {
        "content": 0,
        "checks": 1,
        "report": 2,

    }

    const indexToTabName = {
        0: "content",
        1: `checks/${headerUrl}/${checkUrl}`,
        2: "report",

    }

// console.log(params)


    // @ts-ignore
    const [selectedTab, setSelectedTab] = React.useState(tabNameToIndex[params.page]>2?1:tabNameToIndex[params.page]);

    const navigate = useNavigate();


    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
    };

    useEffect(() => {
            // @ts-ignore
            navigate(`/home/${indexToTabName[selectedTab]}`)
        }, [
            selectedTab
            , checkUrl,
        headerUrl
        ]
    )

    const pages = ['Содержание', 'Отчет'];
    const settings = ['1 очередь', '2 очередь'];

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);

    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);

    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }





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
                            Volga-Dnepr
                        </Typography>

                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
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
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
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
                            Volga-Dnepr
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
                            // aria-label="nav tabs example"
                        >

                            <Tab
                                sx={{padding: "26px", maxWidth: "120px"}}
                                label="Содержание"

                            />
                            <Tab
                                sx={{padding: "26px", maxWidth: "120px"}}
                                label="Проверки"
                            />
                            <Tab
                                sx={{padding: "26px", minWidth: "120px", maxWidth: "120px"}}
                                label="Отчет"
                            />
                        </Tabs>


                        {/**/}

                        <Box sx={{flexGrow: 0}}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                                </IconButton>
                            </Tooltip>
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
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <div className={styles.main}>
                {selectedTab === 0 && <Content setSelectedTab={setSelectedTab} LinkToCheck={LinkToCheck}/>}
                {selectedTab === 1 && <Checks paginatorPageNumber={paginatorPageNumber} LinkToCheck={LinkToCheck}/>}
                {selectedTab === 2 && <Report/>}
            </div>
        </div>
    );
}

export default Home;