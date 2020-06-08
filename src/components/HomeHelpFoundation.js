import React from 'react';
import {useState} from 'react';

export function HomeHelpFoundation() {
    const [page, setPage] = useState(1);
    const handleClick = (e) => {
        setPage(e.target.value);
    }
    if ( page == 1 ) {
        return (
            <section className='section--table container'>
                <div className={'homeHelpTable'}>
                    <div className='helpTable--row'>
                        <span><p>Fundacja “Dbam o Zdrowie”</p><p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p></span>
                        <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                    </div>
                    <div className='helpTable--row'>
                        <span><p>Fundacja “Dla dzieci”</p><p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p></span>
                        <p>ubrania, meble, zabawki</p>
                    </div>
                    <div className='helpTable--row'>
                        <span><p>Fundacja “Bez domu”</p><p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p></span>
                        <p>ubrania, jedzenie, ciepłe koce</p>
                    </div>
                </div>
                <div className='btn-paginate'>
                    <button onClick={handleClick} value={1}>1</button>
                    <button onClick={handleClick} value={2}>2</button>
                    <button onClick={handleClick} value={3}>3</button>
                </div>
            </section>
        )
    } else if ( page == 2 ) {
        return (
            <section className='section--table container'>
                <div className={'homeHelpTable'}>
                    <div className='helpTable--row'>
                        <span><p>Fundacja “2”</p><p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p></span>
                        <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                    </div>
                    <div className='helpTable--row'>
                        <span><p>Fundacja “3”</p><p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p></span>
                        <p>ubrania, meble, zabawki</p>
                    </div>
                    <div className='helpTable--row'>
                        <span><p>Fundacja “4”</p><p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p></span>
                        <p>ubrania, jedzenie, ciepłe koce</p>
                    </div>
                </div>
                <div className='btn-paginate'>
                    <button onClick={handleClick} value={1}>1</button>
                    <button onClick={handleClick} value={2}>2</button>
                    <button onClick={handleClick} value={3}>3</button>
                </div>
            </section>
        )
    } else if ( page == 3 ){
        return (
            <section className='section--table container'>
                <div className={'homeHelpTable'}>
                    <div className='helpTable--row'>
                        <span><p>Fundacja “5”</p><p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p></span>
                        <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                    </div>
                    <div className='helpTable--row'>
                        <span><p>Fundacja “6”</p><p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p></span>
                        <p>ubrania, meble, zabawki</p>
                    </div>
                    <div className='helpTable--row'>
                        <span><p>Fundacja “7”</p><p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p></span>
                        <p>ubrania, jedzenie, ciepłe koce</p>
                    </div>
                </div>
                <div className='btn-paginate'>
                    <button onClick={handleClick} value={1}>1</button>
                    <button onClick={handleClick} value={2}>2</button>
                    <button onClick={handleClick} value={3}>3</button>
                </div>
            </section>
        )
    } else {return <a>błąd</a>}
}
//     return (
//         <section className='section--table container'>
//             <div className={'homeHelpTable'}>
//                 <div className='helpTable--row'>
//                     <span><p>Organizacja “Lorem Ipsum 2”</p><p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p></span>
//                     <p>Egestas, sed, tempus</p>
//                 </div>
//                 <div className='helpTable--row'>
//                     <span><p>Organizacja “Lorem Ipsum 2”</p><p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p></span>
//                     <p>Egestas, sed, tempus</p>
//                 </div>
//                 <div className='helpTable--row'>
//                     <span><p>Organizacja “Lorem Ipsum 2”</p><p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p></span>
//                     <p>Egestas, sed, tempus</p>
//                 </div>
//             </div>
//             <div className='btn-paginate'>
//                 <button onClick={handleClick} value={1}>1</button>
//                 <button onClick={handleClick} value={2}>2</button>
//                 <button onClick={handleClick} value={3}>3</button>
//             </div>
//         </section>
//     )
// }