import React from 'react';

class Project05Page extends React.Component {
    render() {
        return (
            <main className="app__main" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <h1 style={{ marginBottom: '1rem' }}>Одноэтажный дом 115 м²</h1>
                    <p style={{ opacity: 0.85, marginBottom: '2rem' }}>
                        Заглушка страницы проекта. Текст будет заменён на описание.
                    </p>
                    <a href="/#projects" style={{ textDecoration: 'underline' }}>
                        Назад к проектам
                    </a>
                </div>
            </main>
        );
    }
}

export default Project05Page;
