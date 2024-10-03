import { LoadingButton } from "@mui/lab"
import { Stack } from "@mui/material"
import { useState } from "react"

// npm install @mui/lab

const LessonLoadingButton = () => {
    const [value, setValue] = useState<boolean>(false)
  return (
    <Stack direction="row" spacing={2}>
        <LoadingButton loading>Kaydet</LoadingButton>
        <LoadingButton loading={false} variant="outlined">Kaydet</LoadingButton>
        <LoadingButton loading={value} onClick={() => setValue(true)} >Kaydet</LoadingButton>

    </Stack>
  )
}

export default LessonLoadingButton