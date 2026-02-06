import React from 'react';
import './ServiceCard.css';

/**
 * Компонент карточки услуги
 */
class ServiceCard extends React.Component {
    handleClick = () => {
        const { service } = this.props;
        console.log('Открыть проект:', service.title);
    };

    render() {
        const { service } = this.props;

        return (
            <article className="service-card" onClick={this.handleClick}>
                <div className="service-card__image-wrapper">
                    <img 
                        src={service.image} 
                        alt={service.title}
                        className="service-card__image"
                    />
                </div>
                <div className="service-card__content">
                    <h3 className="service-card__title">{service.title}</h3>
                    <p className="service-card__description">{service.description}</p>
                </div>
            </article>
        );
    }
}

export default ServiceCard;