// Агрессивный обработчик wheel событий - РУЧНОЙ СКРОЛЛ
(function() {
    'use strict';
    
    console.log('%c[WHEEL FIX] Initializing manual scroll handler', 'color: lime; font-weight: bold');
    
    let isScrolling = false;
    let targetScroll = window.pageYOffset || 0;
    
    // Плавный скролл вручную
    function animateScroll() {
        if (!isScrolling) return;
        
        const currentScroll = window.pageYOffset;
        const diff = targetScroll - currentScroll;
        
        if (Math.abs(diff) < 1) {
            window.scrollTo(0, targetScroll);
            isScrolling = false;
            return;
        }
        
        const step = diff * 0.15;
        window.scrollTo(0, currentScroll + step);
        requestAnimationFrame(animateScroll);
    }
    
    // Перехватываем wheel и скроллим ВРУЧНУЮ
    function handleWheel(e) {
        console.log('[WHEEL FIX] Wheel detected:', e.deltaY);
        
        // Получаем текущую позицию
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop || 0;
        
        // Вычисляем новую позицию
        const scrollAmount = e.deltaY * 2; // Множитель для скорости
        targetScroll = Math.max(0, currentScroll + scrollAmount);
        
        // Ограничиваем максимум
        const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
        targetScroll = Math.min(targetScroll, maxScroll);
        
        // Запускаем анимацию
        if (!isScrolling) {
            isScrolling = true;
            requestAnimationFrame(animateScroll);
        }
    }
    
    // Добавляем слушатель в фазе capture
    window.addEventListener('wheel', handleWheel, { 
        capture: true,
        passive: true
    });
    
    // КРИТИЧНО: Убираем высоту 100vh с body и html
    function fixHeights() {
        const html = document.documentElement;
        const body = document.body;
        
        // Убираем все блокировки
        html.style.height = '';
        body.style.height = '';
        html.style.minHeight = '';
        body.style.minHeight = '';
        
        // Разрешаем overflow
        if (body.style.overflow === 'hidden' && !html.classList.contains('menu-open')) {
            body.style.overflow = '';
            body.style.position = '';
            body.style.top = '';
        }
        
        if (html.style.overflow === 'hidden') {
            html.style.overflow = '';
        }
        
        // Проверяем scrollHeight
        const scrollHeight = Math.max(
            body.scrollHeight,
            document.documentElement.scrollHeight
        );
        
        if (scrollHeight > window.innerHeight) {
            console.log('[WHEEL FIX] Content height:', scrollHeight, 'Window height:', window.innerHeight);
        }
    }
    
    // Проверяем постоянно
    setInterval(fixHeights, 100);
    
    // Сразу при загрузке
    fixHeights();
    
    console.log('%c[WHEEL FIX] Manual scroll handler installed!', 'color: lime; font-weight: bold');
})();
