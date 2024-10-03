import { Snackbar, Button, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from "react";

const LessonSnackbar = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false)

    const handleClick = () => {
        setOpenSnackbar(true)
    }

    const handleClose = () => {
        setOpenSnackbar(false)
    }

    const action = (
        <React.Fragment>
            <Button onClick={handleClose}>Geri Al</Button>
            <IconButton onClick={handleClose}>
                <CloseIcon/>
            </IconButton>
        </React.Fragment>
    ) 
        

  return (
    <div>
        <Button onClick={handleClick} >Snackbarı Aç</Button>
        <Snackbar
            open={openSnackbar}
            message="Hata mesajı aldınız"
            action={action}
            autoHideDuration={2000}
            onClose={handleClose}
        />
    </div>
  )
}

export default LessonSnackbar