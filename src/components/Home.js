import React from 'react';
import {HomeHeader} from "./HomeHeader";
import {HomeThreeColumns} from "./HomeThreeColumns";
import {HomeSteps} from "./HomeSteps";
import {HomeAboutUs} from "./HomeAboutUs";
import {HomeHelp} from "./HomeHelp";
import {HomeContact} from "./HomeContact";

export function Home() {
    return (
        <>
            <h1>Home</h1>
            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeSteps/>
            <HomeAboutUs/>
            <HomeHelp/>
            <HomeContact/>
        </>
    );
}