/**
 * Модель услуги/предложения
 */
export class Service {
    constructor(id, title, description, image, category) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.category = category;
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

    getCategory() {
        return this.category;
    }
}