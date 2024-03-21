import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Charities() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Charity Name</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          architecto quisquam delectus minima perferendis nulla quia nisi
          laborum, exercitationem cum quo accusantium.
        </Card.Text>
        <Button variant="primary">View Charity</Button>
      </Card.Body>
    </Card>
    
    
  );
}

export default Charities;