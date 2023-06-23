
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Rating from '@mui/material/Rating';

export default function TourCard() {
    return (
    <Grid item xs={3}>
        <Paper elevation={3} >
            <img src='https://www.niagarafallsstatepark.com/~/media/parks/niagara-falls/niagara-falls-state-park/photos-and-videos/photo-gallery-8.jpg'
            alt='Niagara?'
            className='img'/>
            <Box paddingX={1}>
                <Typography variant='subtitle1' component='h2'>
                    Imerse into the Falls
                </Typography>
                <Box 
                    sx={{
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    <AccessTimeIcon sx={{ width: ".7em" }}/>
                    <Typography variant='body2' component='p' marginLeft={.5}>
                        5 hours
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
                        value={4.5}
                        precision={.5}
                        size='small'
                    />
                    <Typography variant='body2' component='p' marginLeft={".5em"}>
                        4.5
                    </Typography>
                    <Typography variant='body3' component='p' marginLeft={".5em"}>
                        (665 views)
                    </Typography>
                </Box>
                <Box>
                    <Typography variant='h6' component='h3' marginTop={".5em"}>
                        From $ 150
                    </Typography>
                </Box>
            </Box>
        </Paper>
    </Grid>
    );
}