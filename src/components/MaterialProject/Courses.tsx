import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface CourseProps {
    title: string,
    description: string,
    image: string
}

const Courses:React.FC<CourseProps> = ({title, description, image}) => {
  return (
    <Card>
        <CardMedia
            component="img"
            image={image}
            alt={title}
        />
        <CardContent sx={{marginTop:"2px"}}>
            <Typography component="div" variant='h5' align='center'>{title}</Typography>
            <Typography sx={{marginTop:"1rem"}} variant='body2'>{description}</Typography>
        </CardContent>
        <CardActions>
            <Button variant='outlined'>Satın Al</Button>
        </CardActions>
    </Card>
  )
}

export default Courses