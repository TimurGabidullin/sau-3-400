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


}

export default function AlertDialog(props:AlertDialogPropsType) {

    const handleClose =useCallback( () => {
        props.setOpenDialogAlert(false);
    },[]);

    // const handleClickYes =useCallback( () => {
    //     props.setOpenDialogAlert(false);
    // },[]);
    //
    //
    // const handleClickNo =useCallback( () => {
    //     props.setOpenDialogAlert(false);
    // },[]);
    //



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
                    <Button onClick={handleClose}>Да</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}