import React from "react";
import Nav from '../Nav/Nav';
import Countries from '../Countries/Countries';

export function Home () {
    return (
        <div>
            <Nav />
            <div>
                <Countries />
            </div>
        </div>
    )
}

export default Home;

