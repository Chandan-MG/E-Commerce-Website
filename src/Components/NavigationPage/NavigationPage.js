import React, { useContext, useHistory } from "react";
// import {Outlet} from 'react-router-dom';
import { Link } from 'react-router-dom';
import  './NavigationPage.css';
import AuthContext from "../AuthPage/Auth-Context";

const NavigationPage =()=>{
    const authCtx = useContext(AuthContext);
    // const history = useHistory();

    const isLoggedIn = authCtx.isLoggedIn;
    return(
        <header className='header'>
            <nav>
                <ul>
                
                    { !isLoggedIn && (<li>
                        <Link to='/'>Login</Link>
                    </li>)}
                
                
                    { isLoggedIn && (<li>
                        <Link to='/home'>Home</Link>
                    </li>)}
                
                    { isLoggedIn && (<li>
                        <Link to='/store'>Store</Link>
                    </li>)}
                
                    { isLoggedIn && (<li>
                        <Link to='/about'>About</Link>
                    </li>)}
                
                </ul>
            </nav>
        </header>
    )
}
export default NavigationPage;