import React, { Suspense } from "react";
import { RouterConfiguration, EndpointName } from "shared/config/routerConfig/routerConfig";
import { Route, Routes } from 'react-router-dom';
import { NavEndpoint } from "shared/config/navigation/store/navigationState";
import { useAppSelector } from "store/hooks";
import { stat } from "fs";
import { BookMarksAsync } from "pages/bookMarks/ui/bookMarksAsync";

export const AppRouter = () =>{
    const {endpoint} = useAppSelector(state => state.one)
    console.log(endpoint);
    
    return(
        <div>
      <Suspense fallback={<div>Loading...</div>}>
        {endpoint === NavEndpoint.BOOKMARKS && <BookMarksAsync />}
        {endpoint === NavEndpoint.NOT_FOUND && <div>Ошибка</div>}
        {endpoint === NavEndpoint.READ && <div>Read</div>}
      </Suspense>
    </div>
    )
}

