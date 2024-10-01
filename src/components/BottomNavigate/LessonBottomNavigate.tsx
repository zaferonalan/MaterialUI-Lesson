import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useState } from 'react';

const LessonBottomNavigate = () => {
    const [value, setValue] = useState<number>(0)
    console.log(value)
  return (
    <BottomNavigation showLabels 
        sx={{width:"100%", 
            position:"absolute", 
            bottom:0}}
        value={value}
        onChange={(event,newValue)=> {
            setValue(newValue)
        }}
    >
        <BottomNavigationAction icon={<RestoreIcon/>} label="Öncekiler"/>
        <BottomNavigationAction icon={<FavoriteIcon/>} label="Sevdiklerim"/>
        <BottomNavigationAction icon={<LocationOnIcon/>} label="Konum"/>
    </BottomNavigation>
  )
}

export default LessonBottomNavigate