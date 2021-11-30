import React from 'react'
import { Card } from 'react-bootstrap';

type Props = any;
export const Repository: React.FC<Props> = ({repository}) => { 
    return (
    <Card border="info" style={{ width: '12rem' }} className="mb-2">
        <Card.Header><a href={repository.html_url} target="_blank" rel="noreferrer" >{repository.name}</a></Card.Header>
        <Card.Body>
          <Card.Text> Forks: {repository.forks} </Card.Text>
          <Card.Text> Watchers: {repository.watchers} </Card.Text>
          <Card.Text> Stars: {repository.stargazers_count} </Card.Text>
        </Card.Body>
      </Card>
    )
}