import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useCallback} from "react";

type PaginatorPropsType = {
    paginatorPageNumber:number
    LinkToCheck: (h:string,url: string , prPageNum: number) => void
}

//useMemo надо внедрить
const getHeaderParameterUrl=(page:number)=>{
    if (page<4) return 'head1'
    else return 'head2'
}

export default function Paginator(props:PaginatorPropsType) {

    const onChangeHandler=useCallback((e: React.ChangeEvent<unknown>,page:number) => {
        let headerUrl=getHeaderParameterUrl(page)
        let Url=`check${page}`
        props.LinkToCheck(headerUrl,Url,page)
    },[])

    return (
        <Stack
            sx={{padding: 2}}

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
                page={props.paginatorPageNumber}
                onChange={onChangeHandler}
            />
        </Stack>
    );
}