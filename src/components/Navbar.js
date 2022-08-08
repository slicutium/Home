import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {useState, useEffect, useRef } from 'react';


const Navbar = ()=> {
    const [fix, setFix] = useState(false);

    const setFixed = () => {
        if(window.scrollY > 56) {
            setFix(true);
        } else {
            setFix(false);
        }
    };
    useEffect(()=>{
        window.addEventListener('scroll',setFixed);
        return ()=> {
            window.removeEventListener('scroll',setFixed);
        }
    },[fix]);
    
    const [showLinks, setShowLinks] = useState(false);

    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);  

    useEffect(()=>{
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = '0px';
        }
    },[showLinks]);

    

    return (
        <nav className={`${fix?'':'navbar-transparent '}`}> 
            <div className="nav-center">
                <div className="nav-header">
                    <a className="header-main" href="#top" to="/">Pablo Solis</a>
                    <button className="nav-toggle" onClick={()=>setShowLinks(!showLinks)}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
                <div className='links-container' ref={linksContainerRef}>
                    <ul className="links" ref={linksRef}>
                            <li>
                                <a  href="#aboutme">
                                <span className="button-label">About me</span>
                                </a>
                            </li>
                        <li>
                            <a href="#portfolio" to="/#portfolio">
                            <span className="button-label">Portfolio</span>
                            </a>
                        </li>
                        <li>
                            <a href="#experience" to="/#experience">
                            <span className="button-label">Experience</span>
                            </a>
                        </li>
                        <li>
                            <a href="#top"> 
                            {/* to be implemented */}
                            <span className="button-label">My To Do List</span>
                            </a>
                        </li>
                    </ul>
                </div>
           </div> 
        </nav>
    );
};

export default Navbar;