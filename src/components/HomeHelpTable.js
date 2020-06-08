import React from 'react';
import {HomeHelpOrganization} from "./HomeHelpOrganization";
import {HomeHelpFoundation} from "./HomeHelpFoundation";
import {HomeHelpLocal} from "./HomeHelpLocal";

export function HomeHelpTable({page}) {
    if (page === 'organization') {
        return (
            <HomeHelpOrganization/>
        )
    } else if (page === 'foundation') {
        return (
            <HomeHelpFoundation/>
        )
    } else {
        return (
            <HomeHelpLocal/>
        )
    }
}
