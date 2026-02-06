// src/App.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

import Project03Page from './components/Projects/pages/project-03';
import Project04Page from './components/Projects/pages/project-04';
import Project05Page from './components/Projects/pages/project-05';
import Project06Page from './components/Projects/pages/project-06';
import Project07Page from './components/Projects/pages/project-07';

import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errorMessage: ''
        };
    }

    componentDidCatch(error, errorInfo) {
        console.error('[App] Error caught:', error, errorInfo);
        this.setState({
            hasError: true,
            errorMessage: error.toString()
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#000',
                    color: '#fff',
                    padding: '2rem',
                    textAlign: 'center'
                }}>
                    <div>
                        <h1>Ошибка загрузки</h1>
                        <p>{this.state.errorMessage}</p>
                    </div>
                </div>
            );
        }

        try {
            return (
                <div className="app">
                    <Header />
                    <Routes>
                        <Route path="/" element={
                            <main className="app__main">
                                <Hero />
                                <About />
                                <Projects />
                                <Services />
                                <Gallery />
                                <Contacts />
                            </main>
                        } />
                        <Route path="/projects/project-03" element={<Project03Page />} />
                        <Route path="/projects/project-04" element={<Project04Page />} />
                        <Route path="/projects/project-05" element={<Project05Page />} />
                        <Route path="/projects/project-06" element={<Project06Page />} />
                        <Route path="/projects/project-07" element={<Project07Page />} />
                        <Route path="*" element={
                            <main className="app__main" style={{ padding: '6rem 0' }}>
                                <div className="container">
                                    <h1 style={{ marginBottom: '1rem' }}>Страница не найдена</h1>
                                    <a href="/" style={{ textDecoration: 'underline' }}>На главную</a>
                                </div>
                            </main>
                        } />
                    </Routes>
                    <Footer />
                </div>
            );
        } catch (error) {
            console.error('[App] Render error:', error);
            return (
                <div style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#000',
                    color: '#fff'
                }}>
                    <h1>Ошибка рендеринга: {error.toString()}</h1>
                </div>
            );
        }
    }
}

function AppWithScrollReset() {
    const location = useLocation();
    const prevLocationRef = React.useRef({ pathname: '', hash: '' });

    React.useEffect(() => {
        const prev = prevLocationRef.current;
        const curr = { pathname: location.pathname, hash: location.hash };

        if (prev.pathname !== curr.pathname) {
            prevLocationRef.current = curr;

            // ОТКЛЮЧЕНО: автоматический скролл при смене маршрута
            console.log('Auto-scroll disabled for route change');
            
            /* СТАРЫЙ КОД - закомментирован
            if (curr.hash) {
                setTimeout(() => {
                    const element = document.querySelector(curr.hash);
                    if (element) {
                        const headerHeight = window.innerWidth <= 768 ? 45 : 50;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                }, 300);
            } else {
                window.scrollTo(0, 0);
            }
            */
        } 
        else if (prev.hash !== curr.hash && curr.hash) {
            prevLocationRef.current = curr;
            
            // ОТКЛЮЧЕНО: автоматический скролл при смене хэша
            console.log('Auto-scroll disabled for hash change');
            
            /* СТАРЫЙ КОД - закомментирован
            setTimeout(() => {
                const element = document.querySelector(curr.hash);
                if (element) {
                    const headerHeight = window.innerWidth <= 768 ? 45 : 50;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
            }, 300);
            */
        }
    }, [location]);

    return <App />;
}

export default AppWithScrollReset;
export { App };