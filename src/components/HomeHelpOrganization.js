import React, {useState} from 'react';

export function HomeHelpOrganization() {
    const [pageOrg, setPageOrg] = useState(1);
    const handleClick = (e) => {
        setPageOrg(e.target.value);
    }
    if (pageOrg == 1) {
        return (
            <section className='section--table container'>
                <div className={'homeHelpTable'}>
                    <div className='helpTable--row'>
                        <span><p>Organizacja “Lorem Ipsum 1”</p>
                            <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p></span>
                        <p>Egestas, sed, tempus</p>
                    </div>
                    <div className='helpTable--row'>
                        <span><p>Organizacja “Lorem Ipsum 2”</p>
                            <p>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p></span>
                        <p>Ut, aliquam, purus, sit, amet</p>
                    </div>
                    <div className='helpTable--row'>
                        <span><p>Organizacja “Lorem Ipsum 3”</p>
                            <p>Scelerisque in dictum non consectetur a erat nam.</p></span>
                        <p>Mi, quis, hendrerit, dolor</p>
                    </div>
                </div>
                <div className='btn-paginate'>
                    <button onClick={handleClick} value={1}>1</button>
                    <button onClick={handleClick} value={2}>2</button>
                    {/*<button onClick={handleClick} value={3}>3</button>*/}
                </div>
            </section>
        )
    } else if (pageOrg == 2) {
        return (
            <section className='section--table container'>
                <div className={'homeHelpTable'}>
                    <div className='helpTable--row'>
                        <span><p>Organizacja “Lorem Ipsum 4”</p>
                            <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p></span>
                        <p>Egestas, sed, tempus</p>
                    </div>
                    <div className='helpTable--row'>
                        <span><p>Organizacja “Lorem Ipsum 5”</p>
                            <p>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p></span>
                        <p>Ut, aliquam, purus, sit, amet</p>
                    </div>
                    <div className='helpTable--row'>
                        <span><p>Organizacja “Lorem Ipsum 6”</p>
                            <p>Scelerisque in dictum non consectetur a erat nam.</p></span>
                        <p>Mi, quis, hendrerit, dolor</p>
                    </div>
                </div>
                <div className='btn-paginate'>
                    <button onClick={handleClick} value={1}>1</button>
                    <button onClick={handleClick} value={2}>2</button>
                    {/*<button onClick={handleClick} value={3}>3</button>*/}
                </div>
            </section>
        )
    } else {return <a>błąd</a>}
}


