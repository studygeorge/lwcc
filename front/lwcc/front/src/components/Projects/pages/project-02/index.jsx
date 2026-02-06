import React from 'react';

class Project02Page extends React.Component {
    render() {
        return (
            <main className="app__main" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <h1 style={{ marginBottom: '1rem' }}>Project 02</h1>
                    <p style={{ opacity: 0.8, marginBottom: '2rem' }}>
                        Заглушка страницы проекта.
                    </p>
                    <a href="/#projects" style={{ textDecoration: 'underline' }}>
                        Назад к проектам
                    </a>
                </div>
            </main>
        );
    }
}

export default Project02Page;
