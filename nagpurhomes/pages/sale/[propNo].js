import {useRouter} from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {BiPhoneCall, BiImage, BiUserCircle, BiBed, BiBath, BiArea} from 'react-icons/bi';
import {FaMapMarkerAlt} from 'react-icons/fa';
import Map_Location from '../../components/Map_Location';
import Slider from '../../components/Slider';
import Image from 'next/image';

export const getStaticPaths = async () => {
    const res = await fetch("https://nagpurhomes.com/api4414");
    const data = await res.json();

    const paths = data.map((curElem) => {
        return{
            params: {
                propNo: curElem.id.toString(),
            }
        }
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.propNo;
    const res = await fetch(`https://nagpurhomes.com/api4414?post_id=${id}`);
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
};


const propData = ({ data }) => {

    //const router = useRouter();
    //const propertyId = router.query.propNo;

    return (
        <>
            <Navbar />
            {
                data.map((curElem) =>{
                    return(
                        <>
                        <div style={{height:"300px", background:"#d2d2d2", position:"relative", zIndex:"-1"}}>  
                            <p className="badge rounded-pill bg-warning" style={{margin:'20px'}}>#{curElem.id}</p> 
                            <p>
                                {curElem?.imagefolder == 'images/nophotos.jpg'? 'https://nagpurhomes.com/images/nagpurhomes2019.png' : 'https://nagpurhomes.com/'+curElem.imagefolder+'small/s.jpg'} 
                            </p>
                            <Image layout="fill" object-fit="cover" src={curElem?.imagefolder == 'images/nophotos.jpg'? 'https://nagpurhomes.com/images/nagpurhomes2019.png' : 'https://nagpurhomes.com/'+curElem.imagefolder+'small/s.jpg'} 
                            />
                        </div>
                        <div style={{background:"#F8F9FA"}}>
                            <div className="container" style={{paddingBottom:"50px"}}>
                                <div className="row" style={{padding:"20px"}}>

                                    <div className="col-md-8" >
                                        <div id="image-widget" style={{background:"#fff", border:"2px solid #d2d2d2", width:"fit-content", padding:"5px 20px", marginTop:"-40px", marginBottom:"20px"}}>
                                            <BiImage/> Photos : <div style={{background:"#E6E9EE", width:"23px", height:"23px", lineHeight:"23px", borderRadius:"50%", float:"right", textAlign:"center", marginLeft:"10px", fontSize:"small"}}>20</div>
                                        </div>
                      
                                        <div className="yellow-bg" style={{ width:"fit-content", padding:"5px 20px", marginBottom:"20px"}}>
                                            <label>FOR SALE</label>
                                        </div>
                      
                                        <h1 className="bold-header" style={{fontSize:"larger"}}>
                                        {curElem?.amount ? `₹ ${curElem?.amount}` : "Ask for price" }
                                        </h1>
                                        <h1 className="bold-header">{curElem.title}</h1>

                                        <div style={{margin:"20px 0px", fontWeight:"bold"}}>
                                            <p><BiBed/> {curElem.beds} &nbsp;&nbsp;&nbsp;<BiBath/> {curElem.bath} &nbsp;&nbsp;<BiArea/> {curElem.areatext} sq.ft.</p>
                                        </div>

                                        <p className="grey-text" style={{fontFamily:"Poppins"}}>
                                            <FaMapMarkerAlt className="orange-text" /> {curElem.location}
                                        </p>

                                        <div style={{borderTop:"1px solid #d2d2d2", borderBottom:"1px solid #d2d2d2", padding:"10px 0px", marginBottom:"30px"}}>
                                            <p style={{marginBottom:"0px"}}> Property type: {curElem.ptype}</p>
                                        </div>

                                        <h2 className="side-heading">Description</h2>

                                        <div id="description">
                                            {curElem.description}
                                            <p style={{marginTop:"20px", borderTop: "2px dotted", paddingTop:"20px"}}>**Disclaimer: Nagpur Homes®, its directors, employees and related entities believe that the information contained herein is gathered from sources we deem to be reliable. However, no representation or warranties of any nature whatsoever are given, intended or implied. Any interested parties should rely on their own inquiries.**</p>
                                        </div>

                                        <Map_Location />

                                    </div>

                                    <div className="col-md-4">
                                    <div id="advertiser-details" style={{padding:"25px", border:"1px solid #d2d2d2", textAlign:"center", marginTop:"18px"}}>
                                        <div id="advertiser-image" style={{height:"100px", width:"100px", background:"#d2d2d2", margin:"0px auto", marginBottom:"20px", borderRadius:"50%"}}>
                                        <BiUserCircle className="v-align" style={{opacity:"0.5", fontSize:"xxx-large", marginTop:"0px"}}/>
                                        </div>
                                        <h4>Owner Name</h4>
                                        <p className="grey-text" style={{textTransform:"uppercase", letterSpacing:"2px"}}>Advertiser</p>
                                        <h5 className="green-text" style={{marginBottom:"0px"}}><BiPhoneCall/> Call</h5>
                                    </div>
                                    </div>

                                </div>
                            </div>
                        </div>  
                        </>
                    )
                })
            }
            <Footer />
        </>
    )
}

export default propData;
