// Диагностический скрипт для проверки скролла
console.log('%c=== ДИАГНОСТИКА СКРОЛЛА ===', 'color: yellow; font-size: 16px; font-weight: bold');

// Проверка стилей HTML
const html = document.documentElement;
const htmlStyles = window.getComputedStyle(html);
console.log('HTML overflow:', htmlStyles.overflow);
console.log('HTML overflow-y:', htmlStyles.overflowY);
console.log('HTML overflow-x:', htmlStyles.overflowX);
console.log('HTML position:', htmlStyles.position);
console.log('HTML height:', htmlStyles.height);

// Проверка стилей BODY
const body = document.body;
const bodyStyles = window.getComputedStyle(body);
console.log('BODY overflow:', bodyStyles.overflow);
console.log('BODY overflow-y:', bodyStyles.overflowY);
console.log('BODY overflow-x:', bodyStyles.overflowX);
console.log('BODY position:', bodyStyles.position);
console.log('BODY height:', bodyStyles.height);
console.log('BODY top:', bodyStyles.top);

// Проверка наличия класса menu-open
console.log('HTML has menu-open class:', html.classList.contains('menu-open'));

// Проверка всех элементов с pointer-events: none
const elementsWithPointerNone = Array.from(document.querySelectorAll('*')).filter(el => {
    const style = window.getComputedStyle(el);
    return style.pointerEvents === 'none';
});
console.log('Elements with pointer-events: none:', elementsWithPointerNone.length);
elementsWithPointerNone.slice(0, 5).forEach(el => {
    console.log(' -', el.tagName, el.className);
});

// Проверка scroll height
console.log('Document scroll height:', document.documentElement.scrollHeight);
console.log('Window inner height:', window.innerHeight);
console.log('Can scroll:', document.documentElement.scrollHeight > window.innerHeight);

// Тест события wheel
let wheelEventCount = 0;
const wheelHandler = () => {
    wheelEventCount++;
    if (wheelEventCount === 1) {
        console.log('%cWheel event РАБОТАЕТ! ✓', 'color: green; font-weight: bold');
    }
};
window.addEventListener('wheel', wheelHandler, { once: false });

setTimeout(() => {
    if (wheelEventCount === 0) {
        console.log('%cWheel event НЕ РАБОТАЕТ! ✗', 'color: red; font-weight: bold');
        console.log('Попробуйте прокрутить колесиком мыши');
    }
}, 3000);

console.log('%c=== КОНЕЦ ДИАГНОСТИКИ ===', 'color: yellow; font-size: 16px; font-weight: bold');
