import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

const ContactPage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const setNameHandler = (event) =>{
        setName(event.target.value);
    }
    const setEmailHandler = (event) =>{
        setEmail(event.target.value);
    }
    const setPhoneNumberHandler = (event) =>{
        setPhone(event.target.value);
    }

    const formInputHandler = (event)=>{
        event.preventDefault();

        const inputItems = {
            name: name,
            email: email,
            phone: phone
        }
        fetch('https://react-complete-guide-715a3-default-rtdb.firebaseio.com/contact.json', {
            method: 'POST',
            body: JSON.stringify(inputItems),
            headers:{
                'Content-Type' : 'application/json'
            }
        });

        setName('');
        setEmail('');
        setPhone('');
    }


    return(
        <Card>
            <Card.Body>
                <Form onSubmit={formInputHandler}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label style={{fontWeight: 'bold'}}>Name</Form.Label>
                        <Form.Control type="text" value={name} onChange={setNameHandler} placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label style={{fontWeight: 'bold'}}>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={setEmailHandler} placeholder="Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPhoneNumber">
                        <Form.Label style={{fontWeight: 'bold'}}>Phone Number</Form.Label>
                        <Form.Control type="tel" value={phone} onChange={setPhoneNumberHandler} placeholder="Phone Number" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}
export default ContactPage;