import React, {useState} from 'react';


export function HomeHelpTable({page}) {
//     const [tableElems, setTableElems] = useState(['a','b','c','d']);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [elemsPerPage, setElemsPerPage] = useState(3);
    return (
        page==='foundation' ?
        <>
            <ul>
                <li><h1>Organizacja “Lorem Ipsum 1”</h1>
                    <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                    <h2>Egestas, sed, tempus</h2>
                </li>
                <li><h1>Organizacja “Lorem Ipsum 2”</h1>
                    <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                    <h2>Ut, aliquam, purus, sit, amet</h2>
                </li>
                <li><h1>Organizacja “Lorem Ipsum 3”</h1>
                    <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                    <h2>Mi, quis, hendrerit, dolor</h2>
                </li>
            </ul>
        </> : page==='organisation' ?
            <>

            </> :
            <>

            </>

    )


}