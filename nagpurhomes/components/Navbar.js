
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        const tempValue = isMenuOpen;
        setMenuOpen(!tempValue);
    }
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand d-flex" href="#">
                <Image src="/nagpurhomes.png" width="100px" height="50px"/>
                </a>
                <button onClick={toggleMenu} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isMenuOpen ? "" : "collapse"} navbar-collapse`}  id="navbarNav">
                <ul className="navbar-nav" style={{marginLeft:"auto"}}>
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link active" aria-current="page">Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about">
                            <a className="nav-link">About</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/sale">
                            <a className="nav-link">Sale</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/buy">
                            <a className="nav-link">Buy</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/rent">
                            <a className="nav-link">Rent</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/property-map">
                            <a className="nav-link">Property Map</a>
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link href="/blog">
                            <a className="nav-link">Blog</a>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link href="/testlist2">
                            <a className="orange-btn nav-link" style={{margin:"0px 10px"}}>List your property</a>
                        </Link>
                    </li>
                    
                </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar
