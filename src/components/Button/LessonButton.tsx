import { Button, ButtonGroup, Stack } from "@mui/material";
import { green} from "@mui/material/colors";
import AddIcon from '@mui/icons-material/Add';

const LessonButton = () => {
  const Green = green[500]
  return (
    <Stack spacing={2}>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="text" color="primary">Mavi</Button>
        <Button variant="text" color="secondary">Mor</Button>
        <Button variant="text" color="warning">Turuncu</Button>
        <Button variant="text" color="error">Kırmızı</Button>
        <Button variant="text" color="inherit">Siyah</Button>
        <Button variant="text" color="success">Yeşil</Button>
        <Button variant="text" sx={{color: Green}}>AçıkYeşil</Button>
      </Stack>
      <Stack direction="row" spacing={2}>
      <Button variant="contained" color="primary">Mavi</Button>
        <Button variant="contained" color="secondary">Mor</Button>
        <Button variant="contained" color="warning">Turuncu</Button>
        <Button variant="contained" color="error">Kırmızı</Button>
        <Button variant="contained" color="inherit">Siyah</Button>
        <Button variant="contained" color="success">Yeşil</Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" color="secondary">Mor</Button>
        <Button variant="outlined" color="warning">Turuncu</Button>
        <Button variant="outlined" color="error">Kırmızı</Button>
        <Button variant="outlined" color="inherit">Siyah</Button>
        <Button variant="outlined" color="success">Yeşil</Button>
      </Stack>
      <Stack direction="row" spacing={2} display="block">
        <Button variant="outlined" size="small">Butonum</Button>
        <Button variant="outlined" size="medium">Butonum</Button>
        <Button variant="outlined" size="large">Butonum</Button>
      </Stack>
      <Stack direction="row" spacing={2} display="block">
        <Button variant="outlined" size="medium" startIcon={<AddIcon/>}>Ekle</Button>
        <Button variant="outlined" size="large" color="error" onClick={()=> alert("Merhaba")} endIcon={<AddIcon/>}>Ekle</Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <ButtonGroup variant="text">
          <Button color="primary">Butonum1</Button>
          <Button color="secondary">Butonum2</Button>
          <Button color="error">Butonum3</Button>
        </ButtonGroup>
        <ButtonGroup variant="contained">
          <Button color="primary">Butonum1</Button>
          <Button color="secondary">Butonum2</Button>
          <Button color="error">Butonum3</Button>
        </ButtonGroup>
        <ButtonGroup variant="outlined">
          <Button color="primary">Butonum1</Button>
          <Button color="secondary">Butonum2</Button>
          <Button color="error">Butonum3</Button>
        </ButtonGroup>
        
        <ButtonGroup variant="text" orientation="vertical">
          <Button color="primary">Butonum1</Button>
          <Button color="secondary">Butonum2</Button>
          <Button color="error">Butonum3</Button>
        </ButtonGroup>
        
      </Stack>
    </Stack>
  );
};

export default LessonButton;
