import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import {TransitionGroup} from 'react-transition-group';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import TextField from '@mui/material/TextField';
import {addNewReportAC, removeReportAC} from "../../redux/reportReducer";
import {useForm} from "react-hook-form";


 function Report() {
    const {register,  handleSubmit, formState: {errors}, getValues} = useForm();
    const onSubmit = (data:any) => {
        debugger
        dispatch(addNewReportAC(data.report));
    }

    const report = useSelector((state: AppStateType) => state.report)
    const dispatch = useDispatch()


    const handleRemoveReport = (idCheck: string) => {
        dispatch(removeReportAC(idCheck))
    };




    return (
        <div>

            <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        // fullWidth
                        label='Введите отчёт'
                        id="fullWidth"
                        error={errors.report}
                        {...register("report", { required: true })}
                    />

                    <Button
                        type={"submit"}
                        variant="contained"
                    >
                        Добавить отчет
                    </Button>
                    {errors.report && <div>This field is required</div>}
                </form>
            </Box>


            <Box sx={{mt: 1}}>
                <List>
                    <TransitionGroup>
                        {Object.keys(report).map((idCheck) => (
                            <Collapse key={idCheck}>
                                {report[idCheck]}
                                <IconButton
                                    edge="end"
                                    aria-label="delete"
                                    title="Delete"
                                    onClick={() => handleRemoveReport(idCheck)}
                                >
                                    <DeleteIcon/>
                                </IconButton>
                            </Collapse>
                        ))}
                    </TransitionGroup>

                </List>
            </Box>
        </div>
    );
}

export default Report;