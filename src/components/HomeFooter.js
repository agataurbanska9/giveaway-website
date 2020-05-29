import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";
import React from "react";


export function HomeFooter() {
    return (
        <div className='footer--info container'>
            <p>Copyright by CodersLab</p>
            <div className='images'>
                <img src={facebook} alt='facebook icon'/>
                <img src={instagram} alt='instagram icon'/>
            </div>
        </div>
    )

}
