// import { TextField, Stack } from "@mui/material";
import { Box, Stack, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { Dayjs } from "dayjs";
import { useState } from "react";
// import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateRange } from "@mui/lab";

// npm install @mui/x-date-pickers-pro

const LessonDateRange = () => {
  const [value, setValue] = useState<DateRange<Dayjs>>([null, null]);
  return (
    <Stack sx={{ padding: "5rem" }} spacing={2}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateRangePicker
                    value={value}
                    label="Time"
                    onChange={(newValue) => { setValue(newValue)}}
                    // renderInput={(params) => <TextField {...params} />}
                    slotProps={(startProp, endProps) => (
                      <>
                        <TextField {...startProp}/>
                        <Box sx={{mx:2}}>e kadar</Box>
                        <TextField {...endProps}/>
                      </>
                    )}
                />
            </LocalizationProvider>
        </Stack>
  )
}

export default LessonDateRange