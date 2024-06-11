import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './StoreDetails.css';
import img2 from "../../images/bgreen.jpg";
import { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import Stores from './Stores';



function StoreDetails() {
  const { id } = useParams();
  const [Stores, setStores] = useState("");

  const fetchAllStores = useCallback(async () => {
    try {
      const res = await fetch("http://localhost:8000/api/getStore")
      const { data } = await res.json()
      const Stores = await data.find(Stores => Stores._id === id)
      console.log(Stores)
      setStores(Stores)

    } catch (e) {
      console.log(e);
    }

  }, []);
  useEffect(() => {
    fetchAllStores()
  }, [])

  if (!Stores) {
    return <Loader />;
  }
  return (
    <div className='details-container'>
      <br></br>
      <br></br>
      <br></br>
      <div className='storeimg'>
        <Card.Img variant="top" src={Stores.image} style={{ width: '23rem', height: '23rem' }} />
      </div>
      <div className='storedet'>
        <Card.Text className='text-dark'><h2 className='store-name'>{Stores.storeName}</h2> </Card.Text>
        <Card.Text className='text-dark'> Description: {Stores.description}</Card.Text>
        <Card.Text className='text-dark'>Location: {Stores.location}</Card.Text>
        <Card.Text className='text-dark'>Phone Number: {Stores.phoneNumber}</Card.Text>
        <Card.Text className='text-dark'>Email Address: {Stores.emailAddress}</Card.Text>
        <br></br>
        <div className="button-gp">
          <Link to={`/Store`}> <Button className='btn-store'>Back</Button></Link>
          <Link to={`/AllProducts/${Stores.storeName}`}> <Button className='btn-buyy'>Let's Shop</Button></Link>
        </div>


      </div>
    </div>

  );
}

export default StoreDetails;