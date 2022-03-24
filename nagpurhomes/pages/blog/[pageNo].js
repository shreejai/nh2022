import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    const paths = data.map((curElem) => {
        return{
            params: { 
                pageNo: curElem.id.toString(), 
            },
        };
    });

    return {
        paths,
        fallback : false,
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.pageNo;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
  
    return {
      props: {
        data,
      }
    };
  }

const myData = ({ data }) => {
    return (
        <>
            <Navbar />
            <div>
                <div className="ssr-styles ssr-styles-inside">
                    <h3>{data.id}</h3>
                    <h2>{data.title}</h2>
                    <p>{data.body}</p>
                </div>  
            </div> 
            <Footer/>
        </>
    )
}

export default myData

// What will happen if the file already exists in our folder and we tried to call the pages dynamic route ?

// Which page will be served by the next.js app ?

// getStaticPaths defines which pages next.js has to render when exporting.
// It is used to generate all available dynamic routes.