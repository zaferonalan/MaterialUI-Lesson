import { Badge, Stack } from "@mui/material"
import EmailIcon from '@mui/icons-material/Email';


const LessonBadge = () => {
  return (
    <Stack direction="row" spacing={6} marginTop={2}>
      <Badge badgeContent={5} color="error">
        <EmailIcon/>
      </Badge>
      <Badge badgeContent={50} max={40} color="error">
        <EmailIcon/>
      </Badge>
      <Badge badgeContent={50} max={40} color="error" anchorOrigin={{vertical:"bottom", horizontal:"right" } }>
        <EmailIcon/>
      </Badge>
      <Badge badgeContent={50} max={40} color="error" anchorOrigin={{vertical:"bottom", horizontal:"left" } }>
        <EmailIcon/>
      </Badge>
    </Stack>
  )
}

export default LessonBadge