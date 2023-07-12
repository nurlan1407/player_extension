import { BookMarksAsync } from "pages/bookMarks/ui/bookMarksAsync";
import React from "react";
import {RouteProps} from 'react-router-dom'

export enum EndpointName{
    BOOKMARKS = 'bookMarks',
    READ = 'read',
    NOT_FOUND = 'notFound'
}


export const RoutePath:Record< EndpointName ,string> = {
    [EndpointName.BOOKMARKS]:"/",
    [EndpointName.READ]:"/read",
    [EndpointName.NOT_FOUND]:"/*"
}


export const RouterConfiguration :Record<EndpointName,RouteProps > = {
    [EndpointName.BOOKMARKS]:{
        element:<BookMarksAsync/>,
        path: RoutePath.bookMarks
    },
    [EndpointName.READ]:{
        element:<></>,
        path:RoutePath.read
    },
    [EndpointName.NOT_FOUND]:{
        element:<div>Page Not Found</div>,
        path:RoutePath.notFound
    }
}