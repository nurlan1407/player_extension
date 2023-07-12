import React, { Suspense } from "react";
import { RouterConfiguration, EndpointName } from "shared/config/routerConfig/routerConfig";
import { Route, Routes } from 'react-router-dom';

export const AppRouter = () =>{
    return(
        <Routes>
          {Object.values(RouterConfiguration).map(({ element, path }) => (
            <Route 
                key={path}
                path={path} 
                element={<Suspense fallback={<div>Loading...</div>}>
                    <div className="page-wrapper">
                        {element}
                    </div>
                </Suspense>}
            />
          ))}
        </Routes>
    )
}
