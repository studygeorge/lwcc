import React from 'react';
import './ProjectPage.css';

class Project03Page extends React.Component {
    componentDidMount() {
        document.body.classList.add('page--project');
    }

    componentWillUnmount() {
        document.body.classList.remove('page--project');
    }

    render() {
        return (
            <main className="p03-page">
                <div className="container p03-container">
                    <div className="p03-header">
                        <div className="p03-header__left">
                            <h1 className="p03-title">LW 110 – Одноэтажный дом 110 м²</h1>
                            <div className="p03-subtitle">Мастер-спальня и большая терраса</div>
                            <div className="p03-tech">Технология: каркас / газобетон</div>
                        </div>

                        <a className="p03-back" href="/#projects">Назад к проектам</a>
                    </div>

                    <div className="p03-media">
                        <img
                            className="p03-image"
                            src="/images/lwcc/project-3.png"
                            alt="Одноэтажный дом 110 м²"
                            loading="eager"
                        />
                    </div>

                    <div className="p03-meta">
                        <div className="p03-meta__item">
                            <span className="p03-meta__label">Площадь</span>
                            <span className="p03-meta__value">110 м² (по тёплому контуру)</span>
                        </div>
                        <div className="p03-meta__item">
                            <span className="p03-meta__label">Этажность</span>
                            <span className="p03-meta__value">1 этаж</span>
                        </div>
                        <div className="p03-meta__item">
                            <span className="p03-meta__label">Назначение</span>
                            <span className="p03-meta__value">Постоянное проживание</span>
                        </div>
                    </div>

                    <div className="p03-text">
                        <p className="p03-paragraph">
                            Продуманный одноэтажный дом площадью 110 м² по тёплому контуру — комфортное решение для постоянного проживания семьи из 3–5 человек. Проект сочетает удобную планировку без лишних метров, чёткое зонирование и возможность строительства как по каркасной технологии, так и из газобетона.
                        </p>

                        <p className="p03-paragraph p03-paragraph--label">Архитектурная концепция</p>

                        <p className="p03-paragraph">
                            Дом спроектирован в одном уровне — без лестниц и перепадов, что делает его удобным для жизни в любом возрасте. В основе планировки — разделение на приватную и общественную зоны, благодаря чему в доме комфортно жить всей семьёй и принимать гостей, не мешая друг другу.
                        </p>

                        <p className="p03-paragraph p03-paragraph--label">Планировочное решение</p>

                        <div className="p03-media p03-media--plan">
                            <img
                                className="p03-image p03-image--plan"
                                src="/plan-3.png"
                                alt="Планировка дома 110 м²"
                                loading="lazy"
                            />
                        </div>

                        <p className="p03-paragraph">
                            Центром дома является просторная кухня-гостиная площадью 24,9 м² с выходом на большую террасу. Это основное пространство для совместного времяпрепровождения, приёма гостей и семейных вечеров.
                        </p>

                        <p className="p03-paragraph">
                            Приватная зона включает мастер-спальню 10,8 м² с собственной гардеробной и санузлом — отдельное пространство для родителей. Две изолированные спальни 11,1 м² и 8,1 м² подойдут для детей, гостей или кабинета. Второй полноценный санузел расположен рядом со спальнями.
                        </p>

                        <p className="p03-paragraph">
                            Техническая и входная зона организована максимально рационально. Холл 9,6 м² с местами хранения. Котельная 6,3 м², подходящая для всех инженерных систем. Отдельное место под стиральную и сушильную технику.
                        </p>

                        <p className="p03-paragraph p03-paragraph--label">Терраса — продолжение дома</p>

                        <p className="p03-paragraph">
                            Большая терраса площадью более 90 м² превращает дом в полноценное загородное пространство. Здесь можно организовать зону отдыха, летнюю кухню, обеденную группу или место для семейных праздников.
                        </p>

                        <p className="p03-paragraph p03-paragraph--label">Кому подойдёт этот проект</p>

                        <p className="p03-paragraph">
                            Семье с детьми, ищущей удобный дом для ПМЖ. Парам, которые ценят комфорт, приватность и отсутствие второго этажа. Заказчикам, планирующим дом на будущее, без необходимости переделок. Тем, кто хочет гибкость в выборе технологии строительства.
                        </p>

                        <p className="p03-paragraph p03-paragraph--label">Ключевые преимущества</p>

                        <p className="p03-paragraph">
                            110 м² — оптимальный метраж без лишних затрат. Мастер-спальня с гардеробной и санузлом. Три изолированные спальни. Большая кухня-гостиная с выходом на террасу. Возможность строительства каркас / газобетон. Удобен для участков от 6 соток.
                        </p>
                    </div>
                </div>
            </main>
        );
    }
}

export default Project03Page;