import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const URL = "http://localhost:6868/";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '2px solid #360606',
        padding: '20px',
        borderRadius: '15px'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    textField: {
        "&$focused": {
            borderColor: "#360606"
        },
        focused: {}
    }

}));

export default function RegisterAnimal  () {
    const [category, setCategory] = useState("");
    const [race, setRace] = useState("");
    const [age, setAge] = useState(1);
    const [image, setImage] = useState(null);
    const [health, setHealth] = useState("");
    
    const classes = useStyles();

    const handleSubmit = (e) => {
        let data = new FormData();
        data.append("category", category);
        data.append("race", race);
        data.append("age", age);
        data.append("health", health);
        data.append("image", image);
        
        
        axios.post(URL + 'animal', data)
            .then()
            .catch(err => console.log(err));
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5" color={"#360606"}>
                    Sign up
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="category"
                                label="Dog/cat"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                autoComplete="dog"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="race"
                                label="Race"
                                value={race}
                                onChange={(e) => setRace(e.target.value)}
                                autoComplete="race"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="age"
                                label="Age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                autoComplete="age"
                                type="number"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="health"
                                label="Health status"
                                value={health}
                                onChange={(e) => setHealth(e.target.value)}
                                autoComplete="health"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                component="label"
                            >
                                Upload File
                                <input
                                    type="file"
                                    onChange={(e) => setImage(e.target.files[0])}
                                    accept="image/*"
                                />
                            </Button>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
