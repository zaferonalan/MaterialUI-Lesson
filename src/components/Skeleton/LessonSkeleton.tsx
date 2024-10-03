import { Skeleton, Box } from "@mui/material";
import { useState } from "react";

const LessonSkeleton = () => {
    const [loading, setLoading] = useState<boolean>(true)
  return (
    <Box sx={{padding:"2rem"}}>
        {
            loading ? (
                <Skeleton width={250} height={200} animation="wave"/>
            ):(
                <img width={250} height={200} alt="skeleton" src="https://picsum.photos/250/200" />
            )
        }
    </Box>
  )
}

export default LessonSkeleton