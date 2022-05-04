import * as React from 'react';
import Box from '@mui/material/Box';
import {useTheme} from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import {useCallback, useEffect} from "react";
import {useParams} from "react-router-dom";
import {ParamsType} from "../../home/Home";
import Container from "@mui/material/Container";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {setCurrentPageAC} from "../../../redux/appReducer";

type StepperPropsType = {
    paginatorPageNumber:number
    LinkToCheck: (h:string,url: string , prPageNum: number) => void
}

const getHeaderParameterUrl=(page:number)=>{
    if (page<4) return 'head1'
    else return 'head2'
}


export default function Stepper(props:StepperPropsType) {
debugger
    let currentPage=useSelector((state:AppStateType)=>state.app.currentPage)
    // const params: ParamsType = useParams();
    const theme = useTheme();
    const dispatch = useDispatch()

    const [activeStep, setActiveStep] = React.useState(currentPage-1);
    const maxSteps = 35;

    useEffect(()=>{
        setActiveStep(currentPage-1)
    },[currentPage])



    const handleNext = () => {
        debugger
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        let headerUrl=getHeaderParameterUrl(activeStep)
        let Url=`check${activeStep+2}`
        props.LinkToCheck(headerUrl,Url,activeStep)
        dispatch(setCurrentPageAC(activeStep+2))
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep );
        let headerUrl=getHeaderParameterUrl(activeStep)
        let Url=`check${activeStep}`
        props.LinkToCheck(headerUrl,Url,activeStep)
        dispatch(setCurrentPageAC(activeStep))
    };

    return (
        <Container  sx={{display:'flex',direction:'row',justifyContent:'center',alignItems:'center'}}  >
        <Box sx={{maxWidth: 400,width:'100%'}}>
            <MobileStepper
                sx={{backgroundColor: '#F0F1F3',color:'#9c27b0'}}

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
                    <Button  size="large"
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
