import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { AzilContext } from '../../context/AzilContext';
import { useHistory } from 'react-router';

const LOGIN_URL = "http://localhost:6868/login";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '20px'
    },
    button: {
        color: 'white',
        backgroundColor: '#360606',
        margin: theme.spacing(3, 0, 2),
        '&:hover': {
            color: "grey",
            backgroundColor: '#360606', 
        },
    },
    paper: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '2px solid gray',
        padding: '20px',
        borderRadius: '15px'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    
}));

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const classes = useStyles();
    const { setRole, setUser, setLoggedIn } = useContext(AzilContext);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = new FormData();
        data.append("username", username);
        data.append("password", password);
        axios.post(LOGIN_URL, data)
            .then((response) => {
                localStorage.setItem('token', response.data.user.token)
                localStorage.setItem('role', response.data.user.role)
                setLoggedIn(true);
                setRole(response.data.user.role);
                setUser(response.data.user.user);
                history.push('/');
                window.location.reload(true);
            })
            .catch((response) => alert("Username or password are not correct!"));
    }

    return (
        <Container component="main" maxWidth="xs" className={classes.container}>
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSubmit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        
                        <Grid item>
                            <Link href="/signup" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default Login;