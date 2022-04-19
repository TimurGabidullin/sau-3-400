import {AppStateType} from "../redux/store";


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
        const serializedState = JSON.stringify(state.checks);
        localStorage.setItem('checksState', serializedState);
    } catch (err) {
        // Ignore write errors.
    }
};

export const loadChecksState = () => {
    try {
        const serializedState = localStorage.getItem('checksState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveReportState = (state:AppStateType) => {
    try {
        const serializedState = JSON.stringify(state.report);
        localStorage.setItem('reportState', serializedState);
    } catch (err) {
        // Ignore write errors.
    }
};

export const loadReportState = () => {
    try {
        const serializedState = localStorage.getItem('reportState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};