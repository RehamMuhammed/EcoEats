import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Details.css';
import img2 from "../../images/bgreen.jpg";
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loader from '../Loader/Loader';



function CharityDetails() {
  const { id } = useParams();
  const [charity, setCharity] = useState("");

  const fetchAllCharity = async () => {
    const res = await fetch("http://localhost:8000/api/getCharity")
    const { data } = await res.json()
    const charity = await data.find(charity => charity._id === id)
    console.log(charity)
    setCharity(charity)
  }
  useEffect(() => {
    fetchAllCharity()
  }, [id])

  if (!charity) {
    return <Loader />;
  }
  return (
    <div className='details-container'>
      <div className='charityimg'>
        <Card.Img variant="top" src={charity.image} style={{ width: '23rem', height: '23rem' }} />
      </div>
      <div className='charitydet'>
        <Card.Text className='text-dark'><h2 className='charity-name'>{charity.CharityName}</h2> </Card.Text>
        <Card.Text className='text-dark'> Type: {charity.Type}</Card.Text>
        <Card.Text className='text-dark'>Location: {charity.Location}</Card.Text>
        <Card.Text className='text-dark'>Hotline: {charity.Hotline}</Card.Text>
        <Card.Text className='text-dark'>Description: {charity.Mission}</Card.Text>
        <Card.Text className='text-dark'>Contact: {charity.ContactInformation}</Card.Text>
        <br></br>
        <div className="button-gp">
          <Link to={`/charities`}> <Button className='btn-donate'>Back</Button></Link>
          <Link to={`/donation/${charity.CharityName}`}> <Button className='btn-donate'>Donate</Button></Link>
        </div>


      </div>
    </div>

  );
}

export default CharityDetails;