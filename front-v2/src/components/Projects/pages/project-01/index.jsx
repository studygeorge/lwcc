// /home/lwcc/front/src/components/Projects/pages/project-01/index.jsx
import React from 'react';
import './ProjectPage.css';

class Project01Page extends React.Component {
    componentDidMount() {
        document.body.classList.add('page--project');
    }

    componentWillUnmount() {
        document.body.classList.remove('page--project');
    }

    render() {
        return (
            <main className="project-page">
                <div className="container project-page__container">
                    <div className="project-page__header">
                        <h1 className="project-page__title">Проект 01</h1>
                        <a className="project-page__back" href="/#projects">Назад к проектам</a>
                    </div>

                    <div className="project-page__media">
                        <img
                            className="project-page__image"
                            src="/images/lwcc/project-1.jpg"
                            alt="Проект 01"
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

export default Project01Page;