import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, Label, Icon, Image} from 'semantic-ui-react';
import moment from 'moment';

function PostCard({post: {body, createdAt, id, username, likeCount, commentCount, likes}}) {
  
  const likePost = () => {
    console.log('Liked!')
  }

  const commentOnPost = () => console.log('going to comments...');

  return (
    <Card fluid>
      <Card.Content>
        <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/molly.png' />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>{moment(createdAt).fromNow()}</Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button as='div' labelPosition='right' onClick={likePost}>
          <Button color='red' basic>
            <Icon name='heart' />
          </Button>
          <Label basic color='red' pointing='left'>
            {likeCount}
          </Label>
        </Button>
        <Button as='div' labelPosition='right' onClick={commentOnPost}>
          <Button color='teal' basic>
            <Icon name='comments' />
          </Button>
          <Label basic color='teal' pointing='left'>
            {commentCount}
          </Label>
        </Button>
      </Card.Content>
    </Card>
  )
}

export default PostCard;