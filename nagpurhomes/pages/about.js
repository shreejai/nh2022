import Navbar from '../components/Navbar'
import Image from 'next/image';
import Head from 'next/head';

const about = () => {
    return (
        <>
           <Navbar />
           <Head>
            <title>About Nagpur Homes</title>
           </Head>
            <div style={{textAlign:"center"}}>
                <h1>Welcome to about page</h1> 
                <div style={{position:"relative", width:"300px", height:"100px", margin:"0 auto"}}>
                    <Image layout="fill" src="https://nagpurhomes.com/images/nagpurhomes2019.png" alt="Logo">   
                    </Image>
                </div>
            </div>
           
        </>
    )
}

export default about
