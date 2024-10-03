import { Alert, AlertTitle, Stack } from "@mui/material"


const LessonAlert = () => {
  return (
    <Stack spacing={2}>
        <Alert >LessonAlert</Alert>
        <Alert severity="error">
           <AlertTitle>Error</AlertTitle>
           lessonAlert
        </Alert>
        <Alert severity="info">
            <AlertTitle>Info</AlertTitle>
            LessonAlert
        </Alert>
        <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            LessonAlert
        </Alert>
        <Alert severity="warning">
            <AlertTitle>Wartning</AlertTitle>
            LessonAlert
        </Alert>
    </Stack>
  )
}

export default LessonAlert