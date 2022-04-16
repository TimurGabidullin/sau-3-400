import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import {useCallback} from "react";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});


type AlertDialogPropsType={
    openDialogAlert:boolean
    setOpenDialogAlert:(value:boolean)=>void
    handleAlertBtn1Click:Function
    handleAlertBtn2Click:Function
}

export default function AlertDialog(props:AlertDialogPropsType) {

    const handleClose =useCallback( () => {
        props.setOpenDialogAlert(false);
    },[]);

    // const handleClickYes =useCallback( () => {
    //    handleClose()
    // },[]);
    //
    //
    // const handleClickNo =useCallback( () => {
    //     props.setOpenDialogAlert(false);
    // },[]);
    const handleBtn1Click =useCallback( () => {
        props.handleAlertBtn1Click();
    },[]);
    const handleBtn2Click =useCallback( () => {
        props.handleAlertBtn2Click();
    },[]);


    return (
        <div>
            <Dialog
                open={props.openDialogAlert}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Занести регуллировку в ОТЧЁТ?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                 Значение 1 канала изменилось.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Нет</Button>
                    <Button onClick={handleBtn2Click}>Да</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}