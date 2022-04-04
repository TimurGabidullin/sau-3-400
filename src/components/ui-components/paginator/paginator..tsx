import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Paginator() {
    return (
        <Stack spacing={2}>
            <Pagination
                count={35}
                variant="outlined"
                color="primary"
                defaultPage={1}
                size={'large'}
                // page={10}
            />
        </Stack>
    );
}