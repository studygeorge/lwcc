// lwcc/front/src/components/Header/Header.jsx
import React from 'react';
import { withRouter } from '../../withRouter';
import { COMPANY_INFO, NAVIGATION } from '../../utils/constants';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
            isScrolled: false,
            isDarkTheme: false
        };
        this.scrollPosition = 0;
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);

        const savedTheme = localStorage.getItem('theme');

        if (savedTheme === 'light' || savedTheme === 'dark') {
            const isDark = savedTheme === 'dark';
            this.setState({ isDarkTheme: isDark });
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            this.setState({ isDarkTheme: false });
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);

        if (this.state.isMenuOpen) {
            this.unlockScroll();
        }
    }

    handleScroll = () => {
        const isScrolled = window.scrollY > 50;
        if (isScrolled !== this.state.isScrolled) {
            this.setState({ isScrolled });
        }
    };

    lockScroll = () => {
        this.scrollPosition = window.pageYOffset;
        document.documentElement.classList.add('menu-open');
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${this.scrollPosition}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.width = '100%';
    };

    unlockScroll = () => {
        const scrollY = this.scrollPosition;
        
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.width = '';
        
        window.scrollTo(0, scrollY);
        
        setTimeout(() => {
            document.documentElement.classList.remove('menu-open');
        }, 100);
    };

    toggleMenu = () => {
        this.setState(
            prevState => ({ isMenuOpen: !prevState.isMenuOpen }),
            () => {
                if (this.state.isMenuOpen) {
                    this.lockScroll();
                } else {
                    this.unlockScroll();
                }
            }
        );
    };

    toggleTheme = () => {
        this.setState(
            prevState => ({ isDarkTheme: !prevState.isDarkTheme }),
            () => {
                const theme = this.state.isDarkTheme ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', theme);
                localStorage.setItem('theme', theme);
            }
        );
    };

    scrollToSection = (sectionId) => {
        const headerHeight = window.innerWidth <= 768 ? 45 : 50;
        
        const element = document.querySelector(sectionId);
        if (!element) {
            console.warn(`Element ${sectionId} not found`);
            return;
        }

        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };

    goHome = (callback) => {
        const { location, navigate } = this.props;

        if (location && location.pathname !== '/') {
            navigate('/');
            if (callback) {
                setTimeout(callback, 300);
            }
        } else {
            if (callback) callback();
        }
    };

    handleLogoClick = () => {
        if (this.state.isMenuOpen) {
            this.setState({ isMenuOpen: false }, () => {
                this.unlockScroll();
                this.scrollPosition = 0;
                
                this.goHome(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            });
            return;
        }

        this.goHome(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    };

    handleNavClick = (path) => {
        const closeMenuIfOpen = (callback) => {
            if (!this.state.isMenuOpen) {
                callback();
                return;
            }

            this.setState({ isMenuOpen: false }, () => {
                this.unlockScroll();
                setTimeout(callback, 150);
            });
        };

        closeMenuIfOpen(() => {
            if (path.startsWith('#')) {
                this.goHome(() => {
                    setTimeout(() => {
                        this.scrollToSection(path);
                    }, 300);
                });
                return;
            }

            this.props.navigate(path);
        });
    };

    render() {
        const { isMenuOpen, isScrolled, isDarkTheme } = this.state;

        return (
            <>
                <header className={`header ${isScrolled ? 'header--scrolled' : ''} ${isMenuOpen ? 'header--menu-open' : ''}`}>
                    <div className="container">
                        <div className="header__content">
                            <button
                                type="button"
                                className="header__logo"
                                onClick={this.handleLogoClick}
                                aria-label="Перейти на главную"
                            >
                                <span className="header__logo-text">{COMPANY_INFO.name}</span>
                            </button>

                            <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
                                {NAVIGATION.map(item => (
                                    <button
                                        type="button"
                                        key={item.id}
                                        className="header__nav-link"
                                        onClick={() => this.handleNavClick(item.path)}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </nav>

                            <div className="header__actions">
                                <button
                                    className="header__theme-toggle"
                                    onClick={this.toggleTheme}
                                    aria-label="Переключить тему"
                                    type="button"
                                >
                                    <div className={`theme-toggle__track ${!isDarkTheme ? 'theme-toggle__track--light' : ''}`}>
                                        <div className="theme-toggle__thumb">
                                            {isDarkTheme ? (
                                                <svg className="theme-toggle__icon" viewBox="0 0 24 24" fill="none">
                                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor" />
                                                </svg>
                                            ) : (
                                                <svg className="theme-toggle__icon" viewBox="0 0 24 24" fill="none">
                                                    <circle cx="12" cy="12" r="5" fill="currentColor" />
                                                    <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                </button>

                                <button
                                    className={`header__burger ${isMenuOpen ? 'header__burger--open' : ''}`}
                                    onClick={this.toggleMenu}
                                    aria-label="Меню"
                                    type="button"
                                >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                {isMenuOpen && (
                    <div
                        className="header__overlay"
                        onClick={this.toggleMenu}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                this.toggleMenu();
                            }
                        }}
                    />
                )}
            </>
        );
    }
}

export default withRouter(Header);