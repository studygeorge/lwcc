import React from 'react';
import { ABOUT_STATS } from '../../utils/constants';
import './About.css';

/**
 * Компонент блока "О нас"
 */
class About extends React.Component {
    render() {
        return (
            <section className="about" id="about">
                <div className="container">
                    <h2 className="about__title">О НАС</h2>
                    
                    <div className="about__content">
                        <div className="about__text">
                            <p className="about__description">
                                Lakewood специализируется на строительстве загородных домов под ключ. 
                                Мы создаём пространства для жизни, где каждая деталь продумана до мелочей. 
                                Наша команда профессионалов реализует проекты любой сложности — 
                                от проектирования до финальной отделки и благоустройства территории.
                            </p>
                            <p className="about__description">
                                Мы берем на себя полный цикл работ: подбор участка, проектирование, 
                                строительство фундамента, возведение стен и кровли, инженерные системы, 
                                внутреннюю и внешнюю отделку. Работаем с современными материалами 
                                и технологиями, обеспечивая высокое качество на каждом этапе.
                            </p>
                        </div>

                        <div className="about__stats">
                            {ABOUT_STATS.map((stat, index) => (
                                <div key={index} className="about__stat-item">
                                    <div className="about__stat-number">{stat.value}</div>
                                    <div className="about__stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
