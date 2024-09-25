import { AppBar, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from "@mui/material"
import AppsIcon from '@mui/icons-material/Apps';
import { useState,MouseEvent } from "react";

const LessonAppBar = () => {
    const [achor, setAchor] = useState<null | HTMLElement>(null)

    const openControl = Boolean(achor)
    console.log(openControl)

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAchor(event.currentTarget)
        console.log(event.currentTarget)
    }

    const handleClose = () => {
        setAchor(null)
    }

  return (
    <AppBar>
        <Toolbar>
            <IconButton>
                <AppsIcon/>
            </IconButton>
            <Typography variant="h5" component="div" sx={{marginRight:"auto"}}>
                Header Örneği
            </Typography>
            <Stack direction="row">
                <Button sx={{color:"white"}}>Anasayfa</Button>
                <Button sx={{color:"white"}}>Hakkımızda</Button>
                <Button sx={{color:"white"}}>İletişim</Button>
                <Button sx={{color:"white"}} onClick={handleClick}>Ürünler</Button>
            </Stack>
            <Menu anchorEl={achor} open={openControl} onClose={handleClose} >
                <MenuItem onClick={handleClose}>Kitaplar</MenuItem>
                <MenuItem onClick={handleClose}>Defterler</MenuItem>
            </Menu>
        </Toolbar>
    </AppBar>
  )
}

export default LessonAppBar