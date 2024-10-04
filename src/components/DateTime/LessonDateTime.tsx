// import { TextField, Stack } from "@mui/material";
import { Stack } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { useState } from "react";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const LessonDateTime = () => {
    const [dateValue, setDateValue] = useState<Dayjs | null>(null);
    const [timeValue, setTimeValue] = useState<Dayjs | null>(null);

    return (
        <Stack sx={{ padding: "5rem" }} spacing={2}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    value={dateValue}
                    label="Tarih"
                    onChange={(newValue) => setDateValue(newValue)}
                    // renderInput={(params) => <TextField {...params} />}
                />
                <TimePicker
                    value={timeValue}
                    label="Saat"
                    onChange={(newValue) => setTimeValue(newValue)}
                    // renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </Stack>
    );
};
export default LessonDateTime