import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import DeleteIcon from '@mui/icons-material/Delete';
import {TransitionGroup} from 'react-transition-group';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import TextField from '@mui/material/TextField';
import {addNewReportAC, removeReportAC} from "../../redux/reportReducer";
import {useForm} from "react-hook-form";
import {memo, useEffect} from "react";
import Typography from "@mui/material/Typography";
import Icon from '@mui/material/Icon';
import styles from "./Report.module.css";
import {saveChecksState, saveReportState} from "../../utils/localStorage";


const Report=()=> {
    console.log('Reports')

    const numberOfPlane = useSelector((state: AppStateType) => state.app.numberOfPlane)
    const reportReducer = useSelector((state: AppStateType) => state.report)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {

        saveReportState(reportReducer, numberOfPlane)
    }, [ reportReducer])

    const {register, handleSubmit,resetField, formState: {errors}} = useForm();
    const onSubmit = (data: any) => {
        debugger
        dispatch(addNewReportAC(data.report));
        resetField('report')

    }

    const report = useSelector((state: AppStateType) => state.report)
    const dispatch = useDispatch()


    const handleRemoveReport = (idCheck: string) => {
        dispatch(removeReportAC(idCheck))

        // saveReportState()
    };


    return (
        <div>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form} >
                    <TextField
                        inputProps={{ autocomplete:"off"}}
                        fullWidth
                        color='secondary'
                        label='Введите отчёт'
                        id="fullWidth"
                        error={errors.report}
                        {...register("report", {required: true})}
                    />
                    <Button type={"submit"}>
                        <Icon
                            color='secondary'
                            sx={{ fontSize: 40 }}
                        >add_circle
                        </Icon>
                    </Button>

                </form>
            <div>{errors.report &&
            <Typography sx={{padding: '0 30px',color: '#ba000d'}} variant="body1" component='p'>
                Поле должно быть заполнено.
            </Typography>}
            </div>
            <Box sx={{mt: 1}}>
                <List>
                    <TransitionGroup>
                        {Object.keys(report).map((idCheck) => (
                            <Collapse key={idCheck}>
                                <Typography sx={{padding: '0 10px',textIndent: '20px'}} variant="body1" component='p'>
                                    {report[idCheck]}
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                        title="Delete"
                                        color='secondary'
                                        onClick={() => {

                                            handleRemoveReport(idCheck)
                                        }}
                                    >
                                        <DeleteIcon/>
                                    </IconButton>

                                </Typography>

                            </Collapse>
                        ))}
                    </TransitionGroup>
                </List>
            </Box>
        </div>
    );
}

export default memo(Report);