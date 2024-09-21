import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from "@mui/material"
import { ChangeEvent, useState } from "react"

const LessonRadioGroup = () => {
    const [value, setValue] = useState<string>("")

    console.log(value)

    // const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    //     setValue(e.target.value)
    // }
    

  return (
    <FormControl>
        <FormLabel>Maaş Beklentiniz</FormLabel>
        <RadioGroup row name="extected-salary" onChange={(e) => {setValue(e.target.value)}} value={value} >
            <FormControlLabel label="2000$" value="2000" control={<Radio/>}/>
            <FormControlLabel label="3000$" value="3000" control={<Radio/>}/>
            <FormControlLabel label="4000$" value="4000" control={<Radio/>}/>
        </RadioGroup>
        <FormHelperText>Yanlış Seçim</FormHelperText>
    </FormControl>
  )
}

export default LessonRadioGroup