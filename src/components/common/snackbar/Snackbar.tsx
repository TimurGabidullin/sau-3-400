import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


type SnackbarPropsType = {
    openSnackbar: boolean
    setOpenSnackbar: Function
}


export default function SimpleSnackbar(props: SnackbarPropsType) {
    // const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        props.setOpenSnackbar(true);
    };
    //
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            // props.setOpenSnackbar(false);

            return;
        }

        props.setOpenSnackbar(false);
    };

    // const action = (
    //     <React.Fragment>
    //         <Button color="secondary" size="small" onClick={handleClose}>
    //             UNDO
    //         </Button>
    //         <IconButton
    //             size="small"
    //             aria-label="close"
    //             color="inherit"
    //             onClick={handleClose}
    //         >
    //             <CloseIcon fontSize="small" />
    //         </IconButton>
    //     </React.Fragment>
    // );

    return (
        <div>
            <Button onClick={handleClick}>Open simple snackbar</Button>
            <Snackbar
                open={props.openSnackbar}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Note archived"
                // action={action}
            />
        </div>
    );
}
