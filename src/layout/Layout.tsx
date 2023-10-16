import {Outlet} from 'react-router-dom';
import {Helmet, HelmetProvider} from 'react-helmet-async'
import {useAppSelector} from "../hooks/redux";

export function Layout() {
    const index = useAppSelector(state => state.main.robotsMetaIndex)

    return (
        <HelmetProvider>
            <Helmet>
                <meta name="robots" content={index ? 'index' : 'noindex'} />
            </Helmet>
            <Outlet/>
        </HelmetProvider>
    )
}