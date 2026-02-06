import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

/**
 * Точка входа в приложение (JSX версия)
 * Инициализирует React приложение и монтирует его в DOM
 */

// Создание корневого элемента React
const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error('Failed to find the root element');
}

const root = ReactDOM.createRoot(rootElement);

// Рендер приложения
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

// Отчет производительности (опционально)
const reportWebVitals = (onPerfEntry) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
            onCLS(onPerfEntry);
            onFID(onPerfEntry);
            onFCP(onPerfEntry);
            onLCP(onPerfEntry);
            onTTFB(onPerfEntry);
        }).catch(() => {
            // Игнорируем ошибки web-vitals
        });
    }
};

// Вызов отчета производительности
reportWebVitals();

// Hot Module Replacement для разработки
if (import.meta.hot) {
    import.meta.hot.accept();
}