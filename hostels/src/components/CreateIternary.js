import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';

function CreateIternary(props) {
    const [user, setUser] = useState('');
    const [startdate, setStartDate] = useState('');
    const [stage, setStage] = useState(false);
    const [hostel, setHostel] = useState(false);
    const [nights, setNights] = useState(false);
    const postUser = () => {
      axios.post(`https://localhost:9000/itineraries/stages/new/${props.user}`, {
        user,
        startdate,
        stage,
        hostel,
        nights  
    })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>User</label>
                    <input placeholder='Name' onChange={(e) => setUser(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>startdate</label>
                    <input placeholder='Last Name' onChange={(e) => setStartDate(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>stage</label>
                    <input placeholder='Last Name' onChange={(e) => setStage(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Hostel</label>
                    <input placeholder='Last Name' onChange={(e) => setHostel(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>nights</label>
                    <input placeholder='Last Name' onChange={(e) => setNights(e.target.value)}/>
                </Form.Field>
                <Button onClick={postUser} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
export default CreateIternary