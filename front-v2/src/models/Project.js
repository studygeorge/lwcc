/**
 * Модель проекта
 */
export class Project {
    constructor(id, title, description, image, area, year) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.area = area;
        this.year = year;
    }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getImage() {
        return this.image;
    }

    getArea() {
        return this.area;
    }

    getYear() {
        return this.year;
    }

    // Добавляем недостающий метод
    getFormattedArea() {
        return this.area;
    }

    // Дополнительные методы форматирования
    getFormattedYear() {
        return this.year.toString();
    }
}