import {ChecksType} from "../redux/checksReducer";
import {ReportType} from "../redux/reportReducer";


export const saveChecksState = (checksReducer:ChecksType,numberOfPlane:string) => {
    try {
        const checksState = JSON.stringify(checksReducer);
        localStorage.setItem(`checks${numberOfPlane}`, checksState);
    } catch (err) {
        // Ignore write errors.
    }
};

export const loadChecksState = (numberOfPlane:string) => {
    try {
        // debugger
        let checksState = localStorage.getItem('checks'+numberOfPlane);
        if (checksState === null) {
            return undefined;
        }
        return JSON.parse(checksState);

    } catch (err) {
        return undefined;
    }
};

//-------------------Report----------------------------

export const saveReportState = (reportReducer:ReportType,numberOfPlane:string) => {
    try {
        const reportState = JSON.stringify(reportReducer);
        localStorage.setItem('report'+numberOfPlane, reportState);
    } catch (err) {
        // Ignore write errors.
    }
};

export const loadReportState = (numberOfPlane:string) => {
    try {
        const reportState = localStorage.getItem(`report${numberOfPlane}`);
        if (reportState === null) {
            return undefined;
        }
        return JSON.parse(reportState);
    } catch (err) {
        return undefined;
    }
};