import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { AzilContext } from '../../context/AzilContext';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';


const URL = `http://localhost:6868/`;

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '20px',
        display: 'flex',
        width: '100%',
    },
    card: {
        width: '60%',
        marginLeft: '20%',
        height: 'auto',
        marginTop: '40px'
    },
    image: {
        width: '50%',
        float: 'left',
        marginRight: '10px'
    },
    cardBody: {
        
    },
    cardText: {
        marginLeft: '3%'
    },
    groupButton: {
        
    }
}));

const AdoptionList = () => {
    const [adopts, setAdopts] = useState([]);
    const { token } = useContext(AzilContext);
    const classes = useStyles();

    useEffect(() => {
        fetchData();
    }, [token])

    const fetchData = async () => {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        let user = JSON.parse(window.atob(base64)).user;
        await axios.get(URL + "adopts/" + user.id)
            .then((response) => {
                setAdopts(response.data.userAdoptions)
            })
    }

    return (
        <ListGroup variant="flush">
            { adopts.map((adopt) => (
                <Card className={classes.card}>
                    <Card.Header>
                    <Card.Title>{ adopt.animal.category + " " + adopt.animal.race }</Card.Title>
                    </Card.Header>
                    <Card.Body className={classes.cardBody}>
                        <Card.Text className={classes.cardText}> Category: { adopt.animal.category } </Card.Text>
                        <Card.Text className={classes.cardText}> Race: { adopt.animal.race } </Card.Text>
                        <Card.Text className={classes.cardText}> Age:  { adopt.animal.age } </Card.Text>
                        <Card.Text className={classes.cardText}> Status:  { adopt.status === "wait" ? "Requested" : "Confirmed" } </Card.Text>
                        { adopt.status === "wait" && <Button className={classes.cardText} variant="danger">Cancel adoption</Button> }
                    </Card.Body>
                </Card>
            ))}
        </ListGroup>
    )
}

export default AdoptionList;