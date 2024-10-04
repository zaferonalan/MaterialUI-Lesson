import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineDot, TimelineContent } from "@mui/lab";

const LessonTimeLine = () => {
  return (
    <Timeline>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot/>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>Yemek Ye</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot/>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>Kod Yaz</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot/>
            </TimelineSeparator>
            <TimelineContent>Git Uyu</TimelineContent>
        </TimelineItem>
    </Timeline>
  )
}

export default LessonTimeLine