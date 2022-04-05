import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

type PaginatorPropsType = {
    paginatorPageNumber:number
    LinkToCheck: (url: string , prPageNum: number) => void
}






export default function Paginator(props:PaginatorPropsType) {
    const params = useParams();
    // console.log(params)


    const navigate = useNavigate();

const[page,setPage]=useState(1)




    useEffect(()=>{

        let Url=params.page

// alert("ura")
   //     @ts-ignore
   //      props.LinkToCheck(Url,page)

    },[params])





    const onChangeHandler=(e: React.ChangeEvent<unknown>,page:number) => {
        let Url=`check${page}`
        props.LinkToCheck(Url,page)
        setPage(page)
    }




    return (
        <Stack
            sx={{padding: 2}}

            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Pagination

                count={35}
                variant="outlined"
                color="primary"
                defaultPage={1}
                size={'large'}
                page={props.paginatorPageNumber}
                onChange={onChangeHandler}
            />
        </Stack>
    );
}