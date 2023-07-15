import React, {Suspense} from "react";
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from "app/providers/routes/index";
import { useAppDispatch, useAppSelector } from "store/hooks";

const App = () => {
    console.log("rgeerngjekrng")
    const a = useAppSelector(state=> state.two)
    console.log("lo    x   " + a.endpoint)
    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                { /* Navbar*/ }
                <div className="content-page">
                    <AppRouter></AppRouter>
                </div>
            </Suspense>
        </div>
    );
}


export default App