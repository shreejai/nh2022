import Navbar from '../../components/Navbar';
import Image from 'next/image';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {BiBed, BiBath, BiArea} from 'react-icons/bi';
import Pagination from '../../components/Pagination';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '../../components/Footer';

export const getStaticProps = async () => {
    const res = await fetch("https://nagpurhomes.com/api4414");
    const data = await res.json();

    return {
        props: {
            data,
        }
    };
}


const index = ({data}) => {

    const [showPerPage, setShowPerPage] = useState(9);
    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage,
    });

    const onPaginationChange = (start, end) => {
        console.log(start, end);
        setPagination({start:start, end:end});
    };

    return (
        <>
            <Navbar />
            <div style={{textAlign:"center"}}>
                <h1 style={{margin:"30px 10px"}}>For Sale</h1>
            </div> 
            <div className="container" style={{marginBottom:'50px'}}>
                <div className="row">
                    {
                        data.slice(pagination.start,pagination.end).map((curElem)=>{
                            return (
                                <div className="col-md-4" key={curElem.id}>
                                <div className="card" style={{marginBottom:"50px"}}>
                                    <div style={{height:"200px", background:"#d2d2d2", position:"relative"}}>
                                    {/*<p>{curElem?.imagefolder == 'images/nophotos.jpg'? 'https://nagpurhomes.com/images/nopics1small.jpg' : 'https://nagpurhomes.com/'+curElem.imagefolder+'small/s.jpg'}</p>*/}
                                    <Image className="card-img-top" layout="fill" src={curElem?.imagefolder == 'images/nophotos.jpg'? 'https://nagpurhomes.com/images/nagpurhomes2019.png' : 'https://nagpurhomes.com/'+curElem.imagefolder+'small/s.jpg'}/>
                                    </div>
                                    <div className="card-body" style={{borderBottom:"1px solid #00000020"}}>
                                        <p className="badge rounded-pill bg-warning text-dark" style={{marginRight:"10px"}}>#{curElem.id}</p>
                                        {curElem?.usertype !="Broker"? <p className="badge rounded-pill bg-success">Brokerage Free</p> : ''}
                                        <Link href={`/sale/${curElem.id}`}>
                                            <a>
                                            <h5 className="card-title bold-header">{curElem.title}</h5>
                                            </a>
                                        </Link>
                                        <p style={{color:"#5F747F"}}> <FaMapMarkerAlt style={{color:"#ec6f5c"}} /> {curElem.location}</p>
                                        <p style={{marginBottom:"0px", color:"#5F747F"}}>
                                            <BiBed />: <strong>{curElem.beds}</strong> &nbsp; &nbsp; <BiBath />: <strong> {curElem.bath} </strong> &nbsp; &nbsp; <BiArea />: <strong> {curElem.areatext} </strong>
                                        </p>
                                    </div>
                                    {
                                        <p className="bold-header" style={{color:"#EC6F5C", fontWeight:"700", marginBottom:"0px", padding:"16px"}}>
                                        {curElem?.amount ? `₹ ${curElem?.amount}` : "Ask for price" }
                                        </p>
                                            
                                    }
                                </div>
                                </div>
                            );
                        })
                    }
                </div>
                <Pagination showPerPage={showPerPage} onPaginationChange = {onPaginationChange} />

            </div>

            <Footer/>

        </>
    )
}

export default index
