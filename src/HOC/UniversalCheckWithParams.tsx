import React, {memo, useCallback, useEffect} from 'react'
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/store";
import {CheckType} from "../redux/checksReducer";
import styles from "../components/checks/check/Check.module.css";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AlertDialog from "../components/common/alertDialog/AlertDialog";

const Fade = require("react-reveal/Fade")


const UniversalCheckWithParams = (Check: React.FC) => {


    const [openDialogAlert, setOpenDialogAlert] = React.useState(false);
    const params = useParams();

    // @ts-ignore
    const checks = useSelector((state: AppStateType) => state.checks[params.header ? params.header : 'head1'])
    const headerOfCheck = checks.filter((ch: CheckType) => ch.idCheck === params.check)[0].title



    const CheckWithParams = () => {



        return (

            <Fade bottom cascade>
                <div className={styles.checkContainer}>
                    <Typography sx={{padding: '0 20px'}} variant="h6" component="h6">
                        {headerOfCheck}<IconButton color="secondary" aria-label="add an alarm">
                        <InfoOutlinedIcon onClick={() => setOpenDialogAlert(true)}/>
                    </IconButton>
                    </Typography>

                    <Check/>

                    <AlertDialog openDialogAlert={openDialogAlert}
                                 setOpenDialogAlert={setOpenDialogAlert}
                                 headerText="ПОДГОТОВКА К ПРОВЕРКЕ"
                                 mainText="Выберите проверку"

                    />

                </div>
            </Fade>
        )
    }
    return CheckWithParams
}

export default UniversalCheckWithParams;