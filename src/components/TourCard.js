
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from '@mui/material';
import { Link } from 'react-router-dom';

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: 'body2'
                    },
                    style: {
                        fontSize: 11
                    }
                },
                {
                    props: {
                        variant: 'body3',
                    },
                    style: {
                        fontSize: 9
                    }
                }
            ]
        }
    }
});

export default function TourCard({tour, id}) {
    const tourInfoLink = `/${id}`;

    return (
    <Grid item xs={3}>
        <ThemeProvider theme={ theme }>
            <Link to={tourInfoLink} state={{ name: tour.name}}>
                <Paper elevation={3} >
                    <img src= {tour.image}
                    alt='tour pic?'
                    className='img'/>
                    <Box paddingX={1}>
                        <Typography variant='subtitle1' component='h2'>
                            {tour.name}
                        </Typography>
                        <Box 
                            sx={{
                                display: "flex",
                                alignItems: "center"
                            }}
                        >
                            <AccessTimeIcon sx={{ width: ".7em" }}/>
                            <Typography variant='body2' component='p' marginLeft={.5}>
                                {tour.duration} hours
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center"
                            }}
                            marginTop={"2em"}
                        >
                            <Rating readOnly
                                name='read-only' 
                                value={tour.rating}
                                precision={.5}
                                size='small'
                            />
                            <Typography variant='body2' component='p' marginLeft={".5em"}>
                                {tour.rating}
                            </Typography>
                            <Typography variant='body3' component='p' marginLeft={".5em"}>
                                ({tour.numberOfReviews})
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='h6' component='h3' marginTop={".5em"}>
                                From $ {tour.price}
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Link>
        </ThemeProvider>
    </Grid>
    );
}