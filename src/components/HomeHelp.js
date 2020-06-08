import React, {useState} from 'react';
import decoration from "../assets/Decoration.svg";
import {HomeHelpTable} from "./HomeHelpTable";

export function HomeHelp() {
    const [page, setPage] = useState('foundation');
    const handleClick = (e) => {
        setPage(e.target.value);
    }
    return (
        <>
        <section className='home home--help container' id='homeHelp'>
            <h3>Komu pomagamy?</h3>
            <img src={decoration} alt='Decoration'/>
            <div className='buttons'>
                <button className='btn btn--home-fundacje' value='foundation' onClick={handleClick}>Fundacjom</button>
                <button className='btn btn--home-organizacje' value='organization' onClick={handleClick}>Organizacjom pozarządowym</button>
                <button className='btn btn--home-zbiorki' value='local' onClick={handleClick}>Lokalnym zbiórkom</button>
            </div>
            <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
        </section>
            <HomeHelpTable page={page}/>
        </>
    );
}