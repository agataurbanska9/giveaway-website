import React from 'react';

export function HomeHelpLocal() {
    return (
        <section className='section--table container'>
            <div className={'homeHelpTable'}>
                <div className='helpTable--row'>
                    <span><p>Zbiórka “Lorem Ipsum 3”</p><p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p></span>
                    <p>Egestas, sed, tempus</p>
                </div>
                <div className='helpTable--row'>
                    <span><p>Zbiórka “Lorem Ipsum 3”</p><p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p></span>
                    <p>Egestas, sed, tempus</p>
                </div>
                <div className='helpTable--row'>
                    <span><p>Zbiórka “Lorem Ipsum 3”</p><p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p></span>
                    <p>Egestas, sed, tempus</p>
                </div>
            </div>
            <div className='btn-paginate'>
                <button value={1}>1</button>
            </div>
        </section>
    )
}