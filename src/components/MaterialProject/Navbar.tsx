import { AppBar, Container, Grid2, Toolbar } from "@mui/material"
import Courses from "./Courses"
import Angular from "../../images/angular.jpg";
import Boostrap from "../../images/bootstrap5.png";
import Csharp from "../../images/ccsharp.png";
import Kompleweb  from "../../images/kompleweb.jpg";

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar sx={{fontSize:"30px", fontFamily:"initial"}}>Kart Projesi</Toolbar>
        </AppBar>
        <Container maxWidth="lg">
            <Grid2 container spacing={2} sx={{marginTop:10}}>
                <Grid2 size={{xs:12, md:6, lg:3}}>
                   <Courses
                        title="Angular"
                        image={Angular}
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                     Dolorem minus animi nisi rerum odit aspernatur? Aut veritatis harum unde quae, 
                                     exercitationem ipsam culpa id inventore nostrum enim nulla accusantium distinctio!"
                    />
                </Grid2>
                <Grid2 size={{xs:12, md:6, lg:3}}>
                    <Courses 
                        title="Boostrap"
                        image={Boostrap}
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                     Dolorem minus animi nisi rerum odit aspernatur? Aut veritatis harum unde quae, 
                                     exercitationem ipsam culpa id inventore nostrum enim nulla accusantium distinctio!"
                    />
                </Grid2>
                <Grid2 size={{xs:12, md:6, lg:3}}>
                    <Courses
                        title="Csharp"
                        image={Csharp}
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                     Dolorem minus animi nisi rerum odit aspernatur? Aut veritatis harum unde quae, 
                                     exercitationem ipsam culpa id inventore nostrum enim nulla accusantium distinctio!"
                    />
                </Grid2>
                <Grid2 size={{xs:12, md:6, lg:3}}>
                    <Courses
                        title="Kompleweb"
                        image={Kompleweb}
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                     Dolorem minus animi nisi rerum odit aspernatur? Aut veritatis harum unde quae, 
                                     exercitationem ipsam culpa id inventore nostrum enim nulla accusantium distinctio!"
                    />
                </Grid2>
            </Grid2>
        </Container>
        
    </div>
  )
}

export default Navbar