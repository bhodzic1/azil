import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

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

const Profile = () => {
    const { id } = useParams();
    const classes = useStyles();
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [mail, setMail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        await axios.get(URL + "profile/" + id)
            .then((response) => {
                setName(response.data.user.name);
                setLastname(response.data.user.lastname);
                setAddress(response.data.user.address);
                setMail(response.data.user.mail);
                setPhone(response.data.user.phone_number);
            })
    }

    return (
        <Card className={classes.card}>
            <Card.Header>
            <Card.Title>{ name + " " + lastname }</Card.Title>
            </Card.Header>
            <Card.Body className={classes.cardBody}>
                <Card.Text className={classes.cardText}> Email: { mail } </Card.Text>
                <Card.Text className={classes.cardText}> Phone number:  { phone } </Card.Text>
                <Card.Text className={classes.cardText}> Address:  { address } </Card.Text>
            </Card.Body>
            
        </Card>
    )
}

export default Profile;