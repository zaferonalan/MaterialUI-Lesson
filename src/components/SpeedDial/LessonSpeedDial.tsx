import FileCopyIcon from '@mui/icons-material/FileCopy';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';

const LessonSpeedDial = () => {
  return (
    <SpeedDial ariaLabel='Navigations' icon={<SpeedDialIcon openIcon={<EditIcon/>}/>}>
        <SpeedDialAction icon={<PrintIcon/>} tooltipTitle="Prit" tooltipOpen/>
        <SpeedDialAction icon={<FileCopyIcon/>} tooltipTitle="Copy" tooltipOpen/>
        <SpeedDialAction icon={<ShareIcon/>} tooltipTitle="Share" tooltipOpen/>
    </SpeedDial>
  )
}

export default LessonSpeedDial