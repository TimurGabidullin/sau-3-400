import React, {useCallback, useEffect, useState} from "react";
import TextField from "@mui/material/TextField";
import {useForm} from "react-hook-form";
import CalculateIcon from '@mui/icons-material/Calculate';
import Button from '@mui/material/Button';
import styles from './Table.module.css';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {CheckType, saveDataAC} from "../../../redux/checksReducer";
import AlertDialog from "../alertDialog/AlertDialog";


export default function TableSize2x5(props: any) {

    console.log('отрисовка компаненты Table')

    const params = useParams()
    const checks = useSelector((state: AppStateType) => state.checks[params.header ? params.header : 'head1'])
    const check = checks.filter((ch: CheckType) => ch.idCheck === params.page)[0]
    const headerOfCheck = check.title
    const numbersOfContacts = check.numbersOfContacts[props.indexOfTable]
    const typeOfBlock = check.typesOfBlocks[props.indexOfTable]
    const controlFunction = check.controlFunction.bind(checks.filter((ch: CheckType) => ch.idCheck === params.page)[0])
    const valuesOfBlock = check.valuesOfBlocks[props.indexOfTable]
    const isHaveSettings = check.isHaveSettings[props.indexOfTable]

    const [openDialogAlert, setOpenDialogAlert] = React.useState(false);
    const dispatch = useDispatch()

    const {register, handleSubmit, watch, formState: {errors}, getValues} = useForm();

    const onClickCalculateHandler = useCallback(() => {
        const inputValue1 = getValues("channel1");
        const inputValue2 = getValues("channel2");
        const inputValue3 = getValues("channel3");
        const inputValue4 = getValues("channel4");


        // switch () {
        //
        // }


        dispatch(saveDataAC(
            [+inputValue1, +inputValue2, +inputValue3, +inputValue4],
            params.head ? params.head : "head1",
            params.page ? params.page : "check1",
            props.indexOfTable))

        if ((+inputValue1 !== valuesOfBlock[0] ||
            +inputValue2 !== valuesOfBlock[1] ||
            +inputValue3 !== valuesOfBlock[2] ||
            +inputValue4 !== valuesOfBlock[3] )&&
            isHaveSettings) {
            setOpenDialogAlert(true)
        }
    }, [])


// useEffect((onClickCalculateHandler),[])


    const onSubmit = (data: any) => {
        console.log('submit')

    }


    // console.log(watch("example")); // watch input value by passing the name of it


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <table className={styles.table}>
                <tr>
                    <td></td>
                    <td>{numbersOfContacts}</td>
                </tr>
                <tr>
                    <td>{typeOfBlock} </td>
                    <td>
                        <TextField
                            sx={{marginTop: '10px'}}
                            color='secondary'
                            id="outlined-helperText"
                            label="1 канал"
                            defaultValue={valuesOfBlock[0]}
                            error={errors.channel1}
                            // error={Boolean(statusError[0])}
                            {...register("channel1", {validate: (value => controlFunction(value, props.indexOfTable))})}/>
                    </td>
                    <td>
                        <TextField
                            sx={{marginTop: '10px'}}
                            color='secondary'
                            id="outlined-helperText"
                            label="2 канал"
                            defaultValue={valuesOfBlock[1]}
                            error={errors.channel2}
                            {...register("channel2", {validate: (value => controlFunction(value, props.indexOfTable))})}


                        />
                    </td>
                    <td>
                        <TextField
                            sx={{marginTop: '10px'}}
                            color='secondary'
                            id="outlined-helperText"
                            label="3 канал"
                            defaultValue={valuesOfBlock[2]}
                            error={errors.channel3}
                            {...register("channel3", {validate: (value => controlFunction(value, props.indexOfTable))})}/>
                    </td>
                    <td>
                        <TextField
                            sx={{marginTop: '10px'}}
                            color='secondary'
                            id="outlined-helperText"
                            label="4 канал"
                            defaultValue={valuesOfBlock[3]}
                            error={errors.channel4}
                            {...register("channel4", {validate: (value => controlFunction(value, props.indexOfTable))})}/>
                    </td>
                </tr>
            </table>

            {errors.exampleRequired && <span>This field is required</span>}

            <div className={styles.btn}>


                <Button
                    // onClick={onSubmit}
                    type={"submit"}
                    variant="outlined"
                    endIcon={<CalculateIcon/>}
                    color="secondary"
                    onClick={onClickCalculateHandler}
                >
                    Расчёт
                </Button>
                <AlertDialog openDialogAlert={openDialogAlert}
                             setOpenDialogAlert={setOpenDialogAlert}

                />
            </div>
        </form>


    );
}