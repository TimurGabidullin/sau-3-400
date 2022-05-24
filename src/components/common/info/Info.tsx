import React, {memo} from "react";
import {CheckType, numToFunc} from "../../../redux/checksReducer";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {useParams} from "react-router-dom";
import Typography from "@mui/material/Typography";
import {ParamsType} from "../../home/Home";
import Container from "@mui/material/Container";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import IconButton from "@mui/material/IconButton";
import AlertDialog from "../alertDialog/AlertDialog";
import styles from "./Info.module.css"


const Info = (props: any) => {

    // const indexOfTable=props
    const params: ParamsType = useParams()
    const checks = useSelector((state: AppStateType) => state.checks[params.header ? params.header : 'head1'])
    const checksReducer = useSelector((state: AppStateType) => state.checks)
    const check = checks.filter((ch: CheckType) => ch.idCheck === params.check)[0]
    const isHaveSettings = check.isHaveSettings[props.indexOfTable]
    const typeOfSubBlock = check.typesOfSubBlocks[props.indexOfTable]
    const positionOfSubBlock = check.positionOfSubBlock[props.indexOfTable]
    const resistor = check.resistors[props.indexOfTable]
    const typeOfBlock = check.typesOfBlocks[props.indexOfTable]
    const controlValues = check.controlValues
    const valuesOfErrors = check.valuesOfErrors
    const unit = check.unit

    const controlFunction = check.controlFunctions[props.indexOfTable]
    debugger


    const Pulse = require("react-reveal/Pulse")

    const [openDialogAlert, setOpenDialogAlert] = React.useState(false);

    let recomendValues = [
        controlValues[props.indexOfTable],
        controlValues[props.indexOfTable],
        controlValues[props.indexOfTable],
        controlValues[props.indexOfTable],
    ]

    let textForRecomend =
        <Typography sx={{padding: '20px 20px'}} variant="body1" component='p'>
            {recomendValues.map((value, index) =>{
             return <p>{index + 1} канал должен быть {value}±{valuesOfErrors[props.indexOfTable]}{unit}.</p>
            })}
        </Typography>


    if (params.check === 'check2' && (props.indexOfTable === 1 || props.indexOfTable === 3)) {
        recomendValues = recomendValues.map((value, index) => {
                return value * +check.valuesOfBlocks[props.indexOfTable - 1][`channel${index + 1}`]
            }
        )
        textForRecomend = <Typography sx={{padding: '20px 20px'}} variant="body1" component='p'>
            {recomendValues.map((value, index) => {
                if (value) {
                    return <p>{index + 1} канал  {value}±{valuesOfErrors[props.indexOfTable]} {unit}.</p>
                } else return <p className={styles.recomend}>Введите U<span>23/11</span> для {index + 1} канала.</p>
            })
            }
        </Typography>
    }

    if (params.check === 'check3' && (props.indexOfTable === 2 || props.indexOfTable === 3)) {
        recomendValues = recomendValues.map((value, index) => {
                return value + +checksReducer['head1'][0].valuesOfBlocks[0][`channel${index + 1}`]
            }
        )
        textForRecomend =
            <Typography sx={{padding: '20px 20px'}} variant="body1" component='p'>
                {recomendValues.map((value, index) => {
                    if (value) {
                        return <p>{index + 1} канал {value}±{valuesOfErrors[props.indexOfTable]} {unit}</p>
                    } else return <p className={styles.recomend}>Введите U<span>23/11</span> для {index + 1} канала.</p>
                })
                }
            </Typography>
    }
//-------------------------------------одинаковые функции--------------------------------------------
    if (params.check === 'check13' && (props.indexOfTable === 2 || props.indexOfTable === 5)) {
        recomendValues = recomendValues.map((value, index) => {
            return +checksReducer['head6'][0].valuesOfBlocks[props.indexOfTable-2][`channel${index + 1}`]
            }
        )
        textForRecomend = <Typography sx={{padding: '20px 20px'}} variant="body1" component='p'>
            {recomendValues.map((value, index) => {
                if (value) {
                    return <p>{index + 1} канал  {value}±{valuesOfErrors[props.indexOfTable]} {unit}.</p>
                } else return <p className={styles.recomend}>Введите U<span>20/11</span> для {index + 1} канала.</p>
            })
            }
        </Typography>
    }
    if (params.check === 'check33' && (props.indexOfTable === 2 || props.indexOfTable === 5)) {
        recomendValues = recomendValues.map((value, index) => {
                return +checksReducer['head12'][0].valuesOfBlocks[props.indexOfTable-2][`channel${index + 1}`]
            }
        )
        textForRecomend = <Typography sx={{padding: '20px 20px'}} variant="body1" component='p'>
            {recomendValues.map((value, index) => {
                if (value) {
                    return <p>{index + 1} канал  {value}±{valuesOfErrors[props.indexOfTable]} {unit}.</p>
                } else return <p className={styles.recomend}>Введите U<span>36/19</span> для {index + 1} канала.</p>
            })
            }
        </Typography>
    }

    //--------------------------------------------------------------------------------------------------


    if (params.check === 'check17' && (props.indexOfTable === 1 || props.indexOfTable === 3)) {
        recomendValues = recomendValues.map((value, index) => {
                return value*+checksReducer['head9'][1].valuesOfBlocks[props.indexOfTable-1][`channel${index + 1}`]
            }
        )
        textForRecomend = <Typography sx={{padding: '20px 20px'}} variant="body1" component='p'>
            {recomendValues.map((value, index) => {
                if (value) {
                    return <p>{index + 1} канал  {value}±{valuesOfErrors[props.indexOfTable]*
                    +checksReducer['head9'][1].valuesOfBlocks[props.indexOfTable-1][`channel${index + 1}`]} {unit}.</p>
                } else return <p className={styles.recomend}>Введите U<span>5/6</span> для {index + 1} канала.</p>
            })
            }
        </Typography>
    }

    if (params.check === 'check39' && (props.indexOfTable === 1 || props.indexOfTable === 3)) {
        recomendValues = recomendValues.map((value, index) => {
                return value*+checksReducer['head15'][1].valuesOfBlocks[props.indexOfTable-1][`channel${index + 1}`]
            }
        )
        textForRecomend = <Typography sx={{padding: '20px 20px'}} variant="body1" component='p'>
            {recomendValues.map((value, index) => {
                if (value) {
                    return <p>{index + 1} канал  {value}±{valuesOfErrors[props.indexOfTable]*
                    +checksReducer['head15'][1].valuesOfBlocks[props.indexOfTable-1][`channel${index + 1}`]} {unit}.</p>
                } else return <p className={styles.recomend}>Введите U<span>5/6</span> для {index + 1} канала.</p>
            })
            }
        </Typography>
    }
    // if (params.check === 'check39' && (props.indexOfTable === 5 || props.indexOfTable === 6)) {
    //     recomendValues = recomendValues.map((value, index) => {
    //             return value*+checksReducer['head15'][1].valuesOfBlocks[4][`channel${index + 1}`]
    //         }
    //     )
    //     textForRecomend = <Typography sx={{padding: '20px 20px'}} variant="body1" component='p'>
    //         {recomendValues.map((value, index) => {
    //             if (value) {
    //                 return <p>{index + 1} канал  {value}±{valuesOfErrors[props.indexOfTable]*
    //                 +checksReducer['head15'][1].valuesOfBlocks[4][`channel${index + 1}`]} {unit}.</p>
    //             } else return <p className={styles.recomend}>Введите U<span>39/40</span> для {index + 1} канала.</p>
    //         })
    //         }
    //     </Typography>
    // }










    if (params.check === 'check19' && (props.indexOfTable === 1 || props.indexOfTable === 3)) {
        recomendValues = recomendValues.map((value, index) => {
                return value*+checksReducer['head9'][3].valuesOfBlocks[props.indexOfTable-1][`channel${index + 1}`]
            }
        )
        textForRecomend = <Typography sx={{padding: '20px 20px'}} variant="body1" component='p'>
            {recomendValues.map((value, index) => {
                if (value) {
                    return <p>{index + 1} канал  {value}±{valuesOfErrors[props.indexOfTable]*
                    +checksReducer['head9'][3].valuesOfBlocks[props.indexOfTable-1][`channel${index + 1}`]} {unit}.</p>
                } else return <p className={styles.recomend}>Введите U<span>5/6</span> для {index + 1} канала.</p>
            })
            }
        </Typography>
    }
//------------------------------------------------------------------------------------
    if (params.check === 'check21' && (props.indexOfTable === 1 || props.indexOfTable === 3)) {
        recomendValues = recomendValues.map((value, index) => {
                let u: string = checksReducer['head9'][5].valuesOfBlocks[props.indexOfTable - 1][`channel${index + 1}`]
                if (u !== '') {
                    return value + +u
                } else return 0
            }
        )
        textForRecomend = <Typography sx={{padding: '20px 20px'}} variant="body1" component='p'>
            {recomendValues.map((value, index) => {
                if (value) {
                    return <p>{index + 1} канал  {value}±{valuesOfErrors[props.indexOfTable]} {unit}.</p>
                } else return <p className={styles.recomend}>Введите U<span>19</span> для {index + 1} канала.</p>
            })
            }
        </Typography>
    }

    if (params.check === 'check34' && (props.indexOfTable === 1 || props.indexOfTable === 3)) {
        recomendValues = recomendValues.map((value, index) => {
                let u: string = checksReducer['head13'][0].valuesOfBlocks[props.indexOfTable-1][`channel${index + 1}`]
                if (u !== '') {
                    return value + +u
                } else return 0
            }
        )
        textForRecomend = <Typography sx={{padding: '20px 20px'}} variant="body1" component='p'>
            {recomendValues.map((value, index) => {
                if (value) {
                    return <p>{index + 1} канал  {value}±{valuesOfErrors[props.indexOfTable]} {unit}.</p>
                } else return <p className={styles.recomend}>Введите U<span>19/11</span> для {index + 1} канала.</p>
            })
            }
        </Typography>
    }
//-------------------------------------------------------------------------------------------------







    if (params.check === 'check27') {

        textForRecomend = <Typography sx={{padding: '20px 20px'}} variant="body1" component='p'>
           <p> Педали не должны двигаться.</p>
        </Typography>
    }






    return (

        isHaveSettings ?
            <Pulse>
                <Typography sx={{padding: '20px 10px'}} variant="body1" component='p'>
                    Регулируйте регулировочными винтами резисторов {resistor} на субблоках
                    {typeOfSubBlock} ({positionOfSubBlock} - место установки) блоков {typeOfBlock}.
                    {controlFunction !== 0 ?
                        <IconButton color="secondary" aria-label="add an alarm">
                            <InfoOutlinedIcon onClick={() => setOpenDialogAlert(true)}/>
                        </IconButton>
                        : ''
                    }
                    <AlertDialog openDialogAlert={openDialogAlert}
                                 setOpenDialogAlert={setOpenDialogAlert}
                                 headerText="Рекомендации"
                                 mainText={textForRecomend}
                    />
                </Typography>
            </Pulse>
            : <Pulse>
                <Typography sx={{padding: '40px 20px', textAlign: 'center'}} variant="body1" component='p'>Вставка
                    не регулируется
                </Typography>
            </Pulse>
    );
}


export default memo(Info)