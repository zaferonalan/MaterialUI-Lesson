import { Box } from "@mui/material"

const LessonBox = () => {
  return (
    <Box sx={{
        backgroundColor:"primary.main", 
        color:"white", 
        width:"200px", 
        height:"100px", 
        padding:"20px", 
        "&:hover":{
            backgroundColor:"primary.dark"
            }
        }}>
        LessonBox
    </Box>
  )
}

export default LessonBox