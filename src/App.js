
import './App.css';
import TourCard from './components/TourCard';
import { Container, Grid } from '@mui/material';

function App() {
  return (
    <div className="App" data-testid="app-div">
      <Container>
        <Grid container spacing={5}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
