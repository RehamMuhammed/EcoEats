import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './AllCharities';
import { Link } from 'react-router-dom';

function ListCard({ AllCharities }) {
    return (
        <>
            <div className='d-flex  justify-content-between list-card-container align-items-center card-list' style={{ width: '45%' }}>
                <div className='d-flex align-items-center' >
                    <div className='list-card-titles'>
                        <Card.Text className='text-dark shadow-none truncate-ellipsis' title={AllCharities.name}>{AllCharities.name}</Card.Text>
                    </div>
                    <div className='my-3'>
                        <Card.Text className='text-dark shadow-none'> Family Members: {AllCharities.familyCount}</Card.Text>
                        <Card.Text className='text-dark shadow-none'> Description: {AllCharities.description}</Card.Text>
                        <Card.Text className='text-dark shadow-none'> Phone Number: {AllCharities.phoneNumber}</Card.Text>
                    </div>
                </div>
            </div >
            <div className='d-flex align-items-center'>
                <Link to={`/DonationForm`}  ><button className='list-btn' >Donate</button></Link>

            </div>

        </>


    );
}

export default ListCard;