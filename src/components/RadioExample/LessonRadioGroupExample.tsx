import { Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from "@mui/material"
import { useState } from "react"


const LessonRadioGroupExample = () => {
    const [value, setValue] = useState<string>("")
    const [helperText, setHelperText] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const handleChangeRadio = (event:React.ChangeEvent<HTMLInputElement>) => {
        console.log(setValue(event.target.value))
    }

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (value === "3") {
            setHelperText("Yanlış Cevap")
            setError(true)
        }
        else if (value === "4") {
            setHelperText("Doğru Cevap")
            setError(false)
        }
        else if (value === "5") {
            setHelperText("Yanlış Cevap")
            setError(true)
        }
        else{
            setHelperText("Seçim yapınız")
            setError(true)
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <FormControl error={error}>
            <FormLabel>2 + 2 Toplamı kaçtır?</FormLabel>
            <RadioGroup onChange={handleChangeRadio}>
                <FormControlLabel value="3" label="3" control={<Radio/>}/>
                <FormControlLabel value="4" label="4" control={<Radio/>}/>
                <FormControlLabel value="5" label="5" control={<Radio/>}/>
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
            <Button type="submit" variant="outlined">Gönder</Button>
        </FormControl>
    </form>
  )
}

export default LessonRadioGroupExample