import React, {useState} from 'react';
// import {Pagination} from 'react-bootstrap';

export function HomeHelpTable() {
    return (
        <section className='section--table container'>
            <div className={'homeHelpTable'}>
                <div className='helpTable--row'>
                    <span><p>Organizacja “Lorem Ipsum 1”</p><p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p></span>
                    <p>Egestas, sed, tempus</p>
                </div>
                <div className='helpTable--row'>
                    <span><p>Organizacja “Lorem Ipsum 1”</p><p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p></span>
                    <p>Egestas, sed, tempus</p>
                </div>
                <div className='helpTable--row'>
                    <span><p>Organizacja “Lorem Ipsum 1”</p><p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p></span>
                    <p>Egestas, sed, tempus</p>
                </div>
            </div>
        </section>
    )
    //
    // let active = 1;
    // let items = ['a','b'];
    // for (let number = 1; number <= 3; number++) {
    //     items.push(
    //         <Pagination.Item key={number} active={number === active}>
    //             {number}
    //         </Pagination.Item>,
    //     );
    // }
    //
    // const paginationBasic = (
    //     <div>
    //         <Pagination>{items}</Pagination>
    //         <br />
    //
    //         <Pagination size="lg">{items}</Pagination>
    //         <br />
    //
    //         <Pagination size="sm">{items}</Pagination>
    //     </div>
    // );
    // return paginationBasic;
}




//     const [tableElems, setTableElems] = useState(['a','b','c','d']);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [elemsPerPage, setElemsPerPage] = useState(3);

    // let foundationList = [{'h1': 'Organizacja “Lorem Ipsum 1”', 'p': 'Quis varius quam quisque id diam vel quam elementum pulvinar.', 'h2': 'Egestas, sed, tempus'},
    //     {'h1': 'Organizacja “Lorem Ipsum 2”', 'p': 'Quis varius quam quisque id diam vel quam elementum pulvinar.', 'h2': 'Ut, aliquam, purus, sit, amet'}]
    // return (
    //     <>help</>




        // page==='foundation' ?
        // <>
        //     <ul>
        //         <li><h1>Organizacja “Lorem Ipsum 1”</h1>
        //             <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
        //             <h2>Egestas, sed, tempus</h2>
        //         </li>
        //         <li><h1>Organizacja “Lorem Ipsum 2”</h1>
        //             <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
        //             <h2>Ut, aliquam, purus, sit, amet</h2>
        //         </li>
        //         <li><h1>Organizacja “Lorem Ipsum 3”</h1>
        //             <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
        //             <h2>Mi, quis, hendrerit, dolor</h2>
        //         </li>
        //         <li><h1>Organizacja “Lorem Ipsum 4”</h1>
        //             <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
        //             <h2>Mi, quis, hendrerit, dolor</h2>
        //         </li>
        //         <li><h1>Organizacja “Lorem Ipsum 5”</h1>
        //             <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
        //             <h2>Mi, quis, hendrerit, dolor</h2>
        //         </li>
        //     </ul>
        // </> : page==='organisation' ?
        //     <>
        //
        //     </> :
        //     <>
        //
//         //     </>
//
//     )
//
//
// }