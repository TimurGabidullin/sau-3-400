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

import {useSnackbar} from "notistack";


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
    const positionOfSubBlock = check.positionOfSubBlock[props.indexOfTable]
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
    const dispatch = useDispatch()


    const {enqueueSnackbar} = useSnackbar();

    const {register, trigger, handleSubmit, formState: {errors}, getValues} = useForm({
        shouldFocusError: false
    });

    // const handleAlertBtn1Click = () => {
    //     setOpenDialogAlert(false)
    // }
    //
    // const handleAlertBtn2Click = () => {
    //     dispatch(addSettingsInReportAC(idCheck, pageNumber, typeOfBlock, typeOfSubBlock, resistor, 1))
    //     setOpenDialogAlert(false)
    // }


    useEffect(() => {
        saveChecksState(checksReducer, numberOfPlane)
        saveReportState(reportReducer, numberOfPlane)

    }, [checksReducer, reportReducer])


    const inputFunc = (channel: "channel1" | "channel2" | "channel3" | "channel4") => {
        const inputValue = getValues(channel);
        if (inputValue !== valuesOfBlock[channel]) {
            if (valuesOfBlock[channel] !== '' && inputValue !== '' && isHaveSettings) {
                enqueueSnackbar(`${channel[7]} канал добавлен в ОТЧЕТ`);
                dispatch(addSettingsInReportAC(
                    idCheck + channel + positionOfSubBlock + resistor,
                    pageNumber,
                    typeOfBlock,
                    typeOfSubBlock,
                    positionOfSubBlock,
                    resistor,
                    +channel[7]))
            }
            dispatch(saveSingleDataAC(
                inputValue,
                params.header ? params.header : "head1",
                params.check ? params.check : "check1",
                props.indexOfTable, channel))
        }
    }

    const onSubmit = () => {
        inputFunc('channel1')
        inputFunc('channel2')
        inputFunc('channel3')
        inputFunc('channel4')
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
                        <td style={{paddingTop: '7px'}}>{typeOfBlock}</td>
                        <td>
                            <TextField
                                // autocomplete="off"
                                type="number"

                                inputProps={{step: 0.01, autocomplete: "off"}}

                                sx={{marginTop: '10px'}}
                                color='secondary'
                                // color={!errors.channel1&&getValues("channel1")?'success':'secondary'}
                                id="outlined-helperText"
                                label="1 канал"

                                defaultValue={valuesOfBlock['channel1']}
                                error={errors.channel1}
                                {...register("channel1",
                                    {validate: (value => controlFunction(numberOfPlane, value, 'channel1', props.indexOfTable, positionOfSubBlock))})}
                            />
                        </td>
                        <td>
                            <TextField
                                type="number"
                                inputProps={{step: 0.01, autocomplete: "off"}}
                                sx={{marginTop: '10px'}}
                                color='secondary'
                                id="outlined-helperText"
                                label="2 канал"
                                defaultValue={valuesOfBlock['channel2']}
                                error={errors.channel2}
                                {...register("channel2",
                                    {validate: (value => controlFunction(numberOfPlane, value, 'channel2', props.indexOfTable, positionOfSubBlock))})}
                            />
                        </td>
                        <td>
                            <TextField
                                type="number"
                                inputProps={{step: 0.01, autocomplete: "off"}}
                                sx={{marginTop: '10px'}}
                                color='secondary'
                                id="outlined-helperText"
                                label="3 канал"
                                defaultValue={valuesOfBlock['channel3']}
                                error={errors.channel3}
                                {...register("channel3",
                                    {validate: ((value) => controlFunction(numberOfPlane, value, 'channel3', props.indexOfTable, positionOfSubBlock))})}
                            />
                        </td>
                        <td>
                            <TextField
                                type="number"
                                inputProps={{step: 0.01, autocomplete: "off"}}
                                sx={{marginTop: '10px'}}
                                color='secondary'
                                id="outlined-helperText"
                                label="4 канал"
                                defaultValue={valuesOfBlock['channel4']}
                                error={errors.channel4}
                                {...register("channel4",
                                    {validate: (value => controlFunction(numberOfPlane, value, 'channel4', props.indexOfTable, positionOfSubBlock))})}
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
                    >
                        Расчёт
                    </Button>


                    {/*<AlertDialog openDialogAlert={openDialogAlert}*/}
                    {/*             setOpenDialogAlert={setOpenDialogAlert}*/}
                    {/*             handleAlertBtn1Click={handleAlertBtn1Click}*/}
                    {/*             handleAlertBtn2Click={handleAlertBtn2Click}*/}
                    {/*             headerText="Занести регуллировку в ОТЧЁТ?"*/}
                    {/*             mainText="Значение канала изменилось. Если вы занесли регуллировку в отчёт случайно,*/}
                    {/*         то её можно удалить в разделе 'ОТЧЕТ'."*/}
                    {/*             btnText1="Нет"*/}
                    {/*             btnText2="Да"*/}
                    {/*/>*/}
                </div>
            </form>

        </Pulse>
    );
}

export default memo(TableSize2x5)