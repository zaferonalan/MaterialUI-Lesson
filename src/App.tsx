import "./App.css";
// import LessonTypography from './components/Typeography/LessonTypography'
// import LessonButton from "./components/Button/LessonButton";
// import LessonTextField from "./components/TextField/LessonTextField";
// import LessonRadioGroup from "./components/RadioGroup/LessonRadioGroup";
// import LessonRadioGroupExample from "./components/RadioExample/LessonRadioGroupExample";
// import LessonSelect from "./components/Select/LessonSelect";
// import LessonCheckBox from "./components/Checkbox/LessonCheckBox";
// import LessonAutoComplete from "./components/AutoComplete/LessonAutoComplete";
// import LessonBox from "./components/Box/LessonBox";
// import LessonStack from "./components/Stack/LessonStack";
// import LessonGrid from "./components/Grid/LessonGrid";
// import LessonCard from "./components/Card/LessonCard";
// import LessonAccordion from "./components/Accordion/LessonAccordion";
// import LessonAppBar from "./components/AppBar/LessonAppBar";
// import LessonImageList from "./components/ImageList/LessonImageList";
// import LessonPaper from "./components/Paper/LessonPaper";
// import LessonLink from "./components/Link/LessonLink";
// import LessonBreadCrumbs from "./components/BreadCrumbs/LessonBreadCrumbs";
// import LessonDrawer from "./components/Drawer/LessonDrawer";
// import LessonBadge from "./components/Badge/LessonBadge";
// import LessonSpeedDial from "./components/SpeedDial/LessonSpeedDial";
// import LessonBottomNavigate from "./components/BottomNavigate/LessonBottomNavigate";
// import LessonAvatar from "./components/Avatar/LessonAvatar";
// import LessonList from "./components/List/LessonList";
// import LessonToolTip from "./components/Tooltip/LessonToolTip";
// import LessonAlert from "./components/Alert/LessonAlert";
// import LessonDialog from "./components/Dialog/LessonDialog";
// import LessonSnackbar from "./components/Snackbar/LessonSnackbar";
// import LessonProgress from "./components/Progress/LessonProgress";
// import LessonSkeleton from "./components/Skeleton/LessonSkeleton";
// import LessonLoadingButton from "./components/LoadingButton/LessonLoadingButton";
// import LessonTable from "./components/Table/LessonTable";
// import LessonDateTime from "./components/DateTime/LessonDateTime";
// import LessonDateRange from "./components/DateRange/LessonDateRange";
// import LessonTabs from "./components/Tabs/LessonTabs";
// import LessonMasonry from "./components/Masonry/LessonMasonry";
// import LessonTimeLine from "./components/TimeLine/LessonTimeLine";
// import LessonCustomization from "./components/Customization/LessonCustomization";

import { createTheme, colors, ThemeProvider, Divider } from "@mui/material";
import Navbar from "./components/MaterialProject/Navbar";

const theme = createTheme({
  palette: {
    secondary:{
      main: colors.brown[500]
    }
  }
})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        {/* <LessonTypography/> */}
        {/* <LessonButton /> */}
        {/* <LessonTextField/> */}
        {/* <LessonRadioGroup/> */}
        {/* <LessonRadioGroupExample/> */}
        {/* <LessonSelect/> */}
        {/* <LessonCheckBox/> */}
        {/* <LessonAutoComplete/> */}
        {/* <LessonBox/> */}
        {/* <LessonStack/> */}
        {/* <LessonGrid/> */}
        {/* <LessonCard/> */}
        {/* <LessonAccordion/> */}
        {/* <LessonAppBar/> */}
        {/* <LessonImageList/> */}
        {/* <LessonPaper/> */}
        {/* <LessonLink/> */}
        {/* <LessonBreadCrumbs/> */}
        {/* <LessonDrawer/> */}
        {/* <LessonBadge/> */}
        {/* <LessonSpeedDial/> */}
        {/* <LessonBottomNavigate/> */}
        {/* <LessonAvatar/> */}
        {/* <LessonList/> */}
        {/* <LessonToolTip/> */}
        {/* <LessonAlert/> */}
        {/* <LessonDialog/> */}
        {/* <LessonSnackbar/> */}
        {/* <LessonProgress/> */}
        {/* <LessonSkeleton/> */}
        {/* <LessonLoadingButton/> */}
        {/* <LessonTable/> */}
        {/* <LessonDateTime/> */}
        {/* <LessonDateRange/> */}
        {/* <LessonTabs/> */}
        {/* <LessonMasonry/> */}
        {/* <LessonTimeLine/> */}
        {/* <LessonCustomization/> */}
        <Divider/>
        {/* Project */}
        <Navbar/>
      </>
    </ThemeProvider>
    
  );
}

export default App;
