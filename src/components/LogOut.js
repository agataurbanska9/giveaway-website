import decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";
import React from "react";

export function LogOut() {
    return (
        <section className='container logout'>
            <div className='login--form'>
                <p>Wylogowanie nastąpiło pomyślnie!</p>
                <img src={decoration} alt='Decoration'/>
                <Link to='/' className='btn btn--registry'>Strona główna</Link>
            </div>
        </section>
    );
}