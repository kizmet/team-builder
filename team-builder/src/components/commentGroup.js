import React from "react";
import { Button, Comment, Form, Header, Icon } from "semantic-ui-react";

const CommentGroup = props => (
  <Comment>
    <Comment.Avatar as={Icon} name="comment" size="large" />
    <Comment.Content>
      <Comment.Author as="a">{props.friend.name}</Comment.Author>
      {props.friend.posts.map((post,i) => (
          <Comment.Text key={i}>{post.words}</Comment.Text>
      ))}
    </Comment.Content>
  </Comment>
);

export default CommentGroup;
