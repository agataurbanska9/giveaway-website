import React from 'react';
import decoration from "../assets/Decoration.svg";
import facebook from '../assets/Facebook.svg';
import instagram from '../assets/Instagram.svg';

export function HomeContact() {
    return (
        <section className='home home--contact container' id='homeContact'>
            <div className='contact--form'>
                <h3>Skontaktuj się z nami</h3>
                <img src={decoration} alt='Decoration'/>
                <form>
                    <label>
                        Wpisz swoje imię
                        <input type="text" name="name" placeholder='Krzysztof' />
                    </label>
                    <label>
                        Wpisz swój email
                        <input type="email" name="email" placeholder='abc@xyz.pl'/>
                    </label>
                    <label>
                        Wpisz swoją wiadomość
                        <textarea name="message" placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                    </label>
                    <input type="submit" value="Wyślij" className='btn btn--home-send'/>
                </form>
                <p>Copyright by CodersLab</p>
                <img src={facebook} alt='facebook icon'/>
                <img src={instagram} alt='instagram icon'/>
            </div>
        </section>
    );
}