import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Details.css';
import img2 from "../../images/bgreen.jpg";



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
    <div class='details-container'>
    <div className='charityimg'>
  <Card.Img variant="top" src={img2} style={{ width: '23rem', height:'23rem'}}/>
  </div>
  <Card.Body className='charitydet'>  
  <Card.Text className='text-dark'><h2>Ahl Misr</h2> </Card.Text>
  <Card.Text className='text-dark'> Type: Food Bank</Card.Text>
  <Card.Text className='text-dark'>Location: Egypt</Card.Text>
  <Card.Text className='text-dark'>Hotline: 19054</Card.Text>
  <Card.Text className='text-dark'>Description: Distributing food to marginalized areas</Card.Text>
  <Card.Text className='text-dark'>Contact: info@ahl-masr.ngo</Card.Text>
    
  </Card.Body>
</div>
    
  );
}

export default CharityDetails;