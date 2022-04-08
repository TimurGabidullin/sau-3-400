import React, {useCallback, useContext, useState} from "react";
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
    const headerOfCheck = checks.filter((ch: CheckType) => ch.idCheck === params.page)[0].title
    const numbersOfContacts = checks.filter((ch: CheckType) => ch.idCheck === params.page)[0].numbersOfContacts[props.indexOfTable]
    const typeOfBlock = checks.filter((ch: CheckType) => ch.idCheck === params.page)[0].typesOfBlocks[props.indexOfTable]
    const controlFunction = checks.filter((ch: CheckType) => ch.idCheck === params.page)[0].controlFunction
    const valueOfBlock = checks.filter((ch: CheckType) => ch.idCheck === params.page)[0].valuesOfBlocks[0]

    const [openDialogAlert, setOpenDialogAlert] = React.useState(false);
    const dispatch = useDispatch()

    const {register, handleSubmit, watch, formState: {errors}} = useForm();


    const onSubmit = useCallback((data: any) => {
        if (Number(data.channel1) !== valueOfBlock) {
            setOpenDialogAlert(true)
        }
        dispatch(saveDataAC(
            [+data.channel1, +data.channel1, +data.channel1, +data.channel1],
            params.head ? params.head : "head1",
            params.page ? params.page : "check1"))

        setStatusError(
            [controlFunction(data.channel1),
                controlFunction(data.channel2),
                controlFunction(data.channel3),
                controlFunction(data.channel4)])
    }, [])


    const [statusError, setStatusError] = useState(['', '', '', ''])


    console.log(watch("example")); // watch input value by passing the name of it

    // const validate = (value: number) => +value === 1


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
                            defaultValue="5"
                            // error={errors.channel1}
                            error={Boolean(statusError[0])}
                            {...register("channel1",)}/>
                    </td>
                    <td>
                        <TextField
                            sx={{marginTop: '10px'}}
                            color='secondary'
                            id="outlined-helperText"
                            label="2 канал"
                            defaultValue={'5'}
                            // value={5}
                            // error={errors.channel2}
                            error={Boolean(statusError[1])}

                            {...register("channel2")}


                        />
                    </td>
                    <td>
                        <TextField
                            sx={{marginTop: '10px'}}
                            color='secondary'
                            id="outlined-helperText"
                            label="3 канал"
                            // defaultValue="Введите Значение"
                            // error={errors.channel3}
                            error={Boolean(statusError[2])}


                            {...register("channel3",)}/>
                    </td>
                    <td>
                        <TextField
                            sx={{marginTop: '10px'}}
                            color='secondary'
                            id="outlined-helperText"
                            label="4 канал"
                            // defaultValue="Введите Значение"
                            // error={errors.channel4}
                            error={Boolean(statusError[3])}
                            {...register("channel4",)}/>
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


                >
                    Расчёт
                </Button>
                <AlertDialog openDialogAlert={openDialogAlert} setOpenDialogAlert={setOpenDialogAlert}/>
            </div>
        </form>


    );
}