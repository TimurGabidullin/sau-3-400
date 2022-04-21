import {AppStateType} from "../redux/store";

import avatar from '../components/home/Home'



export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state:AppStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        // Ignore write errors.
    }
};

export const saveChecksState = (state:AppStateType) => {
    try {
        debugger
        const serializedState = JSON.stringify(state.checks);
        localStorage.setItem(`checksState${state.app.numberOfPlane}`, serializedState);
    } catch (err) {
        // Ignore write errors.
    }
};

export const loadChecksState = (numberOfPlane:string) => {
    try {
        debugger
        const serializedState = localStorage.getItem('checksState'+numberOfPlane);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};


//-------------------Report----------------------------

export const saveReportState = (state:AppStateType) => {
    try {
        const serializedState = JSON.stringify(state.report);
        localStorage.setItem('reportState', serializedState);
    } catch (err) {
        // Ignore write errors.
    }
};

export const loadReportState = (numberOfPlane:string) => {
    try {
        const serializedState = localStorage.getItem(`reportState${numberOfPlane}`);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};