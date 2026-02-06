// ПРОСТОЙ и БЫСТРЫЙ обработчик wheel - без анимации, нативный скролл
(function() {
    'use strict';
    
    console.log('%c[WHEEL FIX] Initializing NATIVE scroll handler', 'color: lime; font-weight: bold');
    
    // Просто убираем блокировки и позволяем браузеру скроллить
    function fixHeights() {
        const html = document.documentElement;
        const body = document.body;
        
        // Убираем все блокировки
        html.style.height = '';
        body.style.height = '';
        html.style.minHeight = '';
        body.style.minHeight = '';
        
        // Разрешаем overflow
        if (!html.classList.contains('menu-open')) {
            if (body.style.overflow === 'hidden') {
                body.style.overflow = '';
                body.style.position = '';
                body.style.top = '';
            }
            if (html.style.overflow === 'hidden') {
                html.style.overflow = '';
            }
        }
    }
    
    // Проверяем только при загрузке и редко
    fixHeights();
    setInterval(fixHeights, 1000); // Только раз в секунду, не каждые 100ms
    
    // Слушаем wheel только для логирования (не вмешиваемся!)
    window.addEventListener('wheel', function(e) {
        // Ничего не делаем - пусть браузер скроллит сам!
    }, { passive: true });
    
    console.log('%c[WHEEL FIX] Native scroll enabled!', 'color: lime; font-weight: bold');
})();
