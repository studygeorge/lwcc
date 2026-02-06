// lwcc/front/src/components/Projects/pages/project-07/index.jsx
import React from 'react';
import './ProjectPage.css';

class Project07Page extends React.Component {
    componentDidMount() {
        document.body.classList.add('page--project');
    }

    componentWillUnmount() {
        document.body.classList.remove('page--project');
    }

    render() {
        return (
            <main className="p07-page">
                <div className="container p07-container">
                    <div className="p07-header">
                        <div className="p07-header__left">
                            <h1 className="p07-title">LW 58 – Каркасный дом 58 м²</h1>
                            <div className="p07-subtitle">Компактное решение для ПМЖ и дачи</div>
                            <div className="p07-tech">Технология: каркас</div>
                        </div>

                        <a className="p07-back" href="/#projects">Назад к проектам</a>
                    </div>

                    <div className="p07-media">
                        <img
                            className="p07-image"
                            src="/images/lwcc/project-7.jpg"
                            alt="Каркасный дом 58 м²"
                            loading="eager"
                        />
                    </div>

                    <div className="p07-meta">
                        <div className="p07-meta__item">
                            <span className="p07-meta__label">Площадь</span>
                            <span className="p07-meta__value">58 м² (по тёплому контуру)</span>
                        </div>
                        <div className="p07-meta__item">
                            <span className="p07-meta__label">Этажность</span>
                            <span className="p07-meta__value">1 этаж</span>
                        </div>
                        <div className="p07-meta__item">
                            <span className="p07-meta__label">Назначение</span>
                            <span className="p07-meta__value">ПМЖ и отдых за городом</span>
                        </div>
                    </div>

                    <div className="p07-text">
                        <p className="p07-paragraph">
                            Одноэтажный каркасный дом площадью 58 м² по тёплому контуру — продуманное решение для постоянного проживания и отдыха за городом. Проект сочетает компактность, функциональность и комфорт городской квартиры в формате собственного дома.
                        </p>

                        <p className="p07-paragraph">
                            Планировка построена по принципу чёткого зонирования: приватная и общественная части разделены, что делает дом удобным как для одного человека, так и для пары или небольшой семьи.
                        </p>

                        <p className="p07-paragraph p07-paragraph--label">Продуманная планировка</p>

                        <div className="p07-media p07-media--plan">
                            <img
                                className="p07-image p07-image--plan"
                                src="/images/plan-07.png"
                                alt="Планировка каркасного дома 58 м²"
                                loading="lazy"
                            />
                        </div>

                        <p className="p07-paragraph">
                            Центром дома является кухня-гостиная 15,2 м² — светлое пространство для повседневной жизни и приёма гостей. Здесь легко разместились полноценная кухонная линия, обеденная зона и зона отдыха. Выход на террасу визуально расширяет пространство и связывает интерьер с участком.
                        </p>

                        <p className="p07-paragraph">
                            Спальня 10,9 м² расположена в тихой части дома и рассчитана на размещение полноценной кровати и системы хранения. Комната изолирована от общей зоны, что обеспечивает приватность и акустический комфорт.
                        </p>

                        <p className="p07-paragraph">
                            Санузел 3,9 м² компактный, но функциональный — вмещает душевую, унитас и раковину. Тамбур 2,6 м² служит тепловым буфером, что особенно важно для круглогодичного проживания.
                        </p>

                        <p className="p07-paragraph p07-paragraph--label">Входная группа и терраса</p>

                        <p className="p07-paragraph">
                            Проект дополнен крытым крыльцом 6,2 м², которое защищает вход от осадков и формирует аккуратный фасад. Терраса становится логичным продолжением гостиной — местом для отдыха, летних завтраков и вечерних посиделок.
                        </p>

                        <p className="p07-paragraph p07-paragraph--label">Для кого этот дом</p>

                        <p className="p07-paragraph">
                            Для ПМЖ с низкими затратами на отопление. Для дачи без компромиссов по комфорту. Для участка небольшой площади. Для тех, кто ценит простую архитектуру и рациональные решения.
                        </p>

                        <p className="p07-paragraph p07-paragraph--label">Ключевые преимущества проекта</p>

                        <p className="p07-paragraph">
                            1 этаж — удобно и безопасно. 58 м² по тёплому контуру. Функциональная планировка без пустых метров. Подходит для постоянного и сезонного проживания. Легко адаптируется под разные стили интерьера.
                        </p>
                    </div>
                </div>
            </main>
        );
    }
}

export default Project07Page;
