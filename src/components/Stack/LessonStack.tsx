import { Divider, Stack } from "@mui/material"

const LessonStack = () => {
  return (
    <Stack 
        direction={{xs:"column", sm:"row", md:"row-reverse"}} 
        justifyContent="center" 
        alignItems="center" 
        marginTop={4} 
        spacing={{xs:4, sm:2, md:4}}
        divider={<Divider flexItem orientation="vertical" />}
    >
        <div>Item1</div>
        <div>Item2</div>
        <div>Item3</div>
    </Stack>
  )
}

export default LessonStack