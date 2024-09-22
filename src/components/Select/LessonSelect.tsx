import { Box, MenuItem, TextField } from "@mui/material"
import { useState } from "react"

const LessonSelect = () => {
    const [country, setCountry] = useState<string>("")
    console.log(country)
  return (
    <Box width="250px">
        <TextField onChange={(e) => setCountry(e.target.value)} value={country} label="Ülke Seçiniz" select fullWidth>
            <MenuItem value="TR">Türkiye</MenuItem>
            <MenuItem value="USA">Amerika</MenuItem>
            <MenuItem value="FR">Fransa</MenuItem>
        </TextField>
    </Box>
  )
}

export default LessonSelect