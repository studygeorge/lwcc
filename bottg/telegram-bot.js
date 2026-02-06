const TelegramBot = require('node-telegram-bot-api');

// Токен вашего бота
const token = '8308614851:AAHJCjqO_iQyTbLyFlNeHXy73ksvmU6xOtg';

// ID пользователя, которому будут приходить заявки
const ADMIN_CHAT_ID = 5031906741;

// Создаем бота с поллингом
const bot = new TelegramBot(token, { 
    polling: {
        interval: 1000,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
});

console.log('Telegram бот запущен');
console.log('Admin Chat ID:', ADMIN_CHAT_ID);
console.log('Время запуска:', new Date().toLocaleString('ru-RU'));

// Обработчик команды /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const firstName = msg.from.first_name || 'Пользователь';
    
    console.log(`Пользователь подключился: ${firstName}, Chat ID: ${chatId}`);
    
    bot.sendMessage(chatId, `Здравствуйте, ${firstName}.

Бот для приема заявок с сайта Lakewood.

${chatId === ADMIN_CHAT_ID ? 'Вы администратор. Все заявки будут приходить в этот чат.' : 'Заявки приходят только администратору.'}`);
});

// Обработка всех остальных сообщений
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    // Игнорируем команды
    if (text && text.startsWith('/')) {
        return;
    }

    // Отвечаем на обычные сообщения
    if (text) {
        bot.sendMessage(chatId, 'Бот для приема заявок. Отправьте /start для начала работы.');
    }
});

// Обработка ошибок
bot.on('polling_error', (error) => {
    console.error('Ошибка polling:', error.code, error.message);
    
    if (error.code === 'EFATAL') {
        console.log('Критическая ошибка, перезапуск...');
        setTimeout(() => {
            process.exit(1);
        }, 5000);
    }
});

bot.on('error', (error) => {
    console.error('Ошибка бота:', error);
});

// Graceful shutdown
process.on('SIGINT', async () => {
    console.log('Получен сигнал SIGINT, останавливаем бота...');
    await bot.stopPolling();
    process.exit(0);
});

process.on('SIGTERM', async () => {
    console.log('Получен сигнал SIGTERM, останавливаем бота...');
    await bot.stopPolling();
    process.exit(0);
});

// Обработка необработанных ошибок
process.on('uncaughtException', (error) => {
    console.error('Необработанное исключение:', error);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Необработанный reject:', reason);
});

console.log('Бот готов к работе');