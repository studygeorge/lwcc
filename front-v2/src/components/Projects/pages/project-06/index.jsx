// lwcc/front/src/components/Projects/pages/project-06/index.jsx
import React from 'react';
import './ProjectPage.css';

class Project06Page extends React.Component {
    componentDidMount() {
        document.body.classList.add('page--project');
    }

    componentWillUnmount() {
        document.body.classList.remove('page--project');
    }

    render() {
        return (
            <main className="p06-page">
                <div className="container p06-container">
                    <div className="p06-header">
                        <div className="p06-header__left">
                            <h1 className="p06-title">LW 80 – Одноэтажный дом 80 м²</h1>
                            <div className="p06-subtitle">Компактный и функциональный</div>
                            <div className="p06-tech">Технология: каркас / газобетон</div>
                        </div>

                        <a className="p06-back" href="/#projects">Назад к проектам</a>
                    </div>

                    <div className="p06-media">
                        <img
                            className="p06-image"
                            src="/images/lwcc/project-6.png"
                            alt="Одноэтажный дом 80 м²"
                            loading="eager"
                        />
                    </div>

                    <div className="p06-meta">
                        <div className="p06-meta__item">
                            <span className="p06-meta__label">Площадь</span>
                            <span className="p06-meta__value">80 м²</span>
                        </div>
                        <div className="p06-meta__item">
                            <span className="p06-meta__label">Этажность</span>
                            <span className="p06-meta__value">1 этаж</span>
                        </div>
                        <div className="p06-meta__item">
                            <span className="p06-meta__label">Назначение</span>
                            <span className="p06-meta__value">Постоянное проживание</span>
                        </div>
                    </div>

                    <div className="p06-text">
                        <p className="p06-paragraph">
                            Компактный и функциональный одноэтажный дом площадью 80 м² — оптимальное решение для постоянного проживания семьи из 2–4 человек. Проект спроектирован без лишних коридоров, с рациональным использованием каждого метра и возможностью строительства как по каркасной технологии, так и из газобетона.
                        </p>

                        <p className="p06-paragraph p06-paragraph--label">Архитектурная идея</p>

                        <p className="p06-paragraph">
                            Дом имеет простую, логичную форму, что положительно влияет на стоимость строительства и дальнейшую эксплуатацию. Один этаж, отсутствие сложных узлов и понятная планировка делают проект удобным для жизни сегодня и в перспективе.
                        </p>

                        <p className="p06-paragraph p06-paragraph--label">Планировочное решение</p>

                        <div className="p06-media p06-media--plan">
                            <img
                                className="p06-image p06-image--plan"
                                src="/images/plan-6.jpg"
                                alt="Планировка дома 80 м²"
                                loading="lazy"
                            />
                        </div>

                        <p className="p06-paragraph">
                            Центральное пространство дома — кухня-гостиная 21,7 м² с выходом на террасу. Это место для повседневной жизни семьи: приёма пищи, отдыха, общения и приёма гостей.
                        </p>

                        <p className="p06-paragraph">
                            Приватная зона включает три изолированные спальни: спальня 9,6 м², спальня 9,7 м², спальня 9,7 м². Такое решение позволяет комфортно разместить семью с детьми, организовать кабинет или гостевую комнату.
                        </p>

                        <p className="p06-paragraph">
                            Для хранения предусмотрена отдельная гардеробная 3,9 м², что снижает необходимость в шкафах в жилых комнатах и делает интерьер более свободным.
                        </p>

                        <p className="p06-paragraph p06-paragraph--label">Инженерия и бытовые помещения</p>

                        <p className="p06-paragraph">
                            Санузел расположен компактно и удобно относительно спален. Котельная 5,2 м² подходит для размещения всего необходимого инженерного оборудования для ПМЖ. Тамбур 3,6 м² защищает дом от холода и грязи в межсезонье.
                        </p>

                        <p className="p06-paragraph p06-paragraph--label">Терраса</p>

                        <p className="p06-paragraph">
                            Проект дополнен террасой площадью 37 м², которая логично продолжает жилое пространство дома. Здесь удобно разместить обеденную зону, место для отдыха или летнюю кухню.
                        </p>

                        <p className="p06-paragraph p06-paragraph--label">Для кого этот дом</p>

                        <p className="p06-paragraph">
                            Семья с 1–2 детьми. Пара, планирующая жить за городом постоянно. Заказчики, которым важен компактный, но полноценный дом. Те, кто ищет дом под ПМЖ без переплаты за лишние метры.
                        </p>

                        <p className="p06-paragraph p06-paragraph--label">Преимущества проекта</p>

                        <p className="p06-paragraph">
                            80 м² — оптимальный метраж для ПМЖ. Три отдельные спальни. Кухня-гостиная с выходом на террасу. Отдельная гардеробная. Полноценная котельная. Возможность строительства каркас / газобетон. Подходит для участков от 6 соток.
                        </p>
                    </div>
                </div>
            </main>
        );
    }
}

export default Project06Page;
export { Project06Page };
