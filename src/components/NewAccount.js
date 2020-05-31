import React from 'react';
import decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";

export function NewAccount() {
    return (
        <section className='container newAccount'>
            <div className='newAccount--form'>
                <p>Załóż konto</p>
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
                        <br/>
                        <label>
                            Powtórz hasło <br/>
                            <input type='password' name='password'/>
                        </label>
                    </div>
                    <div className='form--btns'>
                        {/*<Link to='/logowanie'>Zaloguj się</Link>*/}
                        <button className='btn btn--login'>Zaloguj się</button>
                        <input type="submit" value="Załóż konto" className='btn btn--registry'/>
                    </div>
                </form>
            </div>
        </section>
    );}