import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { SyntheticEvent, useState } from "react";

const LessonAccordion = () => {
    const [expanded, setExpanded] = useState<boolean | string>(false)

    const handleChange = (panel:string) => (event:SyntheticEvent, isExpanded:boolean) => {
        console.log(isExpanded)
        setExpanded(isExpanded ? panel : false)
    }

  return (
    <div>
        <div style={{width:"300px", alignItems:"center"}}>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>} >İlk Bölüm</AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Quam aut quod fugit assumenda possimus error adipisci? 
                    Sit inventore impedit perspiciatis dolorem nostrum placeat. 
                    Ratione rerum dolorem, cumque enim maxime doloribus.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>} >İkinci Bölüm</AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Quam aut quod fugit assumenda possimus error adipisci? 
                    Sit inventore impedit perspiciatis dolorem nostrum placeat. 
                    Ratione rerum dolorem, cumque enim maxime doloribus.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>} >Üçüncü Bölüm</AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Quam aut quod fugit assumenda possimus error adipisci? 
                    Sit inventore impedit perspiciatis dolorem nostrum placeat. 
                    Ratione rerum dolorem, cumque enim maxime doloribus.
                </AccordionDetails>
            </Accordion>
        </div>
        <div style={{marginTop:"5rem", width:"300px"}}>
            <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>} >İlk Bölüm</AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Cupiditate aperiam, laborum provident reprehenderit quas veritatis fugit totam nam, 
                    voluptatum officiis vero quidem expedita eveniet dolorum cumque nobis cum esse iste?
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>} >İkinci Bölüm</AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Cupiditate aperiam, laborum provident reprehenderit quas veritatis fugit totam nam, 
                    voluptatum officiis vero quidem expedita eveniet dolorum cumque nobis cum esse iste?
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>} >Üçüncü Bölüm</AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Cupiditate aperiam, laborum provident reprehenderit quas veritatis fugit totam nam, 
                    voluptatum officiis vero quidem expedita eveniet dolorum cumque nobis cum esse iste?
                </AccordionDetails>
            </Accordion>
        </div>
    </div>
  )
}

export default LessonAccordion