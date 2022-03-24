import Header from '../components/Header';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const index = () => {
  return (
    <>
      <Head>
        <title> Home Page </title>
        <meta name="description" content="Free Youtube Web tutorials" />
        <meta name="keywords" content="Property, Html, CSS, JavaScript, Next JS, Nagpur Real Estate" />
        <meta name="author" content="Shreejai Raj" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>  
      <Header />
      <div className="container">
      <p className="btn btn-primary">Testing P tag</p>
      </div>
    </>
  )
}

export default index;
