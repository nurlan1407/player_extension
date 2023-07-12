import React, {Suspense} from "react";
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from "app/providers/routes/index";

const App = () => {
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