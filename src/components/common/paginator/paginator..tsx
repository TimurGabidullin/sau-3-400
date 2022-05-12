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
    if (page > 3 && page < 15) return 'head7'

    else return 'head8'
}

const Paginator = (props: PaginatorPropsType) => {
    debugger
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
                count={35}
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