import React, {memo, useCallback, useEffect, useState} from "react";
import TextField from "@mui/material/TextField";
import {useForm} from "react-hook-form";
import CalculateIcon from '@mui/icons-material/Calculate';
import Button from '@mui/material/Button';
import styles from './Table.module.css';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {CheckType, numToFunc, saveDataAC} from "../../../redux/checksReducer";
import AlertDialog from "../alertDialog/AlertDialog";
import {ParamsType} from "../../home/Home";
import {addSettingsInReportAC} from "../../../redux/reportReducer";
import {saveChecksState, saveReportState} from "../../../utils/localStorage";


const TableSize2x5 = (props: any) => {

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
    const dispatch = useDispatch()

    const {register, trigger, handleSubmit, formState: {errors}, getValues} = useForm({
        shouldFocusError:false
    });

    const handleAlertBtn1Click = () => {
        setOpenDialogAlert(false)
    }

    const handleAlertBtn2Click = () => {
        dispatch(addSettingsInReportAC(idCheck, pageNumber, typeOfBlock, typeOfSubBlock, resistor))


        setOpenDialogAlert(false)
    }


    useEffect(() => {


        // localStorage.setItem('checks' + numberOfPlane, JSON.stringify(checksReducer));

        saveChecksState(checksReducer, numberOfPlane)
        saveReportState(reportReducer, numberOfPlane)
    }, [checksReducer, reportReducer])

    const onSubmit = (e:any) => {


        const inputValue1 = getValues("channel1");
        const inputValue2 = getValues("channel2");
        const inputValue3 = getValues("channel3");
        const inputValue4 = getValues("channel4");


        if ((inputValue1 !== valuesOfBlock["channel1"] && valuesOfBlock["channel1"] !== '' ||
            inputValue2 !== valuesOfBlock["channel2"] && valuesOfBlock["channel2"] !== '' ||
            inputValue3 !== valuesOfBlock["channel3"] && valuesOfBlock["channel3"] !== '' ||
            inputValue4 !== valuesOfBlock["channel4"] && valuesOfBlock["channel4"] !== '') && isHaveSettings) {
            setOpenDialogAlert(true)
        }

        dispatch(saveDataAC(
            [inputValue1, inputValue2, inputValue3, inputValue4],
            params.header ? params.header : "head1",
            params.check ? params.check : "check1",
            props.indexOfTable))


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

                            sx={{marginTop: '10px'}}
                            color='secondary'
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

            {errors.exampleRequired && <span>This field is required</span>}

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
                             mainText="Значение 1 канала изменилось."
                             btnText1="Нет"
                             btnText2="Да"
                />
            </div>
        </form>


    );
}

export default memo(TableSize2x5)