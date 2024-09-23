import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material'
import { useState } from 'react'

const LessonCheckBox = () => {
    const [isAccepted, setIsAccept] = useState<boolean>(false)
    console.log(isAccepted)
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
        <Box sx={{display:"flex", justifyContent:"center", marginTop:"5rem"}}>
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
    </Box>
  )
}

export default LessonCheckBox