import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useContext } from 'react';
import { AzilContext } from '../context/AzilContext';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';

const IMAGES_URL = "http://localhost:6868/";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    media: {
        height: 140,
    },
    gridList: {
        width: 700,
        padding: 10
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    paper: {
        height: 140,
        width: 100,
    },
    card: {
        height: 320,
        width: 250
    },
    appContainer: {
        marginTop: 100,
    }
}));

const Home = () => {
    const { animals } = useContext(AzilContext);
    const classes = useStyles();
    const history = useHistory();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container className={classes.appContainer} maxWidth="md">
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    {animals.map((tile) => (
                        <Grid key={tile.id} item onClick={() => history.push(`/${tile.id}/animal`)}>
                            <CardActionArea>
                        <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={IMAGES_URL + "img/" + tile.id}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            
                        </Card>
                        </CardActionArea>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            
        </Grid>
            </Container>
        </React.Fragment>
        
    );
}

export default Home;