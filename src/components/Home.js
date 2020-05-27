import React from 'react';
import {HomeHeader} from "./HomeHeader";
import {HomeThreeColumns} from "./HomeThreeColumns";
import {HomeSteps} from "./HomeSteps";
import {HomeAboutUs} from "./HomeAboutUs";
import {HomeHelp} from "./HomeHelp";
import {HomeContact} from "./HomeContact";
import {NavBar} from "./NavBar";

export function Home() {
    return (
        <>
            <NavBar/>
            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeSteps/>
            <HomeAboutUs/>
            <HomeHelp/>
            <HomeContact/>
        </>
    );
}