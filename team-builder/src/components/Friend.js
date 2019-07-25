import React, { useState, useEffect } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import EditMember from "./editMember";

const Friend = props => {
  return (
    <Card key={props.friend.username}>
      {console.log(props.editing)}
      <Card.Content>
        <EditMember
            key={props.friend.username}
            friend={props.friend}
            reviseUser={props.reviseUser}
         />
        <Card.Header>{`${props.friend.name}`}</Card.Header>
        <Card.Meta>{`Username: ${props.friend.username}`}</Card.Meta>
        <Card.Description>
          <Icon name="mail" color="blue" />
          {props.friend.email}
        </Card.Description>
      </Card.Content>
      {props.friend.accountHistory.map((accountHistory, i) => (
        <Card.Content extra key={i}>
          <Icon name="building outline" color="blue" />
          {accountHistory.business}
        </Card.Content>
      ))}
    </Card>
  );
};
export default Friend;
