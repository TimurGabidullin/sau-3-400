import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {memo, useCallback} from "react";
import {setCurrentPageAC} from "../../../redux/appReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";

type PaginatorPropsType = {
    paginatorPageNumber: number
    LinkToCheck: (h: string, url: string, prPageNum: number) => void
}

//useMemo надо внедрить
const getHeaderParameterUrl = (page: number) => {
    if (page < 4) return 'head1'
    if (page > 3 && page < 7) return 'head2'
    if (page > 6 && page < 10) return 'head3'
    if (page > 9 && page < 12) return 'head4'
    if (page > 11 && page < 13) return 'head5'
    if (page > 12 && page < 14) return 'head6'
    if (page > 13 && page < 15) return 'head7'
    if (page > 14 && page < 16) return 'head8'
    if (page > 15 && page < 24) return 'head9'
    if (page > 23 && page < 25) return 'head10'
    if (page > 24 && page < 33) return 'head11'
    if (page > 32 && page < 34) return 'head12'
    if (page > 33 && page < 35) return 'head13'
    if (page > 34 && page < 38) return 'head14'
    if (page > 37 && page < 45) return 'head15'


    else return 'head16'
}

const Paginator = (props: PaginatorPropsType) => {
    // debugger
    let currentPage = useSelector((state: AppStateType) => state.app.currentPage)

    const dispatch = useDispatch()

    const onChangeHandler = useCallback((e: React.ChangeEvent<unknown>, page: number) => {
        let headerUrl = getHeaderParameterUrl(page)
        let Url = `check${page}`
        props.LinkToCheck(headerUrl, Url, page)
        debugger
        dispatch(setCurrentPageAC(page))

    }, [])

    return (
        <Stack
            sx={{flexGrow: 2, display: {xs: 'none', md: 'flex'}, padding: 2}}
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Pagination
                shape="rounded"
                count={44}
                variant="outlined"
                color="secondary"
                defaultPage={1}
                size={'large'}
                page={currentPage}
                onChange={onChangeHandler}
                siblingCount={1}
            />
        </Stack>
    );
}

export default memo(Paginator)