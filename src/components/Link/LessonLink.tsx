import { Box, Link } from "@mui/material"

const LessonLink = () => {
  return (
    <Box sx={{display:"flex" ,flexDirection:"column", gap:2}}>
      <Link href="https://www.google.com.tr/">Web adresi</Link>
      <Link href="https://www.google.com.tr/" color="error" >Web adresi</Link>
      <Link href="https://www.google.com.tr/" underline="none" >Web adresi</Link>
      <Link href="https://www.google.com.tr/" underline="hover" >Web adresi</Link>
      <Link href="https://www.google.com.tr/" color="success" variant="h3">Web adresi</Link>
      <Link href="https://www.google.com.tr/" onClick={() => (console.log("butona basıldı"))} component="button">Web adresi</Link>
    </Box>
  )
}

export default LessonLink