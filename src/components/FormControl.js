import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, {useState, useRef} from 'react';
import { Card, ListGroupItem } from 'react-bootstrap';

function FormControl() {
  const [newNames, addName] = useState(['Mike', 'Logan', 'Chris']);
  const [waitTime, addTime] = useState(15);
  const nameVal = useRef();

  function submitChange(e) {
    const name = nameVal.current.value;
    if (name === '') return

    // add duplicates check
    const duplicates = newNames.includes(name);
    if (duplicates) {
      alert("This name is on the list. Please add last intial")
    } else {
      addName((prevState => {
        return [...prevState, name]
      }));
    }
    addTime(prevState => prevState + 5)
    nameVal.current.value = null;
  }
  return (
    <div className='container' style={{ width: '30rem' }}>
      <Form.Label 
        className="formlable" 
        htmlFor="input"><p>Would you like to add your name to our wait list?</p>
      </Form.Label>
      <Form.Text>
        <h5>We currently have { newNames.length } people on the list.<br />
        current wait time is aproximately {waitTime} minutes</h5>
      </Form.Text>
      <Form.Control 
        type="text"
        id="input"
        ref={nameVal}
      />
      <br></br>
      <div className='mb-2'>
        <Button variant="success" size="sm" onClick={submitChange}>Secondary</Button>
      </div>
      <div className='container'>
        <p className='formlable'>Here is the list of names we have so far!</p>
        <ListGroup>
        {
            newNames.map((name) => (
                <ListGroup.Item 
                  key={name}
                >
                  {name}
                </ListGroup.Item>
            ))
        }
        </ListGroup>
      </div>
    </div>
  );
}

export default FormControl;