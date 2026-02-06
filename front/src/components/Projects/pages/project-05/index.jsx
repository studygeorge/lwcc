import React from 'react';
import './ProjectPage.css';

class Project05Page extends React.Component {
    componentDidMount() {
        document.body.classList.add('page--project');
    }

    componentWillUnmount() {
        document.body.classList.remove('page--project');
    }

    render() {
        return (
            <main className="p05-page">
                <div className="container p05-container">
                    <div className="p05-header">
                        <div className="p05-header__left">
                            <h1 className="p05-title">LW 115 – Одноэтажный дом 115 м²</h1>
                            <div className="p05-subtitle">Комфорт и функциональность</div>
                            <div className="p05-tech">Технология: каркас / газобетон</div>
                        </div>

                        <a className="p05-back" href="/#projects">Назад к проектам</a>
                    </div>

                    <div className="p05-media">
                        <img
                            className="p05-image"
                            src="/images/lwcc/project-5.png"
                            alt="Одноэтажный дом 115 м²"
                            loading="eager"
                        />
                    </div>

                    <div className="p05-meta">
                        <div className="p05-meta__item">
                            <span className="p05-meta__label">Площадь</span>
                            <span className="p05-meta__value">115 м² (по тёплому контуру)</span>
                        </div>
                        <div className="p05-meta__item">
                            <span className="p05-meta__label">Этажность</span>
                            <span className="p05-meta__value">1 этаж</span>
                        </div>
                        <div className="p05-meta__item">
                            <span className="p05-meta__label">Назначение</span>
                            <span className="p05-meta__value">Постоянное проживание</span>
                        </div>
                    </div>

                    <div className="p05-text">
                        <p className="p05-paragraph">
                            Этот проект — рациональный одноэтажный дом площадью 115 м² по тёплому контуру, рассчитанный на круглогодичное проживание семьи. Архитектура дома построена вокруг удобства, приватности и ощущения простора, при этом без избыточных метров и сложных решений.
                        </p>

                        <p className="p05-paragraph">
                            Планировка продумана так, чтобы дом одинаково хорошо подходил как для повседневной жизни, так и для приёма гостей.
                        </p>

                        <p className="p05-paragraph p05-paragraph--label">Сердце дома — кухня-гостиная</p>

                        <div className="p05-media p05-media--plan">
                            <img
                                className="p05-image p05-image--plan"
                                src="/images/plan-05.jpg"
                                alt="Планировка дома 115 м²"
                                loading="lazy"
                            />
                        </div>

                        <p className="p05-paragraph">
                            Центральным пространством становится кухня-гостиная 27,6 м² — светлое и открытое помещение с удобным зонированием. Здесь предусмотрены полноценная кухонная линия, обеденная зона на 4–6 человек, гостиная с диванной группой.
                        </p>

                        <p className="p05-paragraph">
                            Выход на просторную террасу 20,5 м² визуально расширяет интерьер и делает дом особенно комфортным в тёплое время года.
                        </p>

                        <p className="p05-paragraph p05-paragraph--label">Приватная зона</p>

                        <p className="p05-paragraph">
                            В доме предусмотрены две изолированные спальни. Спальня 1 — 12,1 м², отлично подойдёт под мастер-спальню. Спальня 2 — 11,4 м², универсальное решение для детской, гостевой или кабинета.
                        </p>

                        <p className="p05-paragraph">
                            Комнаты расположены в тихой части дома, отделённой от общей зоны, что обеспечивает акустический и визуальный комфорт.
                        </p>

                        <p className="p05-paragraph p05-paragraph--label">Функциональные помещения</p>

                        <p className="p05-paragraph">
                            Проект включает всё необходимое для ПМЖ. Санузел 4,7 м² с ванной. Отдельная котельная 5,0 м², соответствующая требованиям для газового и другого инженерного оборудования. Тамбур 3,8 м², работающий как тепловой буфер и зона хранения верхней одежды.
                        </p>

                        <p className="p05-paragraph p05-paragraph--label">Для кого этот проект</p>

                        <p className="p05-paragraph">
                            Для семьи из 2–4 человек. Для постоянного проживания за городом. Для тех, кто хочет одноэтажный дом без лестниц. Для участков небольшой и средней площади.
                        </p>

                        <p className="p05-paragraph p05-paragraph--label">Ключевые преимущества</p>

                        <p className="p05-paragraph">
                            115 м² по тёплому контуру. 1 этаж — комфорт и безопасность. Возможность реализации в каркасе или газобетоне. Большая кухня-гостиная с выходом на террасу. Отдельная котельная. Рациональная, легко читаемая планировка.
                        </p>
                    </div>
                </div>
            </main>
        );
    }
}

export default Project05Page;