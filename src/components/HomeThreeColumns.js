import React from 'react';

export function HomeThreeColumns() {
    return (
        <section className='home home--columns container'>
            <div className='columns--content'>
                <div className='column'>
                    <h3>10</h3>
                    <p>Oddanych worków</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci at atque autem consequatur dolores doloribus.</p>
                </div>
                <div className='column'>
                    <h3>5</h3>
                    <p>Wspartych organizacji</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci at atque autem consequatur dolores doloribus.</p>
                </div>
                <div className='column'>
                    <h3>7</h3>
                    <p>Zorganizowanych zbiórek</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci at atque autem consequatur dolores doloribus.</p>
                </div>
            </div>
        </section>
    )
}