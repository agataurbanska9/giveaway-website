import React from 'react';
import decoration from "../assets/Decoration.svg";

export function LogIn() {
    return (
        <section className='container login'>
            <div className='login--form'>
                <p>Zaloguj się</p>
                <img src={decoration} alt='Decoration'/>
                <form>
                    <div className='labels'>
                        <label>
                            Email <br/>
                            <input type='email' name='email'/>
                        </label>
                        <br/>
                        <label>
                            Hasło <br/>
                            <input type='password' name='password'/>
                        </label>

                    </div>


                    <input type="submit" value="Zaloguj się" className='btn btn--login-send'/>
                    <button className='btn btn--registry'>Załóż konto</button>
                </form>


            </div>

        </section>



    );
}