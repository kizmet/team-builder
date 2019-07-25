import React, { useState, useEffect } from "react";
import useSignUpForm from "./useSignUpForm";
import {
  Button,
  Form,
  Container,
  Header,
  Modal,
  Icon,
  Image
} from "semantic-ui-react";

const EditMember = props => {
  const [user, setUser] = useState(props.friend);
  const [modalOpen, setModalOpen] = useState(false);

  // useEffect(() => {
  //   setUser(props.friend);
  // }, []);


  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = event => {
    if (event) event.preventDefault();
    props.reviseUser(user.username, user);
    handleClose()
  };

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <Modal
      trigger={
        <Image onDoubleClick={handleOpen} floated="right">
          <Icon name="doctor" size="huge" color="green" />
        </Image>
      }
      open={modalOpen}
      onClose={handleClose}
    >
      <Modal.Header>Edit a Friend</Modal.Header>
      <Modal.Content>
        <Form size="large" onSubmit={handleSubmit}>
          <Form.Field>
            <label>Name</label>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              type="text"
              placeholder={props.friend.name}
              name="name"
              onChange={handleInputChange}
              value={user.name}
            />
          </Form.Field>
          <Form.Field required>
            <label>Username</label>
            <Form.Input
              fluid
              icon="user doctor"
              iconPosition="left"
              type="text"
              placeholder={props.friend.username}
              name="username"
              onChange={handleInputChange}
              value={user.username}
            />
          </Form.Field>
          <Form.Field required>
            <label>Email</label>
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              type="email"
              placeholder={props.friend.email}
              name="email"
              onChange={handleInputChange}
              value={user.email}
            />
          </Form.Field>
          <Button type="submit" fluid size="large" >
            Submit
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default EditMember;
