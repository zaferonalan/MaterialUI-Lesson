import { ImageList, ImageListItem, ImageListItemBar, Stack } from "@mui/material"

const LessonImageList = () => {
  return (
    <Stack>
      <h1>Image List small </h1>
      <ImageList sx={{width:"500", height:"450"}} rowHeight={200} cols={4}>
        {itemData.map((item) => (
          <ImageListItem key={item.id}>
            <img srcSet={item.img} alt="" loading="lazy" />
            <ImageListItemBar title={item.title}/>
          </ImageListItem>
        ))}
      </ImageList>
      <h1>Image List </h1>
      <ImageList cols={4}>
        {itemData.map((item) => (
          <ImageListItem key={item.id}>
            <img src={item.img} alt="" loading="lazy" />
            <ImageListItemBar title={item.title}/>
          </ImageListItem>
        ))}
      </ImageList>
      <h1>Image List 2</h1>
      <ImageList cols={4} variant="masonry">
        {itemData.map((item) => (
          <ImageListItem key={item.id}>
            <img src={item.img} alt="" loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
      <h1>Image List 3</h1>
      <ImageList cols={4} variant="woven">
        {itemData.map((item) => (
          <ImageListItem key={item.id}>
            <img src={item.img} alt="" loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
      <h1>Image List 4</h1>
      <ImageList cols={4} variant="quilted">
        {itemData.map((item) => (
          <ImageListItem key={item.id}>
            <img src={item.img} alt="" loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  )
}

const itemData = [
  {
    id:1,
    img:"https://images.unsplash.com/photo-1491273289208-9340cb42e5d9?q=80&w=1836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:"Breakfast"
  },
  {
    id:2,
    img:"https://images.unsplash.com/photo-1508736793122-f516e3ba5569?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:"Burger"
  },
  {
    id:3,
    img:"https://images.unsplash.com/photo-1495862433577-132cf20d7902?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:"Coffe"
  },
  {
    id:4,
    img:"https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:"Salad"
  },
  {
    id:5,
    img:"https://images.unsplash.com/photo-1598679253544-2c97992403ea?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:"French fries"
  },
  {
    id:6,
    img:"https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:"Ice cream"
  },
  {
    id:7,
    img:"https://images.unsplash.com/photo-1705663106388-6c1c51ff5a8d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:"Baklava"
  },
  {
    id:8,
    img:"https://images.unsplash.com/photo-1639488296096-1a3e6e7cd5b2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:"Cake"
  },
  {
    id:9,
    img:"https://images.unsplash.com/photo-1491273289208-9340cb42e5d9?q=80&w=1836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:"Breakfast"
  },
  {
    id:10,
    img:"https://images.unsplash.com/photo-1508736793122-f516e3ba5569?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:"Burger"
  },
  {
    id:11,
    img:"https://images.unsplash.com/photo-1495862433577-132cf20d7902?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:"Coffe"
  },
  {
    id:12,
    img:"https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:"Salad"
  },
  {
    id:13,
    img:"https://images.unsplash.com/photo-1598679253544-2c97992403ea?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:"French fries"
  },
  {
    id:14,
    img:"https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:"Ice cream"
  },
  {
    id:15,
    img:"https://images.unsplash.com/photo-1705663106388-6c1c51ff5a8d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:"Baklava"
  },
  {
    id:16,
    img:"https://images.unsplash.com/photo-1639488296096-1a3e6e7cd5b2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:"Cake"
  },
  
]


export default LessonImageList