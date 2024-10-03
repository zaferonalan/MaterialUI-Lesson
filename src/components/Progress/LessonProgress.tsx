
import { CircularProgress, LinearProgress, Stack , Divider } from "@mui/material";

const LessonProgress = () => {
  return (
    <Stack sx={{padding:"5rem"}} spacing={3}>
      <CircularProgress/>
      <CircularProgress color="error"/>
      <CircularProgress color="inherit"/>
      <CircularProgress color="success"/>
      <CircularProgress color="warning"/>
      <Divider/>
      <CircularProgress color="success" variant="determinate" value={100}/>
      <CircularProgress color="error" variant="determinate" value={100}/>
      <Divider/>
      <LinearProgress color="error"/>
      <LinearProgress color="success"/>
      <LinearProgress color="warning"/>
      <Divider/>
      <LinearProgress color="warning" variant="determinate" value={50}/>

    </Stack>
  )
}

export default LessonProgress