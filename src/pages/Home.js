
import TourCard from '../components/TourCard';
import { Container, Grid, Typography } from '@mui/material';
import cities from "../data.json";

const Home = () => (
    <div className="App" data-testid="app-div">
      
      <Container sx={{ marginY: "3rem"}}>
            {cities.map((city) => (
            <div key={city.id}>
                <Typography
                variant='h4'
                component='h2'
                marginTop={"3rem"}
                marginBottom={"2rem"}
                >
                Top {city.name} Tours
                </Typography>

                <Grid container spacing={"2rem"}>
                {city.tours.map((tour, index) => (
                    <TourCard key={index} tour={tour} id={index}/>
                ))};
                </Grid>
            </div>
            ))};
        
        </Container>
    </div>
);

export default Home;