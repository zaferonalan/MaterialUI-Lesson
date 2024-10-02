import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

const LessonList = () => {
  return (
    <Box>
      <List>
        <ListItem >
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon/>
            </ListItemIcon>
            <ListItemText primary="Inbox"/>
          </ListItemButton>
        </ListItem>
        <ListItem >
          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon/>
            </ListItemIcon>
            <ListItemText primary="Drafts"/>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider/>
      <ListItem >
          <ListItemButton>
            <ListItemText primary="Inbox"/>
          </ListItemButton>
        </ListItem>
        <ListItem >
          <ListItemButton>
            <ListItemText primary="Drafts"/>
          </ListItemButton>
        </ListItem>
        <Divider/>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon/>
            </ListItemIcon>
            <ListItemText primary="Inbox"/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding >
          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon/>
            </ListItemIcon>
            <ListItemText primary="Drafts"/>
          </ListItemButton>
        </ListItem>
    </Box>
  )
}

export default LessonList