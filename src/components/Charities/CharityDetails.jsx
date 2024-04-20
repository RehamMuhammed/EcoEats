import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Details.css';
import img2 from "../../images/bgreen.jpg";
import { useState,useEffect } from 'react';
import {useParams } from 'react-router-dom';



function CharityDetails( ) {
  const { id } = useParams();
  const [charity, setCharity] = useState("");

  const fetchAllCharity = async () => {
    const res = await fetch("https://ecoeatsapp.wiremockapi.cloud/charities/get")
    const { result } = await res.json()
    const charity = await result.find(charity => charity.id === id)
    console.log(charity)
    setCharity(charity)
  }
  useEffect(() => {
    fetchAllCharity()
  }, [id])

  if (!charity) {
    return <div>Loading...</div>;
  }
  return (
    <div className='details-container d-flex'>
    <div className='charityimg'>
  <Card.Img variant="top" src={charity.image[0]} style={{ width: '23rem', height:'23rem'}}/>
  </div>
  <Card.Body className='charitydet'>  
  <Card.Text className='text-dark'><h2 className='charity-name'>{charity.CharityName}</h2> </Card.Text>
  <Card.Text className='text-dark'> Type: {charity.Type}</Card.Text>
  <Card.Text className='text-dark'>Location: {charity.Location}</Card.Text>
  <Card.Text className='text-dark'>Hotline: {charity.Hotline}</Card.Text>
  <Card.Text className='text-dark'>Description: {charity.Mission}</Card.Text>
  <Card.Text className='text-dark'>Contact: {charity.ContactInformation}</Card.Text>
    
  </Card.Body>
</div>
    
  );
}

export default CharityDetails;