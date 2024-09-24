import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

const LessonCard = () => {
  return (
    <Card sx={{width:"300px"}}>
        <CardMedia height={200} component="img" image="https://picsum.photos/200"/>
        <CardContent>
            <Typography variant="h5" component="h1">Başlığım</Typography>
            <Typography variant="body2" component="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo maxime nihil explicabo ullam rem a aliquid repellat, quia soluta consequatur, pariatur illo ut? Molestias obcaecati esse voluptatum consequuntur itaque!</Typography>
        </CardContent>
        <CardActions>
            <Button variant="outlined" color="error">Temizle</Button>
            <Button variant="contained">Kaydet</Button>
        </CardActions>
    </Card>
  )
}

export default LessonCard