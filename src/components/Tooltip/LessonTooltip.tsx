
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, IconButton, Tooltip } from '@mui/material';

const LessonToolTip = () => {
  return (
    <Box sx={{padding:"5rem"}}>
        <Tooltip title="Sil" placement='top'>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </Tooltip>
        <Tooltip title="Sil" placement='bottom'>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </Tooltip>
        <Tooltip title="Sil" placement='bottom-start'>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </Tooltip>
    </Box>
  )
}

export default LessonToolTip