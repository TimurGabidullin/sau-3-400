import React from "react";
import TextField from "@mui/material/TextField";
import {useForm} from "react-hook-form";
import CalculateIcon from '@mui/icons-material/Calculate';
import Button from '@mui/material/Button';
import styles from './Table.module.css';


export default function TableSize2x5() {


    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = (data: any) => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it


    const validate = (value: number) => +value === 1

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <table className={styles.table}>
                <tr>
                    <td></td>
                    <td>U21/11</td>
                </tr>
                <tr>
                    <td>ВПК:</td>
                    <td>
                        <TextField
                            sx={{marginTop:'10px'}}
                            color='secondary'
                            id="outlined-helperText"
                            label="1 канал"
                            // defaultValue="Введите Значение"
                            error={errors.channel1}
                            {...register("channel1", {validate: validate})}/>
                    </td>
                    <td>
                        <TextField
                            sx={{marginTop:'10px'}}
                            color='secondary'
                            id="outlined-helperText"
                            label="2 канал"
                            // defaultValue="Введите Значение"
                            error={errors.channel2}
                            {...register("channel2", {required: true})}/>
                    </td>
                    <td>
                        <TextField
                            sx={{marginTop:'10px'}}
                            color='secondary'
                            id="outlined-helperText"
                            label="3 канал"
                            // defaultValue="Введите Значение"
                            error={errors.channel3}
                            {...register("channel3", {required: true})}/>
                    </td>
                    <td>
                        <TextField
                            sx={{marginTop:'10px'}}
                            color='secondary'
                            id="outlined-helperText"
                            label="4 канал"
                            // defaultValue="Введите Значение"
                            error={errors.channel4}
                            {...register("channel4", {required: true})}/>
                    </td>
                </tr>
            </table>

            {errors.exampleRequired && <span>This field is required</span>}

            <div className={styles.btn}>
                <Button type={"submit"}
                        variant="outlined"
                        endIcon={<CalculateIcon/>}
                        color="secondary"

                    // onClick={onSubmit}
                >
                    Расчёт
                </Button>
            </div>
            {/*<input type="submit" />*/}
        </form>
    );
}