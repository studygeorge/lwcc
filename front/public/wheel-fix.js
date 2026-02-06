// Агрессивный обработчик wheel событий - перехватываем ДО всего остального
(function() {
    'use strict';
    
    console.log('%c[WHEEL FIX] Initializing aggressive wheel handler', 'color: lime; font-weight: bold');
    
    let isScrolling = false;
    let scrollTarget = 0;
    let currentScroll = 0;
    
    // Функция плавного скролла
    function smoothScroll() {
        if (!isScrolling) return;
        
        const diff = scrollTarget - currentScroll;
        if (Math.abs(diff) < 0.5) {
            isScrolling = false;
            return;
        }
        
        currentScroll += diff * 0.1;
        window.scrollTo(0, currentScroll);
        requestAnimationFrame(smoothScroll);
    }
    
    // Перехватываем wheel ОЧЕНЬ РАНО с capture: true
    function handleWheel(e) {
        // НЕ вызываем preventDefault - пусть браузер скроллит сам!
        console.log('[WHEEL FIX] Wheel detected:', e.deltaY);
    }
    
    // Добавляем слушатель в фазе capture (самый ранний)
    window.addEventListener('wheel', handleWheel, { 
        capture: true,  // КРИТИЧНО: перехватываем в фазе capture
        passive: true   // КРИТИЧНО: не блокируем нативный скролл
    });
    
    // Дополнительно - проверяем, что body и html не заблокированы
    function ensureScrollable() {
        const html = document.documentElement;
        const body = document.body;
        
        if (body.style.overflow === 'hidden' && !html.classList.contains('menu-open')) {
            console.warn('[WHEEL FIX] Body overflow was hidden, fixing...');
            body.style.overflow = '';
            body.style.position = '';
            body.style.top = '';
        }
        
        if (html.style.overflow === 'hidden') {
            console.warn('[WHEEL FIX] HTML overflow was hidden, fixing...');
            html.style.overflow = '';
        }
    }
    
    // Проверяем каждые 100ms
    setInterval(ensureScrollable, 100);
    
    console.log('%c[WHEEL FIX] Handler installed successfully', 'color: lime; font-weight: bold');
})();
