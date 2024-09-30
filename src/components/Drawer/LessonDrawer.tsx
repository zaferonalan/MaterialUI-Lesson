
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { useState } from "react";

const LessonDrawer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <>
      <IconButton onClick={() => setIsOpen(true)} size="large">
        <MenuIcon/>
      </IconButton>
      <Drawer open={isOpen} anchor="right" onClose={() => setIsOpen(false)}>
        <Box width={250} textAlign="center">
          <Typography component="div" variant="h5">
            Panel
          </Typography>
        </Box>
      </Drawer>      
    </>
  )
}

export default LessonDrawer