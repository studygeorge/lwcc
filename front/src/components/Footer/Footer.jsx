// lwcc/front/src/components/Footer/Footer.jsx
import React from 'react';
import { withRouter } from '../../withRouter';
import { DataService } from '../../services/DataService';
import './Footer.css';

/**
 * Компонент подвала сайта
 */
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: DataService.getContacts()
        };
    }

    goHome = (after) => {
        const { location, navigate } = this.props;

        const runAfter = () => {
            if (typeof after === 'function') after();
        };

        if (location && location.pathname !== '/') {
            navigate('/');
            setTimeout(runAfter, 0);
            return;
        }

        runAfter();
    };

    scrollToSection = (sectionId) => {
        this.goHome(() => {
            const element = document.querySelector(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        });
    };

    scrollToTop = () => {
        this.goHome(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    };

    handleBrandClick = () => {
        this.goHome(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    };

    render() {
        const { contact } = this.state;

        return (
            <footer className="footer">
                <div className="footer__container">
                    <div className="footer__main">
                        <div className="footer__column footer__column--large">
                            <div className="footer__brand">
                                <button
                                    type="button"
                                    className="footer__logo"
                                    onClick={this.handleBrandClick}
                                    aria-label="Перейти на главную"
                                >
                                    LAKEWOOD
                                </button>

                                <p className="footer__tagline">
                                    Строительство загородных домов под ключ.
                                    Полный цикл от проектирования до сдачи объекта.
                                </p>
                            </div>

                            <button
                                className="footer__top-button"
                                onClick={this.scrollToTop}
                                aria-label="Наверх"
                                type="button"
                            >
                                <span>НАВЕРХ</span>
                                <div className="footer__top-circle">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M12 19V5M12 5L5 12M12 5L19 12"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </button>
                        </div>

                        <div className="footer__column">
                            <h4 className="footer__heading">НАВИГАЦИЯ</h4>
                            <nav className="footer__nav">
                                <button
                                    type="button"
                                    onClick={() => this.scrollToSection('#about')}
                                    className="footer__link"
                                >
                                    О компании
                                </button>

                                <button
                                    type="button"
                                    onClick={() => this.scrollToSection('#services')}
                                    className="footer__link"
                                >
                                    Услуги
                                </button>

                                <button
                                    type="button"
                                    onClick={() => this.scrollToSection('#projects')}
                                    className="footer__link"
                                >
                                    Проекты
                                </button>

                                <button
                                    type="button"
                                    onClick={() => this.scrollToSection('#gallery')}
                                    className="footer__link"
                                >
                                    Галерея
                                </button>

                                <button
                                    type="button"
                                    onClick={() => this.scrollToSection('#contacts')}
                                    className="footer__link"
                                >
                                    Контакты
                                </button>
                            </nav>
                        </div>

                        <div className="footer__column">
                            <h4 className="footer__heading">КОНТАКТЫ</h4>
                            <div className="footer__contacts">
                                <a href={`tel:${contact.getPhoneFormatted()}`} className="footer__contact-link">
                                    {contact.phone}
                                </a>
                                <a href={`mailto:${contact.email}`} className="footer__contact-link">
                                    {contact.email}
                                </a>
                                <div className="footer__contact-text">{contact.address}</div>
                            </div>
                        </div>
                    </div>

                    <div className="footer__bottom">
                        <div className="footer__copyright">
                            © Lakewood. Все права защищены.
                        </div>
                        <div className="footer__legal">
                            <a
                                href="/policy.docx"
                                className="footer__legal-link"
                                download
                                aria-label="Скачать политику конфиденциальности"
                            >
                                Политика конфиденциальности
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default withRouter(Footer);
