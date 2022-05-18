import React, {memo, useCallback, useEffect, useState} from "react";
import TextField from "@mui/material/TextField";
import {useForm} from "react-hook-form";
import CalculateIcon from '@mui/icons-material/Calculate';
import Button from '@mui/material/Button';
import styles from './Table.module.css';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {CheckType, numToFunc, saveDataAC, saveSingleDataAC} from "../../../redux/checksReducer";
import AlertDialog from "../alertDialog/AlertDialog";
import {ParamsType} from "../../home/Home";
import {addSettingsInReportAC} from "../../../redux/reportReducer";
import {saveChecksState, saveReportState} from "../../../utils/localStorage";
import "antd/dist/antd.css";
import {message} from "antd";
import Snackbar from "@mui/material/Snackbar";
import SimpleSnackbar from "../snackbar/Snackbar";


const Pulse = require("react-reveal/Pulse")


const TableSize2x5 = (props: any) => {

// debugger
    const numberOfPlane = useSelector((state: AppStateType) => state.app.numberOfPlane)
    const checksReducer = useSelector((state: AppStateType) => state.checks)
    const reportReducer = useSelector((state: AppStateType) => state.report)
    const params: ParamsType = useParams()
    const checks = useSelector((state: AppStateType) => state.checks[params.header ? params.header : 'head1'])
    const check = checks.filter((ch: CheckType) => ch.idCheck === params.check)[0]
    const idCheck = check.idCheck
    const pageNumber = check.pageNumber
    const typeOfSubBlock = check.typesOfSubBlocks[props.indexOfTable]
    const resistor = check.resistors[props.indexOfTable]
    const headerOfCheck = check.title
    const numbersOfContacts = check.numbersOfContacts[props.indexOfTable]
    const typeOfBlock = check.typesOfBlocks[props.indexOfTable]
    // @ts-ignore
    const controlFunction = numToFunc[check.controlFunctions[props.indexOfTable]].bind(check)
    const valuesOfBlock = check.valuesOfBlocks[props.indexOfTable]
    const isHaveSettings = check.isHaveSettings[props.indexOfTable]
    const directionOfCheck = check.directionsOfChecks
    const [openDialogAlert, setOpenDialogAlert] = React.useState(false);
    const [openMessageAlert, setOpenMessageAlert] = React.useState(false);
    const dispatch = useDispatch()








    const {register, trigger, handleSubmit, formState: {errors}, getValues} = useForm({
        shouldFocusError: false
    });

    const handleAlertBtn1Click = () => {
        setOpenDialogAlert(false)
    }

    const handleAlertBtn2Click = () => {
        dispatch(addSettingsInReportAC(idCheck, pageNumber, typeOfBlock, typeOfSubBlock, resistor, 1))
        setOpenDialogAlert(false)
    }


    useEffect(() => {
        saveChecksState(checksReducer, numberOfPlane)
        saveReportState(reportReducer, numberOfPlane)
        // message.info('This is a normal message');

    }, [checksReducer, reportReducer])

    //
    // useEffect(() => {
    //
    //             message.info('This is a normal message');
    //
    // },[reportReducer])

    const onClickBtn = () => {

message.info('This is a normal message');

    }




        const onSubmit = () => {

        const inputValue1 = getValues("channel1");
        const inputValue2 = getValues("channel2");
        const inputValue3 = getValues("channel3");
        const inputValue4 = getValues("channel4");



        // if ((inputValue1 !== valuesOfBlock["channel1"] && valuesOfBlock["channel1"] !== '' ||
        //     inputValue2 !== valuesOfBlock["channel2"] && valuesOfBlock["channel2"] !== '' ||
        //     inputValue3 !== valuesOfBlock["channel3"] && valuesOfBlock["channel3"] !== '' ||
        //     inputValue4 !== valuesOfBlock["channel4"] && valuesOfBlock["channel4"] !== '') && isHaveSettings) {
        //
        //
        //     setOpenDialogAlert(true)
        // }

        if (isHaveSettings) {
            if (inputValue1 !== valuesOfBlock["channel1"]) {
                if (valuesOfBlock["channel1"] !== '' && inputValue1 !== '') {

                    props.setOpenSnackbar(true)
                    dispatch(addSettingsInReportAC(idCheck + 'channel1', pageNumber, typeOfBlock, typeOfSubBlock, resistor, 1))
                }
                dispatch(saveSingleDataAC(
                    inputValue1,
                    params.header ? params.header : "head1",
                    params.check ? params.check : "check1",
                    props.indexOfTable, 'channel1'))
            }

            if (inputValue2 !== valuesOfBlock["channel2"]) {
                if (valuesOfBlock["channel2"] !== '') {
                    dispatch(addSettingsInReportAC(idCheck + 'channel2', pageNumber, typeOfBlock, typeOfSubBlock, resistor, 2))
                }
                dispatch(saveSingleDataAC(
                    inputValue2,
                    params.header ? params.header : "head1",
                    params.check ? params.check : "check1",
                    props.indexOfTable, 'channel2'))
            }

            if (inputValue3 !== valuesOfBlock["channel3"]) {
                if (valuesOfBlock["channel3"] !== '') {
                    dispatch(addSettingsInReportAC(idCheck + 'channel3', pageNumber, typeOfBlock, typeOfSubBlock, resistor, 3))
                }
                dispatch(saveSingleDataAC(
                    inputValue3,
                    params.header ? params.header : "head1",
                    params.check ? params.check : "check1",
                    props.indexOfTable, 'channel3'))
            }

            if (inputValue4 !== valuesOfBlock["channel4"]) {
                if (valuesOfBlock["channel4"] !== '') {
                    dispatch(addSettingsInReportAC(idCheck + 'channel4', pageNumber, typeOfBlock, typeOfSubBlock, resistor, 4))
                }
                dispatch(saveSingleDataAC(
                    inputValue4,
                    params.header ? params.header : "head1",
                    params.check ? params.check : "check1",
                    props.indexOfTable, 'channel4'))
            }


            //
            // dispatch(saveDataAC(
            //     [inputValue1, inputValue2, inputValue3, inputValue4],
            //     params.header ? params.header : "head1",
            //     params.check ? params.check : "check1",
            //     props.indexOfTable))

            //
            // dispatch(saveSingleDataAC(
            //     inputValue1,
            //     params.header ? params.header : "head1",
            //     params.check ? params.check : "check1",
            //     props.indexOfTable, 'channel1'))
            // dispatch(saveSingleDataAC(
            //     inputValue2,
            //     params.header ? params.header : "head1",
            //     params.check ? params.check : "check1",
            //     props.indexOfTable, 'channel2'))
            // dispatch(saveSingleDataAC(
            //     inputValue3,
            //     params.header ? params.header : "head1",
            //     params.check ? params.check : "check1",
            //     props.indexOfTable, 'channel3'))
            // dispatch(saveSingleDataAC(
            //     inputValue4,
            //     params.header ? params.header : "head1",
            //     params.check ? params.check : "check1",
            //     props.indexOfTable, 'channel4'))

        }
    }

    useEffect(() => {
            // localStorage.setItem('checks'+numberOfPlane, JSON.stringify(checksReducer));

            if (valuesOfBlock['channel1'] !== '') trigger('channel1')
            if (valuesOfBlock['channel2'] !== '') trigger('channel2')
            if (valuesOfBlock['channel3'] !== '') trigger('channel3')
            if (valuesOfBlock['channel4'] !== '') trigger('channel4')
        }
        , [])


    return (
        <Pulse>
            <form onSubmit={handleSubmit(onSubmit)}>
                <table className={styles.table}>
                    <tr>
                        <td></td>
                        <td colSpan={4}>
                            <div className={styles.tableDescription}><span>{numbersOfContacts}</span>
                                <span>{directionOfCheck
                                    ? directionOfCheck[props.indexOfTable]
                                    : ''} </span></div>
                        </td>
                    </tr>
                    <tr>
                        <td>{typeOfBlock} </td>
                        <td>
                            <TextField

                                type="number"
                                inputProps={{step: 0.01}}

                                sx={{marginTop: '10px'}}
                                color='secondary'
                                // color={!errors.channel1&&getValues("channel1")?'success':'secondary'}
                                id="outlined-helperText"
                                label="1 канал"

                                defaultValue={valuesOfBlock['channel1']}
                                error={errors.channel1}
                                {...register("channel1",
                                    {validate: (value => controlFunction(numberOfPlane, value, 'channel1', props.indexOfTable))})}
                            />
                        </td>
                        <td>
                            <TextField
                                type="number"
                                inputProps={{step: 0.01}}
                                sx={{marginTop: '10px'}}
                                color='secondary'
                                id="outlined-helperText"
                                label="2 канал"
                                defaultValue={valuesOfBlock['channel2']}
                                error={errors.channel2}
                                {...register("channel2",
                                    {validate: (value => controlFunction(numberOfPlane, value, 'channel2', props.indexOfTable))})}
                            />
                        </td>
                        <td>
                            <TextField
                                type="number"
                                inputProps={{step: 0.01}}
                                sx={{marginTop: '10px'}}
                                color='secondary'
                                id="outlined-helperText"
                                label="3 канал"
                                defaultValue={valuesOfBlock['channel3']}
                                error={errors.channel3}
                                {...register("channel3",
                                    {validate: ((value) => controlFunction(numberOfPlane, value, 'channel3', props.indexOfTable))})}
                            />
                        </td>
                        <td>
                            <TextField
                                type="number"
                                inputProps={{step: 0.01}}
                                sx={{marginTop: '10px'}}
                                color='secondary'
                                id="outlined-helperText"
                                label="4 канал"
                                defaultValue={valuesOfBlock['channel4']}
                                error={errors.channel4}
                                {...register("channel4",
                                    {validate: (value => controlFunction(numberOfPlane, value, 'channel4', props.indexOfTable))})}
                            />
                        </td>
                    </tr>
                </table>

                <div className={styles.btn}>

                    <Button
                        onClick={onSubmit}
                        type={"submit"}
                        variant="outlined"
                        endIcon={<CalculateIcon/>}
                        color="secondary"
                        sx={{transitionDuration: "0.5s"}}
                    >
                        Расчёт
                    </Button>







                    <AlertDialog openDialogAlert={openDialogAlert}
                                 setOpenDialogAlert={setOpenDialogAlert}
                                 handleAlertBtn1Click={handleAlertBtn1Click}
                                 handleAlertBtn2Click={handleAlertBtn2Click}
                                 headerText="Занести регуллировку в ОТЧЁТ?"
                                 mainText="Значение канала изменилось. Если вы занесли регуллировку в отчёт случайно,
                             то её можно удалить в разделе 'ОТЧЕТ'."
                                 btnText1="Нет"
                                 btnText2="Да"
                    />
                </div>
            </form>

        </Pulse>
    );
    }

export default memo(TableSize2x5)