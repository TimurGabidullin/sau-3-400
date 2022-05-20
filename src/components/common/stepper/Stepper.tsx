import * as React from 'react';
import Box from '@mui/material/Box';
import {useTheme} from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import {memo, useCallback, useEffect} from "react";
import {useParams} from "react-router-dom";
import {ParamsType} from "../../home/Home";
import Container from "@mui/material/Container";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {setCurrentPageAC} from "../../../redux/appReducer";

type StepperPropsType = {
    paginatorPageNumber: number
    LinkToCheck: (h: string, url: string, prPageNum: number) => void
}


// const getHeaderParameterUrl = (page: number) => {
//     if (page < 4) return 'head1'
//     if (page > 3 && page < 7) return 'head2'
//     if (page > 6 && page < 10) return 'head3'
//
//     else return 'head2'
// }

const getHeaderParameterUrl = (page: number) => {
    if (page < 2) return 'head1'
    if (page > 1 && page < 5) return 'head2'
    if (page > 4 && page < 8) return 'head3'
    if (page > 7 && page < 10) return 'head4'
    if (page > 9 && page < 11) return 'head5'
    if (page > 10 && page < 12) return 'head6'
    if (page > 11 && page < 13) return 'head7'
    if (page > 12 && page < 14) return 'head8'
    if (page > 13 && page < 22) return 'head9'
    if (page > 21 && page < 23) return 'head10'


    // if (page < 4) return 'head1'
    // if (page > 3 && page < 7) return 'head2'
    // if (page > 6 && page < 10) return 'head3'
    // if (page > 9 && page < 12) return 'head4'
    // if (page > 11 && page < 13) return 'head5'

    // if (page > 12 && page < 14) return 'head6'
    // if (page > 13 && page < 15) return 'head7'
    // if (page > 14 && page < 16) return 'head8'
    // if (page > 15 && page < 24) return 'head9'
    // if (page > 23 && page < 25) return 'head10'


    else return 'head32'
}


const Stepper = (props: StepperPropsType) => {
    // debugger
    let currentPage = useSelector((state: AppStateType) => state.app.currentPage)
    // const params: ParamsType = useParams();
    const theme = useTheme();
    const dispatch = useDispatch()

    const [activeStep, setActiveStep] = React.useState(currentPage - 1);
    const maxSteps = 35;

    useEffect(() => {
        setActiveStep(currentPage - 1)
    }, [currentPage])


    const handleNext = () => {
        debugger
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        let headerUrl = getHeaderParameterUrl(activeStep)
        let Url = `check${activeStep + 2}`
        props.LinkToCheck(headerUrl, Url, activeStep)
        dispatch(setCurrentPageAC(activeStep + 2))
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep);
        let headerUrl = getHeaderParameterUrl(activeStep - 2)
        let Url = `check${activeStep}`
        props.LinkToCheck(headerUrl, Url, activeStep)
        dispatch(setCurrentPageAC(activeStep))
    };

    return (
        <Container sx={{display: 'flex', direction: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Box

                sx={{maxWidth: 400, width: '100%'}}>
                {/*sx={{flexGrow: 2, display: {xs: 'none', md: 'flex'}, padding:2,maxWidth: 400,width:'100%'}}>*/}


                <MobileStepper
                    sx={{
                        backgroundColor: '#F0F1F3',
                        color: '#9c27b0',
                        flexGrow: 2,
                        display: {xs: 'flex', md: 'none'},
                        marginTop: '10px'
                    }}

                    variant="text"
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="large"
                            color='secondary'
                            variant="outlined"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            Next
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft/>
                            ) : (
                                <KeyboardArrowRight/>
                            )}
                        </Button>
                    }
                    backButton={
                        <Button size="large"
                                onClick={handleBack}
                                color='secondary'
                                variant="outlined"
                                disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight/>
                            ) : (
                                <KeyboardArrowLeft/>
                            )}
                            Back
                        </Button>
                    }
                />
            </Box>
        </Container>
    )
}


export default memo(Stepper)