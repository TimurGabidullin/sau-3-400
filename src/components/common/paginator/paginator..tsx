import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

type PaginatorPropsType = {
    paginatorPageNumber:number
    LinkToCheck: (h:string,url: string , prPageNum: number) => void
}

const getHeaderPeremetrUrl=(page:number)=>{
    if (page<4) return 'head1'
    else return 'head2'
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
    console.log(e)
        let headerUrl=getHeaderPeremetrUrl(page)
        let Url=`check${page}`
        props.LinkToCheck(headerUrl,Url,page)
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