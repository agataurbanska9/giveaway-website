import React from 'react';
import decoration from "../assets/Decoration.svg";
import {HomeFooter} from "./HomeFooter";

export function HomeContact() {
    return (
        <div className='bg'>
        <section className='home home--contact container' id='homeContact'>
            <div className='contact--form'>
                <h3>Skontaktuj się z nami</h3>
                <img src={decoration} alt='Decoration' className='decoration'/>
                <form>
                    <label>
                        Wpisz swoje imię <br/>
                        <input type="text" name="name" placeholder='Krzysztof' />
                    </label>
                    <label>
                        Wpisz swój email <br/>
                        <input type="email" name="email" placeholder='abc@xyz.pl'/>
                    </label>
                    <label>
                        Wpisz swoją wiadomość <br/>
                        <textarea name="message" placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                    </label>
                    <input type="submit" value="Wyślij" className='btn btn--home-send'/>
                </form>
            </div>
        </section>
        <HomeFooter/>
        </div>
    );
}