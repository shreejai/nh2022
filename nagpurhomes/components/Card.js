import React from 'react';
import Link from 'next/link';
import {FaMapMarkerAlt} from 'react-icons/fa';



const Card = (props) => {
  return (
    <div>
      <div className="card" style={{marginBottom:"50px"}}>
        <div style={{height:"200px", background:"#d2d2d2", position:"relative"}}>
          <p>
            Property id: {props.propertyId} <br/>
            Image: {props.imageFolder} <br/> 
            Title: {props.title} <br/>
            User Type: {props.userType} <br/>
            Location: {props.propertyLocation} <br/>
          </p>
          <p>{props.imageFolder == '' ? 'No':'Pics available'}</p>
          {/*<p>{props?.imagefolder == 'images/nophotos.jpg'? 'https://nagpurhomes.com/images/nopics1small.jpg' : 'https://nagpurhomes.com/'+props.imagefolder+'small/s.jpg'}</p>*/}
        </div>
        <div className='card-body'>
          <p className='badge rounded-pill bg-warning text-dark'>#{props.propertyId}</p>
          {props.userType == 'Owner' ? <p className='badge rounded-pill bg-success'>No Brokerage</p>:''}
          <Link href={`/sale/${props.propertyId}`}>
            <a>
              <h5 className="card-title bold-header">{props.title}</h5>
            </a>
          </Link>
          <p style={{color:"#5F747F"}}> <FaMapMarkerAlt style={{color:"#ec6f5c"}} /> {props.propertyLocation}</p>

        </div>
      </div>
    </div>
  )
}

export default Card