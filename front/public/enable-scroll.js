// Файл для обеспечения нормального скролла на ПК
(function() {
    'use strict';
    
    // Принудительно включаем скролл на html и body
    function ensureScrollEnabled() {
        const html = document.documentElement;
        const body = document.body;
        
        // Убираем любые блокирующие стили
        html.style.overflow = '';
        html.style.overflowY = 'auto';
        body.style.overflow = '';
        body.style.overflowY = 'auto';
        body.style.position = '';
        body.style.top = '';
        body.style.left = '';
        body.style.right = '';
        body.style.width = '';
        
        // Проверяем, что не заблокировано меню
        if (!html.classList.contains('menu-open')) {
            body.style.overflow = '';
            body.style.position = '';
        }
    }
    
    // Запускаем при загрузке
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', ensureScrollEnabled);
    } else {
        ensureScrollEnabled();
    }
    
    // Периодически проверяем (на случай если что-то блокирует)
    setInterval(function() {
        const html = document.documentElement;
        if (!html.classList.contains('menu-open')) {
            ensureScrollEnabled();
        }
    }, 1000);
    
    console.log('Scroll enabler loaded');
})();
