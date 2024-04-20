import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Charities.css';
import { Link } from 'react-router-dom';


function CharityCard( {charity} ) {
  return (
    <Card style={{ width: '22rem', background: 'transparent', backdropFilter: "blur(20px)"}} className='pt-3'>
        <div className='d-flex justify-content-center'>
      <Card.Img variant="top" src={charity.image} style={{ width: '10rem', height:'10rem'}}/>
      </div>
      <Card.Body className='text-center'>  
      <Card.Text className='text-dark shadow-none'> { charity.CharityName }</Card.Text>
      <Card.Text className='text-dark shadow-none'> { charity.Location }</Card.Text>
        <Card.Text className='text-dark shadow-none'> { charity.Type }</Card.Text>
       <Link to={`/charities/${charity.id}`} className='bg-main'>       <Button>
View Charity        </Button> 
</Link>
       
      </Card.Body>
    </Card>
    
    
  );
}

export default CharityCard;




