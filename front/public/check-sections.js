// Расширенная диагностика для проверки загрузки всех секций
setTimeout(() => {
    console.log('%c=== ПРОВЕРКА СЕКЦИЙ ===', 'color: cyan; font-size: 16px; font-weight: bold');
    
    const sections = [
        { name: 'Hero', selector: '.hero' },
        { name: 'About', selector: '#about' },
        { name: 'Projects', selector: '#projects' },
        { name: 'Services', selector: '#services' },
        { name: 'Gallery', selector: '#gallery' },
        { name: 'Contacts', selector: '#contacts' }
    ];
    
    let totalHeight = 0;
    sections.forEach(section => {
        const element = document.querySelector(section.selector);
        if (element) {
            const height = element.offsetHeight;
            totalHeight += height;
            console.log(`✓ ${section.name}: найден, высота ${height}px`);
        } else {
            console.log(`✗ ${section.name}: НЕ НАЙДЕН!`);
        }
    });
    
    console.log(`Общая высота всех секций: ${totalHeight}px`);
    console.log(`Высота окна: ${window.innerHeight}px`);
    console.log(`Должен быть скролл: ${totalHeight > window.innerHeight ? 'ДА' : 'НЕТ'}`);
    
    // Проверка body и html height
    console.log(`Body scrollHeight: ${document.body.scrollHeight}px`);
    console.log(`HTML scrollHeight: ${document.documentElement.scrollHeight}px`);
    
    console.log('%c=== КОНЕЦ ПРОВЕРКИ ===', 'color: cyan; font-size: 16px; font-weight: bold');
}, 2000);
