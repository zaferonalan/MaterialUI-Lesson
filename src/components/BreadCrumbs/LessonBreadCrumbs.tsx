import { Box, Breadcrumbs, Link } from "@mui/material"

const LessonBreadCrumbs = () => {
  return (
    <Box>
        <Breadcrumbs>
            <Link href="/" underline="hover">Anasayfa</Link>
            <Link href="/" underline="hover">Blog</Link>
            <Link underline="none">Zafer</Link>
        </Breadcrumbs>
        <Breadcrumbs separator=">">
            <Link href="/" underline="hover">Anasayfa</Link>
            <Link href="/" underline="hover">Blog</Link>
            <Link underline="none">Zafer</Link>
        </Breadcrumbs>
        <Breadcrumbs separator=">" maxItems={2}>
            <Link href="/" underline="hover">Anasayfa</Link>
            <Link href="/" underline="hover">Blog</Link>
            <Link href="/" underline="hover">Blog</Link>
            <Link href="/" underline="hover">Blog</Link>
            <Link underline="none">Zafer</Link>
        </Breadcrumbs>
    </Box>
  )
}

export default LessonBreadCrumbs