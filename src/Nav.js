import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css"

const Nav = () => {
    return (
        <>
            <div style={{width:"100%", height:"50px"}}>
                <ul >
                    <li >
                        <NavLink to="/" >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/api" >
                          Api
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/routerDom" >
                       RouterDom
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/redux" >
                     Redux
                        </NavLink>
                    </li>
                </ul>


            </div>

        </>

    );
}

export default Nav;