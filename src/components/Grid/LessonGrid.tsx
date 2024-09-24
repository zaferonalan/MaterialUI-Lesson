import { Box, Grid2 } from "@mui/material"

const LessonGrid = () => {
  return (
    <Box>
        <Grid2 container>
            <Grid2 size={{xs:12, md:8}}>8 birimlik yer</Grid2>
            <Grid2 size={{xs:12, md:4}}>4 birimlik yer</Grid2>
            <Grid2 size={{xs:12, md:8}}>8 birimlik yer</Grid2>
            <Grid2 size={{xs:12, md:4}}>4 birimlik yer</Grid2>
        </Grid2>
    </Box>
  )
}

export default LessonGrid