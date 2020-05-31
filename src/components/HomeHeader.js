import React from 'react';
import decoration from '../assets/Decoration.svg';
import homehero from '../assets/Home-Hero-Image.jpg';
import {Link} from "react-router-dom";

export function HomeHeader() {

    return (
        <section className='home home--header container'>
            <div className='header--img'>
                <img src={homehero} alt='Home Hero' className='home--hero-img'/>
            </div>
            <div className='header--content'>
                <p>Zacznij pomagać!</p>
                <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                <img src={decoration} alt='Decoration'/>
                <div className='buttons'>
                    <Link to='/logowanie' className='btn btn--home-oddajrzeczy'>Oddaj rzeczy</Link>
                    <Link to='/logowanie' className='btn btn--home-zbiorka'>Zorganizuj zbiórkę</Link>
                </div>

            </div>
        </section>
    );
}
