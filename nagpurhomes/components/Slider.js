import Image from 'next/image';

const Slider = () => {
    return (
        <>
        <div id="lightbox" style={{height:"60vh", width:"300px", background:"darkgrey", position:"fixed"}}></div>
        <div className="wrapper">
            <div className="gallery">
                <div className="image">
                    <div className="testpic" style={{background:"green"}}></div>
                    <div className="testpic" style={{background:"grey"}}></div>
                    <div className="testpic" style={{background:"blue"}}></div>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default Slider
