import React from 'react';
import { DataService } from '../../services/DataService';
import './Services.css';

/**
 * Компонент раздела услуг
 */
class Services extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            services: DataService.getServices()
        };
    }

    render() {
        const { services } = this.state;

        return (
            <section className="services" id="services">
                <div className="container">
                    <div className="services__header">
                        <h2 className="services__title">КОМПЛЕКС УСЛУГ</h2>
                        <p className="services__subtitle">
                            Всё необходимое для строительства вашего дома в рамках одного договора
                        </p>
                    </div>

                    <div className="services__grid">
                        {services.map(service => (
                            <article key={service.id} className="services__card">
                                <div className="services__card-image-wrapper">
                                    <img 
                                        src={service.image} 
                                        alt={service.title}
                                        className="services__card-image"
                                    />
                                    <div className="services__card-overlay">
                                        <span className="services__card-number">{String(service.id).padStart(2, '0')}</span>
                                    </div>
                                </div>
                                <div className="services__card-content">
                                    <h3 className="services__card-title">{service.title}</h3>
                                    <p className="services__card-description">{service.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;