import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from "react-bootstrap";
import ArowBackIcon from '@rsuite/icons/ArowBack';
import { ButtonToolbar, IconButton } from 'rsuite';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from 'react';

export default function Information(props) {
    const [startDate, setStartDate] = useState(new Date());
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState(new Date());
    const [radioButtonOption, setRadioButtonOption] = useState('');
    
    const saveButton = () => {
        const newItem = { title, description, radioButtonOption, dueDate }
        props.handleSave(props.index, newItem);
        setTitle("")
        setDescription("");
        setDueDate("");
        setRadioButtonOption("");
        console.log("props", props.index)
        props.onGoBackClick()
    }
    const handleDateChange=(date)=>{
        console.log('date', date)
        setStartDate(date)
        setDueDate(date) 
    }
    useEffect(()=>{
        console.log('inside useEffect')
        setTitle(props.selectedCard.title)
        setDueDate(props.selectedCard.dueDate)
        setDescription(props.selectedCard.description)
        setRadioButtonOption(props.selectedCard.radioButtonOption)
    },[props.selectedCard]);
    return (
        <div>
            <ButtonToolbar>
                <IconButton icon={<ArowBackIcon />} onClick={props.onGoBackClick}></IconButton>
            </ButtonToolbar>
            <Form>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type='text' value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Enter title" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" value={description} placeholder="Enter description" onChange={(event) => setDescription(event.target.value)} rows={3} />
                </Form.Group>
                {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mt-3">
                        <Form.Check inline label="Low"  name="radioButtonOption" value="Low" checked={radioButtonOption === "Low"} onChange={(event) => setRadioButtonOption(event.target.value)} type={type} id={`inline-${type}-1`} />
                        {/* <Form.Check inline label="Medium" name="radioButtonOption" value="Medium" checked={radioButtonOption === "Medium"} onChange={(event) => setRadioButtonOption(event.target.value)} type={type} id={`inline-${type}-2`} /> */}
                        <Form.Check inline label="High" name="radioButtonOption" value="High" checked={radioButtonOption === "High"} onChange={(event) => setRadioButtonOption(event.target.value)} type={type} id={`inline-${type}-3`} />
                    </div>
                ))}
                <Form.Label>Due Date:</Form.Label>
                <ReactDatePicker selected={dueDate} value={dueDate} onChange={handleDateChange} />
                <Button onClick={saveButton} className=" btn m-auto mt-3 d-flex" variant="primary">Save</Button>
            </Form>

        </div>
    )
}