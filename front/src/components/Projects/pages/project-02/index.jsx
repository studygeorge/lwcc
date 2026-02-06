import React from 'react';
import './ProjectPage.css';

class Project02Page extends React.Component {
    render() {
        return (
            <main className="project-page">
                <div className="container project-page__container">
                    <div className="project-page__header">
                        <h1 className="project-page__title">Проект 02</h1>
                        <a className="project-page__back" href="/#projects">Назад к проектам</a>
                    </div>

                    <div className="project-page__media">
                        <img
                            className="project-page__image"
                            src="/images/lwcc/project-2.jpg"
                            alt="Проект 02"
                        />
                    </div>

                    <div className="project-page__content">
                        <p className="project-page__lead">
                            Заглушка страницы проекта. Текст, параметры и галерея будут добавлены.
                        </p>
                    </div>
                </div>
            </main>
        );
    }
}

export default Project02Page;