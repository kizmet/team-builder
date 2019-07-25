import React, { useState, useEffect } from "react";
import "./App.css";
import faker from "faker";
import {
  Card,
  Container,
  Comment,
  Modal,
  Header,
  Form,
  Button
} from "semantic-ui-react";
import CommentGroup from "./components/commentGroup";
import MemberForm from "./components/memberForm";
import Friend from "./components/Friend";


const friend1 = faker.helpers.createCard();
const friend2 = faker.helpers.createCard();
const friend3 = faker.helpers.createCard();

function App() {
  const [friends, setFriends] = useState([friend1, friend2, friend3]);

  useEffect(() => {
    setFriends(friends);
  }, [friends]);

  const handleNewFriend = inputs => {
    setFriends([...friends, inputs]);
  };

   const reviseUser = (username, updatedUser) => {
    setFriends(friends.map(user => (user.username === username ? updatedUser : user)));
  };


  return (
    <Container style={{ margin: 20 }}>
      {console.log(friends)}
      <Header as="h1">Welcome Friends</Header>
      <Container>
        <MemberForm handleNewFriend={handleNewFriend} />
      </Container>
      <Card.Group itemsPerRow={2} centered>
        {friends.map(f => (
          <Friend
            key={f.username}
            friend={f}
            reviseUser={reviseUser}
          />
        ))}
      </Card.Group>
      <Comment.Group>
        <Header as="h3" dividing>
          Comments
        </Header>
        {friends.map(friend => (
          <CommentGroup key={friend.username} friend={friend} />
        ))}
      </Comment.Group>
    </Container>
  );
}

export default App;

//"name", "username", "email", "address", "phone", "website", "company", "posts", "accountHistory"
