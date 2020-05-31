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
                    <div className='form--btns'>
                        <button className='btn btn--registry'>Załóż konto</button>
                        <input type="submit" value="Zaloguj się" className='btn btn--login-send'/>
                    </div>
                </form>
            </div>
        </section>
    );
}