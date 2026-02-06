// lwcc/front/src/components/Projects/Projects.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { DataService } from '../../services/DataService';
import './Projects.css';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: DataService.getProjects(),
            activeIndex: 0,
            touchStartX: 0,
            touchEndX: 0
        };
    }

    nextProject = () => {
        this.setState(prevState => ({
            activeIndex: (prevState.activeIndex + 1) % prevState.projects.length
        }));
    };

    prevProject = () => {
        this.setState(prevState => ({
            activeIndex:
                prevState.activeIndex === 0
                    ? prevState.projects.length - 1
                    : prevState.activeIndex - 1
        }));
    };

    goToProject = (index) => {
        if (index !== this.state.activeIndex) {
            this.setState({ activeIndex: index });
        }
    };

    handleTouchStart = (e) => {
        this.setState({
            touchStartX: e.touches[0].clientX,
            touchEndX: e.touches[0].clientX
        });
    };

    handleTouchMove = (e) => {
        this.setState({ touchEndX: e.touches[0].clientX });
    };

    handleTouchEnd = () => {
        const { touchStartX, touchEndX } = this.state;
        const swipeThreshold = 50;

        if (touchStartX - touchEndX > swipeThreshold) {
            this.nextProject();
        }

        if (touchEndX - touchStartX > swipeThreshold) {
            this.prevProject();
        }
    };

    getProjectRoute = (project) => {
        const slug = project.slug ? String(project.slug) : String(project.id);
        return `/projects/${slug}`;
    };

    render() {
        const { projects, activeIndex } = this.state;

        return (
            <section className="projects" id="projects">
                <div className="container">
                    <div className="projects__header">
                        <div className="projects__heading">
                            <h2 className="projects__title">НАШИ ПРОЕКТЫ</h2>
                            <p className="projects__subtitle">
                                Представляем реализованные типовые решения. Наше основное направление — индивидуальное проектирование.
                            </p>
                        </div>

                        <div className="projects__controls">
                            <button
                                className="projects__arrow projects__arrow--prev"
                                onClick={this.prevProject}
                                aria-label="Предыдущий проект"
                                type="button"
                            >
                                ←
                            </button>

                            <button
                                className="projects__arrow projects__arrow--next"
                                onClick={this.nextProject}
                                aria-label="Следующий проект"
                                type="button"
                            >
                                →
                            </button>
                        </div>
                    </div>

                    <div
                        className="projects__viewport"
                        onTouchStart={this.handleTouchStart}
                        onTouchMove={this.handleTouchMove}
                        onTouchEnd={this.handleTouchEnd}
                    >
                        <div className="projects__stack">
                            {projects.map((project, index) => {
                                const position = index - activeIndex;
                                const isActive = index === activeIndex;
                                const isPrev = position === -1;
                                const isNext = position === 1;
                                const isVisible = Math.abs(position) <= 1;

                                return (
                                    <div
                                        key={project.id}
                                        className={`projects__card ${
                                            isActive ? 'projects__card--active' : ''
                                        } ${isPrev ? 'projects__card--prev' : ''} ${
                                            isNext ? 'projects__card--next' : ''
                                        }`}
                                        style={{
                                            opacity: isVisible ? 1 : 0,
                                            pointerEvents: isVisible ? 'auto' : 'none'
                                        }}
                                        onClick={() => !isActive && this.goToProject(index)}
                                        role="button"
                                        tabIndex={0}
                                    >
                                        <div className="projects__card-overlay" />

                                        <div className="projects__card-image-wrapper">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="projects__card-image"
                                                loading={isActive ? 'eager' : 'lazy'}
                                            />
                                        </div>

                                        <div className="projects__card-content">
                                            <div className="projects__card-top">
                                                <h3 className="projects__card-title">{project.title}</h3>

                                                <div className="projects__card-actions">
                                                    <Link
                                                        to={this.getProjectRoute(project)}
                                                        className="projects__card-more"
                                                        aria-label={`Открыть страницу проекта: ${project.title}`}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                        }}
                                                    >
                                                        ОТКРЫТЬ ПРОЕКТ
                                                    </Link>
                                                </div>

                                                <p className="projects__card-description">
                                                    {project.description}
                                                </p>
                                            </div>

                                            <div className="projects__card-bottom">
                                                <div className="projects__card-stats">
                                                    {project.floors ? (
                                                        <div className="projects__card-stat">
                                                            <span className="projects__card-stat-value">
                                                                {project.floors}
                                                            </span>
                                                            <span className="projects__card-stat-label">этажа</span>
                                                        </div>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="projects__dots">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                className={`projects__dot ${
                                    index === activeIndex ? 'projects__dot--active' : ''
                                }`}
                                onClick={() => this.goToProject(index)}
                                aria-label={`Проект ${index + 1}`}
                                type="button"
                            />
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;