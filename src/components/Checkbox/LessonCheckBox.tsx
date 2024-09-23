import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material'
import { ChangeEvent, useState } from 'react'

const LessonCheckBox = () => {
    const [isAccepted, setIsAccept] = useState<boolean>(false)
    const [knowlegde, setKnowlegde] = useState<string[]>([])
    // console.log(isAccepted)

    const handleKnowlegdeChange = (e:ChangeEvent<HTMLInputElement>) => {
        const Index = knowlegde.indexOf(e.target.value)
        if (Index === -1) {
            setKnowlegde([...knowlegde, e.target.value] )
        }
        else{
            setKnowlegde(knowlegde.filter((item) => item !== e.target.value))
        }
    }
    console.log(knowlegde)
  return (
    <Box>
        <Box sx={{display:"flex", justifyContent:"center"}}>
            <FormControl>
                <FormLabel>Eğitim Durumu</FormLabel>
                <FormGroup row>
                    <FormControlLabel  label="Lise" control={<Checkbox/>}/>
                    <FormControlLabel label="Üniversite" control={<Checkbox defaultChecked/>}/>
                    <FormControlLabel disabled label="Orta Okul" control={<Checkbox/>}/>
                </FormGroup>
            </FormControl>
        </Box>
        <Box sx={{display:"flex", justifyContent:"center", marginTop:"3rem"}}>
            <FormControl>
                <FormLabel>Kullanım Koşulları</FormLabel>
                <FormGroup row>
                    <FormControlLabel label="Kullanım Koşullarını onaylıyorum" 
                        control={
                                <Checkbox
                                    onChange={(e) => setIsAccept(e.target.checked)}
                                />
                            } />
                </FormGroup>
            </FormControl>
        </Box>
        <Box sx={{display:"flex", justifyContent:"center", marginTop:"5rem"}}>
            <FormControl>
                <FormLabel>Frontend'de hangilerini biliyorsunuz?</FormLabel>
                <FormGroup row>
                    <FormControlLabel value="react" label="React" 
                        control={
                                <Checkbox
                                    onChange={handleKnowlegdeChange}
                                />
                            } />
                    <FormControlLabel value="angular" label="Anguler" 
                        control={
                                <Checkbox
                                    onChange={handleKnowlegdeChange}
                                />
                            } />
                    <FormControlLabel value="vue" label="Vue" 
                        control={
                                <Checkbox
                                    onChange={handleKnowlegdeChange}
                                />
                            } />
                </FormGroup>
            </FormControl>
        </Box>
    </Box>
  )
}

export default LessonCheckBox