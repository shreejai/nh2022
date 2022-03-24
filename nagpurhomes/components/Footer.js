
import {GrFacebookOption} from 'react-icons/Gr';
import {RiInstagramFill} from 'react-icons/Ri';
import {BsLinkedin} from 'react-icons/Bs';
import {HiOutlineLocationMarker} from 'react-icons/Hi';
import {BiPhoneCall} from 'react-icons/Bi';
import Image from 'next/image';

const Footer = () => {
    return (
        <>
        <div id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 footer-address">
                        <Image src="/nagpurhomes.png" width="100px" height="50px" />
                        <p style={{marginTop:"10px"}} className="bold-header">Find your perfect fit!</p>
                        <p>Nagpur Homes® is a subsidiary of Raj Consultancy Services® <br/>Estd. 1996</p>

                        <ul style={{listStyle:"none", paddingLeft:"0px"}}>
                            <li>
                                <div className="icon">
                                    <HiOutlineLocationMarker/>
                                </div>
                                <div className="info">                                 
                                    9A, Daga Layout, North Ambazari Road, Nagpur
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <BiPhoneCall/>
                                </div>
                                <div className="info">
                                    +91 9373102926
                                </div>
                            </li>
                            
                        </ul>

                        <div class="social-icons">
                            <div style={{fontSize:"20px"}}>
                                <GrFacebookOption />
                                &nbsp;&nbsp;&nbsp;
                                <RiInstagramFill style={{fontSize:"22px"}} />
                                &nbsp;&nbsp;&nbsp;
                                <BsLinkedin/>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3">
                        <h3 className="bold-header">Rentals</h3>
                        <ul>
                            <li>Family Accomodations</li>
                            <li>Bachelor Accomodations</li>
                            <li>Residential </li>
                            <li>Commercial Spaces</li>
                        </ul>

                    </div>
                    <div className="col-md-3">
                        <h3 className="bold-header">Sales</h3>
                        <ul>
                            <li>Apartments / Flats/ Units</li>
                            <li>Family / Bachelor Accomodations</li>
                            <li>Commercial Accomodations</li>
                            <li>Bungalows / Houses</li>
                            <li>Land / Plots</li>
                            <li>Farmhouses</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3 className="bold-header">Legal Aid</h3>
                        <ul>
                            <li>City Survey</li>
                            <li>Property Valuation</li>
                            <li>Legal consultation from leading property advocates in Nagpur.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div id="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        All Rights Reserved @ Nagpur Homes 2021
                    </div>
                    <div className="col-md-6" style={{textAlign:"right"}}>
                        Privacy Policy &nbsp;&nbsp;&nbsp; Tenants and Landlords
                    </div>
                </div>
            </div>    
        </div>
            
        </>
    )
}

export default Footer
