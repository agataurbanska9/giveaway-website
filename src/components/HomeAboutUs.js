import React from 'react';
import decoration from "../assets/Decoration.svg";
import signature from  '../assets/Signature.svg';
import people from '../assets/People.jpg';

export function HomeAboutUs() {
    return (
        <section className='home home--aboutus container'>
            <div className='aboutus--text'>
                <p>O nas</p>
                <img src={decoration} alt='Decoration'/>
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img src={signature} alt='Signature'/>
            </div>
            <div className='aboutus--photo'>
                <img src={people} alt='Group of people smiling' className='aboutus--img'/>
            </div>
        </section>
    );
}