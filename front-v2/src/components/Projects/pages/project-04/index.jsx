import React from 'react';
import './ProjectPage.css';

class Project04Page extends React.Component {
    componentDidMount() {
        document.body.classList.add('page--project');
    }

    componentWillUnmount() {
        document.body.classList.remove('page--project');
    }

    render() {
        return (
            <main className="p04-page">
                <div className="container p04-container">
                    <div className="p04-header">
                        <div className="p04-header__left">
                            <h1 className="p04-title">LW 232 – Двухэтажный дом 232 м²</h1>
                            <div className="p04-subtitle">Газобетон для постоянного проживания</div>
                            <div className="p04-tech">Технология: газобетон</div>
                        </div>

                        <a className="p04-back" href="/#projects">Назад к проектам</a>
                    </div>

                    <div className="p04-media">
                        <img
                            className="p04-image"
                            src="/images/plan-4.png"
                            alt="Двухэтажный дом 232 м²"
                            loading="eager"
                        />
                    </div>

                    <div className="p04-meta">
                        <div className="p04-meta__item">
                            <span className="p04-meta__label">Площадь</span>
                            <span className="p04-meta__value">232 м²</span>
                        </div>
                        <div className="p04-meta__item">
                            <span className="p04-meta__label">Этажность</span>
                            <span className="p04-meta__value">2 этажа</span>
                        </div>
                        <div className="p04-meta__item">
                            <span className="p04-meta__label">Назначение</span>
                            <span className="p04-meta__value">Постоянное проживание</span>
                        </div>
                    </div>

                    <div className="p04-text">
                        <p className="p04-paragraph">
                            Просторный двухэтажный дом площадью 232 м² — проект для комфортной жизни семьи, ценящей пространство, приватность и продуманную планировку. Дом спроектирован для постоянного проживания, с чётким зонированием по этажам и логичной организацией всех жилых и технических помещений.
                        </p>

                        <p className="p04-paragraph p04-paragraph--label">Архитектурная концепция</p>

                        <p className="p04-paragraph">
                            Дом выполнен в газобетоне — практичном и тёплом материале, оптимальном для ПМЖ. Планировка построена по классическому принципу: первый этаж — общественный и гостевой, второй этаж — полностью приватный. Такое решение обеспечивает комфорт для семьи, позволяет принимать гостей и одновременно сохранять личное пространство каждого.
                        </p>

                        <p className="p04-paragraph p04-paragraph--label">Планировка первого этажа</p>

                        <div className="p04-media p04-media--plan">
                            <img
                                className="p04-image p04-image--plan"
                                src="/images/plan-4-1.png"
                                alt="Планировка первого этажа"
                                loading="lazy"
                            />
                        </div>

                        <p className="p04-paragraph">
                            Первый этаж формирует основную зону жизни дома. Кухня-гостиная 34,5 м² — центральное пространство с панорамным остеклением и выходом на террасу. Комната легко зонируется на кухню, обеденную группу и зону отдыха, оставаясь светлой и визуально просторной.
                        </p>

                        <p className="p04-paragraph">
                            Также на первом этаже предусмотрены спальня 12,4 м² — удобна как гостевая или спальня для старших членов семьи. Санузел 6,5 м². Котельная 9,1 м² — подходит для размещения всех инженерных систем дома. Тамбур 10,1 м² с местами хранения, защищающий жилую зону от холода и грязи. Холл с лестницей, формирующий удобную связь между этажами.
                        </p>

                        <p className="p04-paragraph">
                            Из гостиной есть выход на террасу площадью 37,6 м², которая становится естественным продолжением дома в тёплое время года.
                        </p>

                        <p className="p04-paragraph p04-paragraph--label">Планировка второго этажа</p>

                        <div className="p04-media p04-media--plan">
                            <img
                                className="p04-image p04-image--plan"
                                src="/images/plan-4-2.png"
                                alt="Планировка второго этажа"
                                loading="lazy"
                            />
                        </div>

                        <p className="p04-paragraph">
                            Второй этаж полностью отведён под приватную зону семьи. Здесь расположены мастер-спальня 16,7 м² с собственной гардеробной 7,1 м² и отдельным санузлом. Две спальни площадью 18,6 м² и 15,1 м² — для детей, гостей или кабинета. Общий санузел 8,5 м². Холл 8 м², обеспечивающий удобный доступ ко всем помещениям.
                        </p>

                        <p className="p04-paragraph">
                            Такое решение позволяет каждому члену семьи иметь личное пространство, не перегружая планировку лишними коридорами.
                        </p>

                        <p className="p04-paragraph p04-paragraph--label">Для кого подойдёт этот дом</p>

                        <p className="p04-paragraph">
                            Семье с детьми, планирующей жить за городом постоянно. Заказчикам, которым важно разделение общественной и приватной зон. Тем, кто ценит просторные помещения и удобную инженерную инфраструктуру. Покупателям, рассматривающим дом на долгие годы без необходимости перепланировок.
                        </p>

                        <p className="p04-paragraph p04-paragraph--label">Ключевые преимущества проекта</p>

                        <p className="p04-paragraph">
                            232 м² — полноценный семейный дом без компромиссов. Газобетон — надёжный и тёплый материал для ПМЖ. Кухня-гостиная с панорамным остеклением и выходом на террасу. Спальня на первом этаже для гостей или старших членов семьи. Мастер-спальня с гардеробной и собственным санузлом. Три санузла в доме — удобство для всей семьи. Чёткое зонирование по этажам: общественное внизу, приватное наверху.
                        </p>
                    </div>
                </div>
            </main>
        );
    }
}

export default Project04Page;