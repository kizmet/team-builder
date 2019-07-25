import React, { useState } from "react";
import useSignUpForm from "./useSignUpForm";
import { Button, Form, Container, Header, Modal } from "semantic-ui-react";


const MemberForm = props => {

  const [inputs, setInputs] = useState({ username: "", email: "", name: "", posts:[{words:'',sentence:'',sentences:''}], accountHistory:[{ business: ''}] });
  const [modalOpen, setModalOpen] = useState(false);

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
    console.log(inputs)
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    props.handleNewFriend(inputs)

  };

  const handleOpen = () => setModalOpen(true)
  const handleClose = () => setModalOpen(false)


  return (
    <Modal 
    trigger={<Button onClick={handleOpen}>Add a Friend</Button>} 
    open={modalOpen}
    onClose={handleClose}
    
    >
      <Modal.Header>Add a Friend</Modal.Header>
      <Modal.Content>
        <Form size="large" onSubmit={handleSubmit}>
          <Form.Field>
            <label>Name</label>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              type="text"
              placeholder="your name"
              name="name"
              onChange={handleInputChange}
              value={inputs.name}
            />
          </Form.Field>
          <Form.Field required>
            <label>Username</label>
            <Form.Input
              fluid
              icon="user doctor"
              iconPosition="left"
              type="text"
              placeholder="username"
              name="username"
              onChange={handleInputChange}
              value={inputs.username}
            />
          </Form.Field>
          <Form.Field required>
            <label>Email</label>
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              type="email"
              placeholder="email"
              name="email"
              onChange={handleInputChange}
              value={inputs.email}
            />
          </Form.Field>
          <Button type="submit" fluid size="large"
          onClick={handleClose}
          >
            Sign Up
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default MemberForm;
