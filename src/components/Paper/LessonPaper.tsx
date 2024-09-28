import { Box, Paper } from "@mui/material"

const LessonPaper = () => {
  return (
    <Box sx={{display:"flex", gap:2}}>
      <Paper sx={{width:100, height:100}} />
      <Paper sx={{width:100, height:100}} elevation={0} />
      <Paper sx={{width:100, height:100}} elevation={1} />
      <Paper sx={{width:100, height:100}} elevation={2} />
      <Paper sx={{width:100, height:100}} elevation={3} />
      <Paper sx={{width:100, height:100}} elevation={3} variant="elevation" />
      <Paper sx={{width:100, height:100}} elevation={3} variant="outlined" />
      <Paper sx={{width:100, height:100}} elevation={3} variant="outlined" square />
    </Box>
  )
}

export default LessonPaper