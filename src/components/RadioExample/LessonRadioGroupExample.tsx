import { Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from "@mui/material"
import { ChangeEvent, FormEvent, useState } from "react"



const LessonRadioGroupExample = () => {
    const [value, setValue] = useState<string>("")
    const [helper, setHelper] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (value === "3") {
            setHelper("Yanlış cevap")
            setError(true)
        }
        else if (value === "4") {
            setHelper("Tebrikler doğru bildiniz")
            setError(false)
        }
        else if (value === "5") {
            setHelper("Yanlış cevap")
            setError(true)
        }
        else{
            setHelper("Lütfen seçim yapınız")
            setError(true)
        }
    }

    const handelChangeRadio = (event:ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

  return (
    <form onSubmit={handleSubmit}>
        <FormControl error={error}>
            <FormLabel>2 + 2 işleminin Sonucu Kaçtır?</FormLabel>
            <RadioGroup onChange={handelChangeRadio}>
                <FormControlLabel value="3" label="3" control={<Radio/>}/>
                <FormControlLabel value="4" label="4" control={<Radio/>}/>
                <FormControlLabel value="5" label="5" control={<Radio/>}/>
            </RadioGroup>
            <FormHelperText>{helper}</FormHelperText>
            <Button type="submit" variant="outlined">Gönder</Button>
        </FormControl>
    </form>
  )
}

export default LessonRadioGroupExample