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
import Grow from '@mui/material/Grow';
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide  style={{ transitionDelay: '600ms'  }}    direction="down"  ref={ref} {...props} />;

    // return <Grow   ref={ref} {...props} />;
});


type AlertDialogPropsType={
    openDialogAlert:boolean
    setOpenDialogAlert:(value:boolean)=>void
    handleAlertBtn1Click:Function
    handleAlertBtn2Click:Function
    headerText:string
    mainText:string
    btnText1:string
    btnText2:string

}

export default function AlertDialog(props:AlertDialogPropsType) {











    const handleClose =() => {
        props.setOpenDialogAlert(false);
    };

    const handleBtn1Click =() => {
        props.handleAlertBtn1Click();
    };
    const handleBtn2Click =() => {
        props.handleAlertBtn2Click();
    };


    return (
        <div>
            <Dialog
                open={props.openDialogAlert}
                TransitionComponent={Transition}

                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{props.headerText}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {props.mainText}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleBtn1Click}>{props.btnText1}</Button>
                    <Button onClick={handleBtn2Click}>{props.btnText2}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}