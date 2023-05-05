

import { Link } from "react-router-dom";



import './Navbar.css'
import logo from "../../assets/img/logo.png";
import search from "../../assets/img/search-solid.svg";
import Avatar from "../Avatar/Avatar";

   
const Navbar =()=>{

    var user={
        name:"T"
    };


    return (
        <nav>
        <div className="navbar">

                 <Link to="/" className="nav-item nav-btn">
                    <img src={logo} alt="logo" />
                </Link>



                 <Link to="/" className="nav-item nav-btn">
                    About
                </Link>

                  <Link to="/" className="nav-item nav-btn">
                    Products
                </Link>

                  <Link to="/" className="nav-item nav-btn">
                    For teams
                </Link>
                
                    <form action="">
                        <input type="text" className="text" placeholder="Search..."/>
                        <img src={search} alt="search" width='18'/>
                    </form>

                    {user===null?
                    <Link to="/Auth" className="nav-item nav-links">
                        Log in
                        </Link>: 
                        <>

                        <Avatar
                        backgroundColor='#009dff'
                            px="10px"
                            py="7px"
                            borderRadius='50%'
                            >
                            <Link
                                to="/User"
                                style={{ color: "white", textDecoration: "none" }}
                            
                            >
                                T
                            </Link>
                        </Avatar>


                    


                        <button className="nav-item nav-links">Log out</button>
                        </>
                    }

                {/* <Link to="/contact">
                <li >Contact Us📞</li>
                </Link>


                
                <Link to="/instamart">
                <li >Technologies Used💻</li>
                </Link> 
                 */}



        </div>
        </nav>
    )
}

export default Navbar;