import React from 'react';
import { DataService } from '../../services/DataService';
import './Gallery.css';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: DataService.getProjects(),
            hoveredIndex: null
        };
    }

    handleMouseEnter = (index) => {
        this.setState({ hoveredIndex: index });
    };

    handleMouseLeave = () => {
        this.setState({ hoveredIndex: null });
    };

    render() {
        const { projects, hoveredIndex } = this.state;

        return (
            <section className="gallery" id="gallery">
                <div className="gallery__container">
                    <div className="gallery__content">
                        <div className="gallery__left">
                            <h2 className="gallery__title">ГАЛЕРЕЯ</h2>
                            
                            <p className="gallery__description">
                                КАЖДЫЙ ПРОЕКТ — ЭТО ДОМ, 
                                ГДЕ ВСЁ ПРОДУМАНО ДО МЕЛОЧЕЙ. РЕАЛЬНЫЕ 
                                ПРИМЕРЫ ПОМОГУТ ПРЕДСТАВИТЬ, КАК 
                                МОЖЕТ ВЫГЛЯДЕТЬ ВАШЕ БУДУЩЕЕ ЖИЛЬЁ. 
                                ОЦЕНИТЕ СТИЛЬ, КАЧЕСТВО И ПОДХОД К 
                                РАБОТЕ, ПРОЛИСТАВ НАШУ ГАЛЕРЕЮ. 
                                НИКАКИХ ШАБЛОНОВ, ТОЛЬКО ПРАКТИЧНЫЕ 
                                РЕШЕНИЯ И ПРОФЕССИОНАЛЬНЫЙ РЕЗУЛЬТАТ.
                            </p>

                            <a href="/gallery" className="gallery__button">
                                <span>ОЗНАКОМИТЬСЯ</span>
                                <div className="gallery__button-circle">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </a>
                        </div>

                        <div className="gallery__right">
                            <div className="gallery__grid">
                                {projects.slice(0, 4).map((project, index) => (
                                    <div
                                        key={project.id}
                                        className={`gallery__item gallery__item--${index + 1} ${hoveredIndex === index ? 'gallery__item--active' : ''} ${hoveredIndex !== null && hoveredIndex !== index ? 'gallery__item--inactive' : ''}`}
                                        onMouseEnter={() => this.handleMouseEnter(index)}
                                        onMouseLeave={this.handleMouseLeave}
                                    >
                                        <div className="gallery__item-inner">
                                            <img 
                                                src={project.image} 
                                                alt={project.title}
                                                className="gallery__image"
                                            />
                                            <div className="gallery__overlay">
                                                <div className="gallery__overlay-content">
                                                    <h3 className="gallery__item-title">{project.title}</h3>
                                                    <p className="gallery__item-subtitle">{project.area}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Gallery;
