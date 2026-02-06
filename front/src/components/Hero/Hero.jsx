import React from 'react';
import { COMPANY_INFO } from '../../utils/constants';
import './Hero.css';

/**
 * Компонент главного экрана (Hero section)
 */
class Hero extends React.Component {
    handleContactClick = () => {
        const element = document.querySelector('#contacts');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    render() {
        return (
            <section className="hero">
                <div className="hero__background"></div>
                <div className="hero__container">
                    <div className="hero__content">
                        <h1 className="hero__title">
                            <span className="hero__title-main">ОТ ПРОЕКТА ДО</span>
                            <span className="hero__title-main">ГОТОВОГО ДОМА</span>
                            <span className="hero__title-sub">LAKEWOOD</span>
                        </h1>
                        <p className="hero__description">
                            Мы берем на себя всё — от идеи до готового дома, экономим ваше время
                        </p>
                        <div className="hero__actions">
                            <button 
                                className="hero__btn"
                                onClick={this.handleContactClick}
                            >
                                <span>СВЯЗАТЬСЯ</span>
                                <div className="hero__btn-circle">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;