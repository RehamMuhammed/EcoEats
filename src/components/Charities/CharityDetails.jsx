import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Details.css';
import img2 from "../../images/Eco.png";



function CharityDetails( charity ) {
  return (
    // <>
    //     <div className='d-flex justify-content-center'>
    //   <Card.Img variant="top" src={charity.image} style={{ width: '10rem', height:'10rem'}}/>
    //   </div>
    //   <Card.Body className='text-center'>  
    //   <Card.Text className='text-dark shadow-none'> { charity.CharityName }</Card.Text>
    //   <Card.Text className='text-dark shadow-none'> { charity.Type }</Card.Text>
    //   <Card.Text className='text-dark shadow-none'> { charity.Location }</Card.Text>
    //   <Card.Text className='text-dark shadow-none'> { charity.Hotline }</Card.Text>
    //   <Card.Text className='text-dark shadow-none'> { charity.Mission }</Card.Text>
    //   <Card.Text className='text-dark shadow-none'> { charity.ContactInformation }</Card.Text>
        
    //   </Card.Body>
    


    // </>
    <>
    <div className='d-flex justify-content-center'>
  <Card.Img variant="top" src={img2} style={{ width: '10rem', height:'10rem'}}/>
  </div>
  <Card.Body className='text-center'>  
  <Card.Text className='text-dark shadow-none'> Ahl Misr</Card.Text>
  <Card.Text className='text-dark shadow-none'> Food Bank</Card.Text>
  <Card.Text className='text-dark shadow-none'>Egypt</Card.Text>
  <Card.Text className='text-dark shadow-none'>19054</Card.Text>
  <Card.Text className='text-dark shadow-none'> Distributing food to marginalized areas</Card.Text>
  <Card.Text className='text-dark shadow-none'> info@ahl-masr.ngo</Card.Text>
    
  </Card.Body>
</>
    
  );
}

export default CharityDetails;