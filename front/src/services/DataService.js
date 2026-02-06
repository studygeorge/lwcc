// lwcc/front/src/services/DataService.js
import { Project } from '../models/Project';
import { Service } from '../models/Service';
import { Contact } from '../models/Contact';

export class DataService {
    static getServices() {
        return [
            new Service(
                1,
                'Помощь в подборе участка',
                'Поможем выбрать идеальный участок под строительство с учетом всех требований: расположение, инфраструктура, коммуникации, грунт.',
                '/images/service-land.jpg',
                'services'
            ),
            new Service(
                2,
                'Заборы',
                'Проектирование и установка заборов любой сложности: деревянные, металлические, каменные. Современный дизайн и надежность.',
                '/images/service-fence.jpg',
                'services'
            ),
            new Service(
                3,
                'Септики',
                'Полный комплекс инженерных работ: септики, водоснабжение, канализация. Проектирование и монтаж под ключ.',
                '/images/service-septic.jpg',
                'services'
            ),
            new Service(
                4,
                'Строительство домов',
                'Полный цикл строительства загородных домов от фундамента до кровли. Индивидуальное проектирование и качественная реализация под ключ.',
                '/images/service-house.jpg',
                'services'
            ),
            new Service(
                5,
                'Строительство бань и хоз. построек',
                'Строительство бань, гаражей, беседок, хозяйственных построек. Качественные материалы и профессиональное исполнение.',
                '/images/service-bath.jpg',
                'services'
            ),
            new Service(
                6,
                'Ландшафтные работы',
                'Проектирование и создание ландшафтного дизайна: озеленение, цветники, декоративные элементы, благоустройство территории.',
                '/images/service-landscape.jpg',
                'services'
            ),
            new Service(
                7,
                'Дизайн интерьера',
                'Создание индивидуального дизайн-проекта интерьера: планировочные решения, подбор материалов, 3D-визуализация.',
                '/images/service-interior.jpg',
                'services'
            ),
            new Service(
                8,
                'Внутренняя отделка',
                'Качественная отделка помещений: штукатурка, шпаклевка, покраска, обои, напольные покрытия.',
                '/images/service-finishing.jpg',
                'services'
            ),
            new Service(
                9,
                'Подбор, покупка, установка и расстановка мебели и техники',
                'Помощь в выборе, закупке, доставке, установке и расстановке мебели и техники. Комплектация под ключ.',
                '/images/service-furniture.jpg',
                'services'
            )
        ];
    }

    static getProjects() {
        // В СЛАЙДЕРЕ НЕ ПОКАЗЫВАЕМ МЕТРАЖ ОТДЕЛЬНО: area = '' (пусто)
        // ПРОЕКТЫ 01 и 02 УБРАНЫ: остаются 5 проектов (03–07)
        const projects = [
            (() => {
                const p = new Project(
                    3,
                    'LW 110 – ОДНОЭТАЖНЫЙ ДОМ 110 М²',
                    'Мастер-спальня и большая терраса',
                    '/images/lwcc/project-3.png',
                    '',
                    1
                );
                p.slug = 'project-03';
                return p;
            })(),

            (() => {
                const p = new Project(
                    4,
                    'LW 232 – ДВУХЭТАЖНЫЙ ДОМ 232 М²',
                    'Газобетон для постоянного проживания',
                    '/images/lwcc/project-4.jpg',
                    '',
                    2
                );
                p.slug = 'project-04';
                return p;
            })(),

            (() => {
                const p = new Project(
                    5,
                    'LW 115 – ОДНОЭТАЖНЫЙ ДОМ 115 М²',
                    'Каркас / газобетон. Выход на террасу',
                    '/images/lwcc/project-5.png',
                    '',
                    1
                );
                p.slug = 'project-05';
                return p;
            })(),

            (() => {
                const p = new Project(
                    6,
                    'LW 80 – ОДНОЭТАЖНЫЙ ДОМ 80 М²',
                    'Три спальни. Каркас / газобетон',
                    '/images/lwcc/project-6.png',
                    '',
                    1
                );
                p.slug = 'project-06';
                return p;
            })(),

            (() => {
                const p = new Project(
                    7,
                    'LW 58 – КАРКАСНЫЙ ДОМ 58 М²',
                    'Компактный дом для ПМЖ и дачи',
                    '/images/lwcc/project-7.jpg',
                    '',
                    1
                );
                p.slug = 'project-07';
                return p;
            })()
        ];

        return projects;
    }

    static getContacts() {
        return new Contact(
            'Lakewood',
            '+7 (964) 389-52-60',
            'info@lwcc.ru',
            'Санкт-Петербург, Выставка коттеджей, Мурманское шоссе, д. 40'
        );
    }
}