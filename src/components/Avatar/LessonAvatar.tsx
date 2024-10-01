import { Avatar, AvatarGroup, Stack } from "@mui/material"


const LessonAvatar = () => {
  return (
    <Stack direction="row">
        <AvatarGroup sx={{gap:2}}>
            <Avatar src="https://randomuser.me/api/portraits/women/56.jpg"/>
            <Avatar src="https://randomuser.me/api/portraits/men/56.jpg"/>
        </AvatarGroup>
        <AvatarGroup sx={{gap:2}}>
            <Avatar variant="rounded" sx={{width:50,bgcolor:"success.light"}}>Zafer</Avatar>
            <Avatar variant="square" sx={{width:50, bgcolor:"primary.dark"}}>Günay</Avatar>
        </AvatarGroup>
        <AvatarGroup sx={{marginLeft:10,gap:2}} max={4}>
            <Avatar src="https://randomuser.me/api/portraits/women/51.jpg"/>
            <Avatar src="https://randomuser.me/api/portraits/women/52.jpg"/>
            <Avatar src="https://randomuser.me/api/portraits/women/53.jpg"/>
            <Avatar src="https://randomuser.me/api/portraits/men/51.jpg"/>
            <Avatar src="https://randomuser.me/api/portraits/men/52.jpg"/>
            <Avatar src="https://randomuser.me/api/portraits/men/53.jpg"/>
        </AvatarGroup>
    </Stack>
  )
}

export default LessonAvatar