import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './AllProducts';
import { Link } from 'react-router-dom';
import AllProducts from './AllProducts';
import { AddToCart } from '../../valtio/Cart';


function ProductCard({ AllProducts }) {
    return (
        <div className='d-flex justify-content-center ' style={{width:'32%'}}>
        <Card style={{ width: '30rem',height:'24rem' , background: 'rgba(255, 255, 255, 0.609)', backdropFilter: "blur(30px)", borderRadius: '25px' }} className='pt-3' >
            <div className='d-flex justify-content-center'>
                <Card.Img variant="top" src={AllProducts.image} style={{ width: '10rem', height: '10rem' }} />
            </div>
            <Card.Body className='text-center' >
                <Card.Text className='text-dark shadow-none'> {AllProducts.name}</Card.Text>
                <Card.Text className='truncate-ellipsis  text-dark shadow-none' title={AllProducts.description}> {AllProducts.description}</Card.Text>
                {/* <Card.Text className='text-dark shadow-none'> {AllProducts.price}</Card.Text> */}
                <br></br>
                <button className='product-btn' onClick={() => AddToCart(AllProducts)}>{AllProducts.price}</button>
            </Card.Body>
        </Card>
        </div>


    );
}

export default ProductCard;




