import Navbar from "../../components/Navbar";
import Link from 'next/link';
import Footer from "../../components/Footer";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    }
  };
}

const index = ({data}) => {
    return (
        <>
          <Navbar />
          <div style={{textAlign:"center"}}>
           <h1>Welcome to my blog</h1>  
          </div>
          {
            data.slice(0,5).map((curElem)=>{
              return (
                <div key={curElem.id} className="ssr-styles">
                  <h3>{curElem.id}</h3>
                  <Link href={`/blog/${curElem.id}`}>
                    <h2>{curElem.title}</h2>
                  </Link>
                </div>
              );
            })
          }

          <Footer/>
        </>
    )
}

export default index;
