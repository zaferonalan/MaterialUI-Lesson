import { Stack, TextField, InputAdornment } from "@mui/material"
import { useState } from "react"


const LessonTextField = () => {
    const [value, setValue] = useState("")
  return (
    <Stack spacing={2}>
       <Stack direction="row" spacing={2}>
            <TextField label="Ad"/>
            <TextField label="Ad" variant="filled"/>
            <TextField label="Ad" variant="outlined"/>
            <TextField label="Ad" variant="standard"/>
       </Stack>
       <Stack direction="row" spacing={2}>
            <TextField label="Ad" variant="outlined" color="error" size="small"/>
            <TextField label="Ad" variant="outlined" color="success" size="medium"/>
       </Stack>
        <Stack direction="row" spacing={2}>
            <TextField label="Şifre" type="password" variant="outlined" helperText="Lütfen Şifrenizi Giriniz"/>
        </Stack>
        <Stack direction="row" spacing={2}>
            <TextField disabled label="Şifre" variant="outlined" helperText="Lütfen Şifrenizi Giriniz"/>
            <TextField slotProps={{input:{readOnly:true}}} label="Şifre" variant="outlined" helperText="Lütfen Şifrenizi Giriniz"/>
        </Stack>
        <Stack direction="row" spacing={2}>
            <TextField label="Ad" variant="outlined" slotProps={{input:{startAdornment:(<InputAdornment position="start">TL</InputAdornment>)}}}/>
            <TextField label="Toplam" variant="outlined" slotProps={{
                input:{
                    endAdornment:(
                        <InputAdornment position="end">TL</InputAdornment>
                    )
                }
            }}/>
        </Stack>
        <Stack direction="row" spacing={2}>
            <TextField onChange={(e) => setValue(e.target.value)} value={value} variant="outlined" label="E-mail" slotProps={{input:{
                endAdornment:(<InputAdornment position="end">@gmail.com</InputAdornment>)
            }}} helperText={!value ? "Lütfen mail giriniz" : "Mail hesabını kimseyle paylaşmayınız"}/>
        </Stack>
    </Stack>
  )
}

export default LessonTextField