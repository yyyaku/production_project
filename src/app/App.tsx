import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback='loading'>
                <Navbar></Navbar>
                <div className='content-page'>
                    <Sidebar></Sidebar>
                    <AppRouter></AppRouter>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
