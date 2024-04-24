import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Stores';
import { Link } from 'react-router-dom';
import Stores from './Stores';


function StoreCard({ Stores }) {
  return (
    <Card style={{ width: '22rem', background: 'lightgrey', backdropFilter: "blur(20px)" }} className='pt-3'>
      <div className='d-flex justify-content-center'>
        <Card.Img variant="top" src={Stores.image} style={{ width: '10rem', height: '10rem' }} />
      </div>
      <Card.Body className='text-center'>
        <Card.Text className='text-dark shadow-none'> {Stores.storeName}</Card.Text>
        <Card.Text className='text-dark shadow-none'> {Stores.location}</Card.Text>
        <Card.Text className='text-dark shadow-none'> {Stores.phoneNumber}</Card.Text>
        <Link to={`/store/${Stores._id}`}  ><button className='store-btn' >View Store</button></Link>


      </Card.Body>
    </Card>


  );
}

export default StoreCard;




