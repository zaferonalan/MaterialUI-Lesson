import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useState } from "react";

const LessonDialog = () => {
    const [dialogOpen, setDialogOpen] = useState(false)
    console.log(dialogOpen)
  return (
    <>
        <Button onClick={() => setDialogOpen(true)} sx={{padding:"5rem"}}>Dialog'u Aç</Button>
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
            <DialogTitle>Hangisini Seviyorsun?</DialogTitle>
            <DialogContent>
                <DialogContentText>Frontend frameworklerinden hangisini seviyorsun?</DialogContentText>
                <DialogActions>
                    <Button onClick={() => setDialogOpen(false)}>Angular</Button>
                    <Button onClick={() => setDialogOpen(false)}>React</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    </>
  )
}

export default LessonDialog