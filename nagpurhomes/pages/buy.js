import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Image from 'next/image';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {BiPhoneCall, BiImage, BiUserCircle, BiBed, BiBath, BiArea} from 'react-icons/bi';
import Map_Location from '../components/Map_Location';
import Footer from '../components/Footer';
//import { getStaticProps } from './blog';
// import getProperties from "./api/hello"
//https://maelectrics.com/tf/html/quarter-preview/quarter/index-7.html

export const getStaticProps = async () => {
  const res = await fetch("https://nagpurhomes.com/api");
  const data = await res.json();

  return {
    props: {
      data,
    }
  };
}

const viewad = ({data}) => {
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])



    return (
        <>
            <Navbar />
            {/*<h1 style={{color:"green"}}>Properties for sale</h1> */}
            {/*<h1>Properties for sale</h1>*/}
    {/*<Slider/>*/} 
            <div style={{height:"300px", background:"#d2d2d2"}}>   
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
                      
                      <h1 className="bold-header" style={{fontSize:"larger"}}>₹55000000</h1>
                      <h1 className="bold-header">Diamond Manor Apartment</h1>

                      <div style={{margin:"20px 0px", fontWeight:"bold"}}>
                        <p><BiBed/> 2 &nbsp;&nbsp;&nbsp;<BiBath/> 2 &nbsp;&nbsp;<BiArea/> 1500 sq.ft.</p>
                      </div>

                      <p className="grey-text" style={{fontFamily:"Poppins"}}>
                        <FaMapMarkerAlt className="orange-text" /> Dharampeth
                      </p>

                      <div style={{borderTop:"1px solid #d2d2d2", borderBottom:"1px solid #d2d2d2", padding:"10px 0px", marginBottom:"30px"}}>
                        <p style={{marginBottom:"0px"}}> Apartment / Flat / Unit</p>
                      </div>

                      <h2 className="side-heading">Description</h2>

                      <div id="description">
                        <p>Massa tempor nec feugiat nisl pretium. Egestas fringilla phasellus faucibus scelerisque eleifend donec Porta nibh venenatis cras sed felis eget velit aliquet. Neque volutpat ac tincidunt vitae semper quis lectus. Turpis in eu mi bibendum neque egestas congue quisque. Sed elementum tempus egestas sed sed risus pretium quam. Dignissim sodales ut eu sem. Nibh mauris cursus mattis molestee iaculis at erat pellentesque. Id interdum velit laoreet id donec ultrices tincidunt.</p>
                        <p>To the left is the modern kitchen with central island, leading through to the unique breakfast family room which feature glass walls and doors out onto the garden and access to the separate utility room.</p>
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
            
            <Footer />
        </>
    )
}

// export getServerSideProps() {
//   const res = await getProperties;
//   props: {}
// }

export default viewad
